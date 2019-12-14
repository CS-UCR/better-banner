/* eslint-disable camelcase */
import db from './db';
import reads from './reads';

const raw = () => db;

const writeRegistration = (classes, studentId) =>
    reads.getMyRegistration(studentId).then(courses => {
        const courseIds = courses.map(({ course_id }) => course_id);
        const allCourses = [...courseIds, ...classes];
        return db
            .table('registration')
            .update('classes', allCourses)
            .where('student_id', studentId);
    });

export default {
    raw,
    writeRegistration
};
