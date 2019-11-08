/* eslint-disable no-unused-vars */
/**
 *  The flow is as follows
 *  1. Load all currently registered courses
 *  2. As the student tries to add courses, validate as much as possible client side (i.e. pre reqs, co reqs, etc.)
 *  2a.  If it is possible, display a little messsage that says this course is valid to add
 *  2b.  If it is not possible, display a reason why; course requires a lab too, course requires a discussion too, etc.
 *  3. When they click the actual "register" button, then actually call the server function where additional server side validation is done
 */

// Actions
const LOAD = 'better-banner/classes/LOAD';
const ADD = 'better-banner/classes/ADD';
const REMOVE = 'better-banner/classes/REMOVE';

// Reducer
// the state should just be an array of classes the student has in their current schedule
export default function reducer(state = {}, action = {}) {

    const validate = (prevState, nextState) => {
        /**
         * function to validate that the change they are trying to make is valid
         * i.e. if they're adding a lecture but not a discussion, validate that here
         * output the appropriate message
         * */
    }
    switch (action.type) {
        case ADD: 
            // calculate new state
            // DO NOT MUTATE THE CURRENT STATE i.e. do not do "state = ..."
            // i.e. add the class to the state
            return state;
        case REMOVE:
            // calculate new state & return that new calculated state
            // DO NOT MUTATE THE CURRENT STATE i.e. do not do "state = ..."
            // i.e. remove the class from the state
            return state;
        case LOAD:
            // load the data from the server
            return state;
        default:
            return state;
    }
}

// Action Creators
/**
 * These are just the action creators
 * i.e. they're pretty much done.
 */

/**
 * @arg quarterCode just a code that refers to what quarter they're trying to fetch for their schedule; ex F17, W18, S18
 * @arg studentId student's database id
 */
export function loadClasses(studentId, quarterCode) {
    return { type: LOAD, payload: { studentId, quarterCode }};
}

export function addClasses(classes) {
    return { type: ADD, payload: { classes } };
}

export function removeClasses(classes) {
    return { type: REMOVE, payload: { classes } };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getClasses() {
    // actually fetch the classes from the server
}

export function triggerNotification() {
    // trigger a notification here this will be in another file
}