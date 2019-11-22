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

const genEmployee = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    employeeNumber: faker.random.number() // key
});

const genClass = () => ({
    courseId: faker.random.number(),
    title: faker.random.words(),
    units: faker.random.number(),
    dependencies: {
        pre: null,
        co: null
    },
    tags: []
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

const seedClasses = () => {
    const courseCount = 100;
    return new Array(courseCount).map(() => genClass());
};

// const initQuarters = knex => {
//     const quarterCount = 50;
//     return new Array(quarterCount).map(() => )
// };

exports.seed = function(knex) {
    return Promise.all([
        seedUsers(knex).then(() => {
            // console.log(arg);
            return seedUndergrads(knex);
        })
    ]);
};
