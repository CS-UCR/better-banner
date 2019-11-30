import express from 'express';
import db from '../db';

const router = express.Router();

router.get('/api/info/offerings', (req, res) => {
    db.reads.getOfferings().then(offeringData => {
        res.json({ data: offeringData });
    });
});

router.get('/api/info/courses', (req, res) => {
    db.reads.getCourses().then(coursesData => {
        res.json({ data: coursesData });
    });
});

module.exports = router;
