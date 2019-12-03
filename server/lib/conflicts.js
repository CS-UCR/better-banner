import datefns from 'date-fns';
import read from '../db/reads';
import db from '../db';

// let schedule = ["Biology", "Chemistry", "Physics", "Algebra", "Biology", "English", "Biology", "Physics"];

// returns an array with conflicting courses. Ex: ['biology', 'chemistry'] -> biology and chemistry conflict
function getOverlappingClassesByDay(schedule = []) {
    const overlappingClasses = [];
    for (let i = 0; i < schedule.length; i += 1) {
        if (i < schedule.length - 1) {
            for (let j = i + 1; j < schedule.length; j += 1) {
                if (schedule[i].days === schedule[j].days) {
                    const overlapping = datefns.areOverlapping(
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

export function areOverlapping(course1, course2){
    const { start: start1, end: end1 } = course1;
    const { start: start2, end: end2 } = course2;

    // console.log(parseInt(start1.substring(0,2), 10)); // 3
    // console.log(parseInt(end1.substring(0,2), 10)); // 8
    // console.log(parseInt(start2.substring(0,2), 10));// 6
    // console.log(parseInt(end2.substring(0,2), 10)); // 10

    if( (parseInt(start1.substring(0,2), 10) < parseInt(end2.substring(0,2), 10)) && (parseInt(end1.substring(0,2), 10) >= parseInt(end2.substring(0,2), 10)) ){
        return true;
    }
    if( (parseInt(start1.substring(0,2), 10) <= parseInt(start2.substring(0,2), 10)) && (parseInt(end1.substring(0,2), 10) >= parseInt(start2.substring(0,2), 10)) ){
        return true;
    }

    return false;
}


// returns an object that contain a key thats a courseID and all the courses it conflicts with.
function getConflictedCourses(schedule = []){
    const course = {};
    for(let i = 0; i < schedule.length; i += 2){
        for (let j = 0; i < schedule.length; j += 1){
            if(schedule[i].courseID === schedule[j].courseID && (j % 2 === 0)){
                if(course[schedule[i].courseID]){
                    course[schedule[i].courseID].push(schedule[j]);                   
                }
                else{
                    course[schedule[i].courseID] = [schedule[j].courseID];
                }
            }

        }
    }
    return course;
}


// prints the object that contains all the conflicting courses
export function courseConflictMsg(schedule = []){
    const temp = getOverlappingClassesByDay(schedule);
    const conflictingCourses = getConflictedCourses(temp);
    console.log(conflictingCourses);
}






/*
StudentClass {
    Title: "Biology 101"
    courseID: 12345
    days: ['Monday', 'Wednesday', 'Thursday']
    days: 'MWR'

}
*/


/**
 * @description helper function for determining all overlapping classes
 * @arg classesToCheck - array of all the classes to check
 * assume each one has start & end property -- i.e. start & end key
 
function getOverlappingTimes(classesToCheck = []) {
    const overlappingClasses = [];
    for (let i = 0; i < classesToCheck.length; i += 1) {
        if (i < classesToCheck.length - 1) {
            for (let j = i + 1; j < classesToCheck.length; j += 1) {
                if (i !== j) {
                    const overlapping = datefns.areIntervalsOverlapping(
                        classesToCheck[i],
                        classesToCheck[j]
                    );
                    if (overlapping) {
                        overlappingClasses.push(
                            classesToCheck[i],
                            classesToCheck[j]
                        );
                    }
                }
            }
        }
    }
    return overlappingClasses;
}
*/

/**
 *
 * @param {*} classes - this will be an array with the properties classes.days and classes.times.
 * possible values for day: 'MWF' or 'TTH'
 * possible values for times: date obj
 * possibly use date-fns
 */

export function checkTimeConflict(classes) {}




// results[] course IDs they are trying to register too
function dbResults(completedCourses = [], registeringTo = []){
    let counter = 0;
    const preReqNotCompleted = [];
    for (let i = 0; i < registeringTo.length; i += 1) {
        for (let j = 0; j < completedCourses.length; ) {
            if (registeringTo[i].dependencies.pre !==  completedCourses[j]){
                // preReqCompleted[counter] = registeringTo[i];
                // counter += 1;     
                counter += 1;
                if (counter >= completedCourses.length){
                    preReqNotCompleted.push(registeringTo[i]);
                }
            }
            else {
                j += 1;
            }
        }
    }
    return preReqNotCompleted;
}




// probably going to make db call to the read
// also since I am making a db call I would need to a 'next import'
export function checkPreReq(classes) {
    // let conflictingCourses = [];
    const studentID = classes.student;
    const registeredCourses = classes.courses; // this is an array of course IDs they are trying to register for
    return db.reads.getMyCompletedCourses(studentID).then(
        (dbResultsArray) => dbResults(dbResultsArray, registeredCourses)
    ).catch(err => console.log(err));

}

// assume that we are only getting the courses we are registered for
// return pre req courses for that course


export default{
    checkPreReq,
    areOverlapping,
    courseConflictMsg
};
