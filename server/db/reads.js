import db from './db';

const raw = () => db;

const getStudents = () =>
    db
        .select()
        .from('undergrads')
        .leftJoin('users', 'undergrads.student_id', 'users.id');

const getOfferings = () =>
    db
        .select()
        .from('offerings')
        .leftJoin('courses', 'offerings.course_id', 'courses.course_id')
        .leftJoin('users', 'offerings.instructor', 'users.id')
        .limit(10);

const getCourses = () => db.select().from('courses');

// const getMyAudit = studentId =>
//     db
//         .select()
//         .from('undergrads')
//         .where(`id = ${studentId}`);

const getMyRegistration = studentId =>
    db
        .select()
        .from(
            db
                .select(db.raw('unnest(classes) as course_id'))
                .from('registration')
                .where('student_id', studentId)
                .as('t')
        )
        .leftJoin('offerings', 'offerings.course_id', 't.course_id')
        .leftJoin('courses', 'courses.course_id', 't.course_id');

// db.raw(
//     `(SELECT UNNEST(completed_courses) as course_id FROM undergrads WHERE student_id = ${studentId}) as t`
// )
const getMyCompletedCourses = studentId =>
    db
        .select('*')
        .from(
            db
                .select(db.raw('unnest(completed_courses) as course_id'))
                .from('undergrads')
                .where('student_id', studentId)
                .as('t')
        )
        .leftJoin('courses as c', 'c.course_id', 't.course_id');

export default {
    raw,
    getOfferings,
    getCourses,
    // getMyAudit,
    getMyRegistration,
    getMyCompletedCourses,
    getStudents
};
