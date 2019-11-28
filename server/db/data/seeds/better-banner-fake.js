/* eslint-disable indent */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';

/**
 * HELPER FNS
 */
const selectRandom = (
    options = [],
    used = [],
    chosen = undefined,
    debug = false
) => {
    if (debug) {
        console.log('used: ', used);
        console.log(used.includes(chosen));
    }
    return chosen === undefined || used.includes(chosen)
        ? selectRandom(
              options,
              used,
              options[faker.random.number(options.length - 1)]
          )
        : chosen;
};

const except = (notInMe = [], fn, accessorFn = undefined) => {
    let result;
    let condition = r => notInMe.includes(r);

    if (accessorFn) {
        condition = r => notInMe.includes(accessorFn(r));
    }

    do {
        result = fn();
    } while (condition(result));
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

// const chooseQuarter = choice => {
//     switch (choice) {
//         case 0:
//             return 'F';
//         case 1:
//             return 'W';
//         case 2:
//             return 'S';
//         default:
//             return 'F';
//     }
// };

/**
 * GENERATORS FOR SINGLE INSTANCES/ROWS
 */

const genUser = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    id: faker.random.number()
});

// const genQuarter = () => ({
//     id: faker.random.number(),
//     quarterCode: `${chooseQuarter(faker.random.number())}${faker.random.number(
//         20
//     )}`
//     // possibly other misc details of the quarter later
// });

const genUndergrad = student_id => ({
    student_id,
    completed_courses: []
});

const genProfessors = emp_id => ({
    emp_id
});

const genCourse = () => ({
    course_id: faker.random.number(),
    title: faker.random.words(),
    units: faker.random.number(),
    dependencies: {
        pre: null
        // co: null
    }
});

const genOfferings = () => {
    const startTime = faker.random.number(12);
    return {
        course_id: null, // will be redefined later
        instructor: null, // will be redefined later
        capacity: faker.random.number(100),
        location: `${faker.name.lastName()} ${faker.random.number(400)}`,
        days: chooseMeeting(faker.random.number(1)),
        start: `${startTime}:00:00`,
        end: `${faker.random.number(5) + startTime}:00:00`
        // quarter: `${chooseQuarter(faker.random.number(2))}19`
    };
};

/**
 * SEEDS
 */
const seedUsers = knex => {
    const userCount = 500;
    const currentUsers = [];
    return knex
        .insert(
            Array.from(new Array(userCount)).map(() => {
                const user = except(currentUsers, genUser, obj => obj.id);
                currentUsers.push(user.id);
                return user;
            })
        )
        .into('users');
};

const seedUndergrads = knex => {
    const undergradCount = 250;
    const underGrads = [];
    return knex
        .select('id')
        .from('users')
        .then(options => {
            const ids = options.map(({ id }) => id);
            return Array.from(new Array(undergradCount)).map(() => {
                const userId = selectRandom(ids, underGrads);
                underGrads.push(userId);
                return genUndergrad(userId);
            });
        })
        .then(undergrads => {
            return knex.insert(undergrads).into('undergrads');
        })
        .catch(err => {
            console.error('################## UNDERGRADS ###################');
            console.log(err);
        });
};

const seedProfessors = knex => {
    const professorCount = 50;
    const professors = [];

    // select all ids from the users table
    return (
        knex
            .select('id')
            .from('users')
            .whereNotIn(
                'id',
                knex.select('student_id as id').from('undergrads')
            )
            // currently only have id's of non students
            .then(users => {
                const userIds = users.map(({ id }) => id);
                return Array.from(new Array(professorCount)).map(() => {
                    const prof = selectRandom(
                        userIds,
                        professors,
                        undefined
                        // true
                    );
                    professors.push(prof);
                    // console.log('accepted: ', prof);
                    return genProfessors(prof);
                });
            })
            .then(profs => {
                return knex.insert(profs).into('professors');
            })
            .catch(err => {
                console.error(
                    '################## PROFESSORS ###################'
                );
                console.log(err);
            })
    );
};

const seedCourses = knex => {
    const courseCount = 1000;
    const currentCourses = [];
    const classes = Array.from(new Array(courseCount)).map(() => {
        const course = except(currentCourses, genCourse, obj => obj.course_id);
        currentCourses.push(course.course_id);
        return course;
    });
    const classesWithDependencies = classes.map(currentCourse => {
        // 50% chance for this class to have a pre-req/co-req
        if (Math.random() * 100 > 50) {
            const preReq = selectRandom(classes, [currentCourse.course_id]);
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
    return knex
        .insert(classesWithDependencies)
        .into('courses')
        .catch(err => {
            console.error('################## COURSES ###################');
            console.log(err);
        });
};

const seedOfferings = knex => {
    const offeringsCount = 500;
    const offerings = [];
    let courseIds = [];
    return knex
        .select('course_id')
        .from('courses')
        .then(courses => {
            courseIds = courses.map(({ course_id }) => course_id);
            return knex.select('emp_id').from('professors');
        })
        .then(profs => {
            return knex
                .insert(
                    Array.from(new Array(offeringsCount)).map(() => {
                        const selection = selectRandom(courseIds, offerings);
                        const prof = selectRandom(
                            profs.map(({ emp_id }) => emp_id)
                        );
                        offerings.push(selection);
                        return {
                            ...genOfferings(),
                            course_id: selection,
                            instructor: prof
                        };
                    })
                )
                .into('offerings');
        })
        .catch(err => {
            console.error('################## OFFERINGS ###################');
            console.log(err);
        });
};

exports.seed = function(knex) {
    return seedUsers(knex)
        .then(() => seedUndergrads(knex))
        .then(() => seedProfessors(knex))
        .then(() => seedCourses(knex))
        .then(() => seedOfferings(knex));
    // seedCourses(knex).then(() => seedOfferings(knex))
};
