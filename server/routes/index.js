/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import faker from 'faker';
import db from '../db';

const router = express.Router();

const conflicts = require('../lib/conflicts');

const genOfferings = () => ({
    courseId: faker.random.number(), // will be redefined later
    // teacher: null, // will be redefined later
    // capacity: faker.random.number(),
    // location: `${faker.hacker.noun()} ${faker.random.number(400)}`,
    // start: chooseMeeting(faker.random.number(1)),
    days: 'MWF',
    start: faker.date.recent(),
    end: faker.date.soon()
    // quarter: `${chooseQuarter(faker.random.number(2))}19`
});

function generateObj() {
    const temp = [];
    // console.log('hello');
    // temp.push(genOfferings());
    return db
        .select('*')
        .from('offerings')
        .limit(2);
}

// router.get('/', function(req, res, next) {
//     console.log('starting executing');

//     // console.log(genOfferings());
//     conflicts.courseConflictMsg(generateObj());
// });

router.get('/api/sandbox', function(req, res, next) {
    // conflicts.areOverlapping();
    // console.log('getting called');
    generateObj()
        .then(rows => {
            // console.log('success?');
            res.status(200).send(rows);
            console.log(rows);
            console.log(conflicts.areOverlapping(rows[0], rows[1]));
            // console.log(rows);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
