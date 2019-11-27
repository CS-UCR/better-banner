import express from 'express';
const router = express.Router();

import faker from 'faker';

const conflicts = require('../lib/conflicts');

const genOfferings = () => ({
    courseId: faker.random.number(), // will be redefined later
    //teacher: null, // will be redefined later
    //capacity: faker.random.number(),
    //location: `${faker.hacker.noun()} ${faker.random.number(400)}`,
    //start: chooseMeeting(faker.random.number(1)),
    days: 'MWF',
    start: faker.date.recent(),
    end: faker.date.soon(),
    //quarter: `${chooseQuarter(faker.random.number(2))}19`
});

function generateObj(){
    const temp = [];
    for (let i = 0; i < 100; i += 1){
        console.log("hello");
        temp.push(genOfferings());
    }
    console.log(temp);
    return temp;
}

router.get('/', function(req, res, next) {
    console.log("starting executing");

    console.log(faker.random.number());
    console.log(faker.date.recent());
    console.log(faker.date.soon());
    //conflicts.courseConflictMsg(generateObj());
  });

// router.get('/', conflicts.courseConflictMsg);
  
module.exports = router;