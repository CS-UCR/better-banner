// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';

const genMeeting = choice => {
    switch (choice) {
        case 0:
            return 'MWF';
        case 1:
            return 'TR';
        default:
            return 'MWF';
    }
};

const genQuarter = choice => {
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

const genUser = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    id: faker.random.number()
});

const genStudent = () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    sId: faker.random.number() // key
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
    tags: [] // will be an array of programs that it qualifies for?
});

const genOfferings = () => ({
    courseId: null, // will be redefined later
    teacher: null, // will be redefined later
    capacity: faker.random.number(),
    location: `${faker.hacker.noun()} ${faker.random.number(400)}`,
    start: genMeeting(faker.random.number(1)),
    quarter: `${genQuarter(faker.random.number(2))}19`
});

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('table_name')
        .del()
        .then(function() {
            // Inserts seed entries
            return knex('table_name').insert([
                { id: 1, colName: 'rowValue1' },
                { id: 2, colName: 'rowValue2' },
                { id: 3, colName: 'rowValue3' }
            ]);
        });
};
