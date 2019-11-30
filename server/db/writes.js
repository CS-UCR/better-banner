import db from './db';

const raw = () => db;

const writeRegistration = (classes, studentId) =>
    db
        .table('registration')
        .update('classes', classes)
        .where('studentId', studentId);

export default {
    raw,
    writeRegistration
};
