/* eslint-disable camelcase */
import datefns from 'date-fns';
import read from '../db/reads';
import db from '../db';
import { date } from 'date-fns/locale';

export function areOverlapping(course1, course2) {
    const { start: start1, end: end1 } = course1;
    const { start: start2, end: end2 } = course2;

    // console.log(parseInt(start1.substring(0,2), 10)); // 3
    // console.log(parseInt(end1.substring(0,2), 10)); // 8
    // console.log(parseInt(start2.substring(0,2), 10));// 6
    // console.log(parseInt(end2.substring(0,2), 10)); // 10

    if (
        parseInt(start1.substring(0, 2), 10) <
            parseInt(end2.substring(0, 2), 10) &&
        parseInt(end1.substring(0, 2), 10) >= parseInt(end2.substring(0, 2), 10)
    ) {
        return true;
    }
    if (
        parseInt(start1.substring(0, 2), 10) <=
            parseInt(start2.substring(0, 2), 10) &&
        parseInt(end1.substring(0, 2), 10) >=
            parseInt(start2.substring(0, 2), 10)
    ) {
        return true;
    }

    return false;
}
// let schedule = ["Biology", "Chemistry", "Physics", "Algebra", "Biology", "English", "Biology", "Physics"];

// returns an array with conflicting courses. Ex: ['biology', 'chemistry'] -> biology and chemistry conflict
function getOverlappingClassesByDay(schedule = []) {
    const overlappingClasses = [];
    for (let i = 0; i < schedule.length; i += 1) {
        if (i < schedule.length - 1) {
            for (let j = i + 1; j < schedule.length; j += 1) {
                if (schedule[i].days === schedule[j].days) {
                    const overlapping = areOverlapping(
                        schedule[i],
                        schedule[j]
                    );
                    if (overlapping) {
                        overlappingClasses.push(schedule[i], schedule[j]);
                    }
                }
            }
        }
    }
    return overlappingClasses;
}

// returns an object that contain a key thats a course_id and all the courses it conflicts with.
function getConflictedCourses(schedule = []) {
    const course = {};
    for (let i = 0; i < schedule.length; i += 2) {
        for (let j = 0; j < schedule.length; j += 1) {
            if (
                schedule[i].course_id === schedule[j].course_id &&
                j % 2 === 0
            ) {
                if (course[schedule[i].course_id]) {
                    const temp = course[schedule[i].course_id];
                    course[schedule[i].course_id] = [
                        ...temp,
                        schedule[j].course_id
                    ];
                } else {
                    course[schedule[i].course_id] = [schedule[j].course_id];
                }
            }
        }
    }
    return course;
}

// results[] course IDs they are trying to register too
function dbResults(completedCourses = [], registeringTo = []) {
    let counter = 0;
    const preReqNotCompleted = [];
    for (let i = 0; i < registeringTo.length; i += 1) {
        for (let j = 0; j < completedCourses.length; ) {
            if (registeringTo[i].dependencies.pre !== completedCourses[j]) {
                // preReqCompleted[counter] = registeringTo[i];
                // counter += 1;
                counter += 1;
                if (counter >= completedCourses.length) {
                    preReqNotCompleted.push(registeringTo[i]);
                }
            } else {
                j += 1;
            }
        }
    }
    return preReqNotCompleted;
}

// probably going to make db call to the read
// also since I am making a db call I would need to a 'next import'
export async function checkPreReq(schedule = [], studentId) {
    // let conflictingCourses = [];
    // const registeredCourses = classes.courses; // this is an array of course IDs they are trying to register for
    // const registeredCourses = [];
    // for ( let i = 0; i < classes.courses.length; i += 1){
    //     registeredCourses[i] = classes.courses[i].course_id;
    // }

    // const registeredCourses = db.reads.getMyCompletedCourses(studentId);
    return db.reads
        .getMyCompletedCourses(studentId)
        .then(dbResultsArray => dbResults(dbResultsArray, schedule))
        .catch(err => console.log(err));
}

// prints the object that contains all the conflicting courses
export async function courseConflictMsg(schedule = [], studentId) {
    // let flag = false;
    const temp = getOverlappingClassesByDay(schedule);

    const conflictingTimes = getConflictedCourses(temp);
    const isConflicting = !Object.values(conflictingTimes).every(
        value => value.length < 1
    );
    if (isConflicting) {
        return Promise.resolve(false);
    }
    return true;

    // return checkPreReq(schedule, studentId).then(conflicts => {
    //     if (conflicts.length >= 1) {
    //         return false;
    //     }
    //     return true;
    // });
}

export async function classConflict(data) {
    const schedule = [];
    schedule[0] = data.course;
    return (
        db.reads
            .getMyRegistration(data.studentId)
            // .then(dbResultsArray => dbResults(dbResultsArray, registeredCourses))
            .then(registeredCourses => {
                const combined = schedule.concat(registeredCourses);
                return courseConflictMsg(combined, data.studentId);
            })
            .catch(err => console.log(err))
    );
}

// export default function conflict(course) {
//     courseConflictMsg([course]);
//     return Promise.resolve({ success: true, conflictingCourses: [] });
// }
