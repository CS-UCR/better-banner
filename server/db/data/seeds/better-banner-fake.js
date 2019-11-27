/* eslint-disable indent */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';

/**
 * SELECTION & RELATION FUNCTIONS
 */
const relate = (knex, { table, field }) => knex.select(field).from(table);
const selectRandom = (options = [], used = [], chosen = undefined) =>
    chosen === undefined || used.includes(chosen.id)
        ? selectRandom(
              options,
              used,
              options[faker.random.number(options.length - 1)]
          )
        : chosen;

const except = (notInMe = [], fn) => {
    let result;
    do {
        result = fn();
    } while (!notInMe.includes(result));
    return result;
};

/**
 * DETAIL CHOOSERS
 */
const chooseMeeting = choice => {
    switch (choice) {
        case 0:
            return 'MWF';
        case 1:
            return 'TR';
        default:
            return 'MWF';
    }
};

const chooseQuarter = choice => {
    switch (choice) {
        case 0:
            return 'F';
        case 1:
            return 'W';
        case 2:
            return 'S';
        default:
            return 'F';
    }
};

/**
 * GENERATORS FOR SINGLE INSTANCES/ROWS
 */

const genUser = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    id: faker.random.number()
});

const genQuarter = () => ({
    id: faker.random.number(),
    quarterCode: `${chooseQuarter(faker.random.number())}${faker.random.number(
        20
    )}`
    // possibly other misc details of the quarter later
});

const genUndergrad = student_id => ({
    student_id,
    completed_courses: []
});

const genProfessors = ({ emp_id }) => ({
    emp_id
});

const genClass = () => ({
    course_id: faker.random.number(),
    title: faker.random.words(),
    units: faker.random.number(),
    dependencies: {
        pre: null
        // co: null
    }
});

const genOfferings = () => ({
    courseId: null, // will be redefined later
    teacher: null, // will be redefined later
    capacity: faker.random.number(),
    location: `${faker.hacker.noun()} ${faker.random.number(400)}`,
    start: chooseMeeting(faker.random.number(1)),
    quarter: `${chooseQuarter(faker.random.number(2))}19`
});

/**
 * SEEDS
 */
const seedUsers = knex => {
    const userCount = 100;
    return knex
        .insert(Array.from(new Array(userCount)).map(() => genUser()))
        .into('users');
};

const seedUndergrads = knex => {
    const undergradCount = 50;
    const underGrads = [];
    return knex
        .select('id')
        .from('users')
        .then(options => {
            // console.log(options);
            return Array.from(new Array(undergradCount)).map(() => {
                const user = selectRandom(options, underGrads);
                underGrads.push(user.id);
                return genUndergrad(user.id);
            });
        })
        .then(undergrads => {
            return knex.insert(undergrads).into('undergrads');
        })
        .catch(err => {
            console.log(err);
        });
};

const seedProfessors = knex => {
    const professorCount = 10;
    const professors = [];
    let pool = [];
    return knex
        .select('id')
        .from('users')
        .then(allUsers => {
            pool = allUsers;
            return knex.select('id').from('undergrads');
        })
        .then(undergrads => {
            const undergradIds = undergrads.map(({ id }) => id);
            pool = pool.filter(user => undergradIds.includes(user.id));
            return knex
                .insert(
                    Array.from(new Array(professorCount)).map(() => {
                        const prof = except(undergradIds, () =>
                            selectRandom(pool, professors)
                        );
                        professors.push(prof);
                        return genProfessors(prof);
                    })
                )
                .into('professors');
        });
};

const seedClasses = knex => {
    const courseCount = 100;
    const classes = Array.from(new Array(courseCount)).map(() => genClass());
    const classesWithDependencies = classes.map(currentCourse => {
        // 50% chance for this class to have a pre-req/co-req
        if (Math.random() * 100 > 50) {
            const preReq = except([currentCourse.course_id], () =>
                selectRandom(classes, [])
            );
            // NOT DOING CO-REQS FOR NOW
            // const coReq = selectRandom(classes, []);
            return {
                ...currentCourse,
                dependencies: {
                    pre: preReq.course_id
                }
            };
        }
        return currentCourse;
    });
    return knex.insert(classesWithDependencies).into('courses');
};

const seedOfferings = knex => {
    const offeringsCount = 25;
    const offerings = Array.from(new Array(offeringsCount)).map(() =>
        genOfferings()
    );
};

exports.seed = function(knex) {
    return Promise.all([
        seedUsers(knex).then(() => seedUndergrads(knex)),
        seedClasses(knex)
    ]);
};
