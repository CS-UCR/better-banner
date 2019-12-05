import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/api/info/offerings/:perPage/:currentPage', (req, res) => {
    const { perPage, currentPage } = req.params;
    db.reads.getOfferings(perPage, currentPage).then(offeringData => {
        db.reads.getOfferingsCount(perPage, currentPage).then(([rowCount]) => {
            res.json({
                data: { rows: offeringData, totCount: rowCount.count }
            });
        });
    });
});

router.get('/api/info/courses', (req, res) => {
    db.reads.getCourses().then(coursesData => {
        res.json({ data: coursesData });
    });
});

router.get('/api/info/students', (req, res) => {
    db.reads.getStudents().then(studentList => {
        res.json({ data: studentList });
    });
});

module.exports = router;
