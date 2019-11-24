import datefns from 'date-fns';

/**
 * @description helper function for determining all overlapping classes
 * @arg classesToCheck - array of all the classes to check
 * assume each one has start & end property -- i.e. start & end key
 */
function getOverlappingClasses(classesToCheck = []) {
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

/**
 *
 * @param {*} classes - this will be an array with the properties classes.days and classes.times.
 * possible values for day: 'MWF' or 'TTH'
 * possible values for times: date obj
 * possibly use date-fns
 */

export function checkTimeConflict(classes) {}

// classes.dependencies.co
export function checkCoReq(classes) {}

// probably going to make db call to the read
// also since I am making a db call I would need to a 'next imoport'
export function checkPreReq(classes) {}
