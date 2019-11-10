import express from 'express';

const router = express.Router();

// grab the user list to select from
router.get('/list', (req, res) => {
    res.json({ message: 'TODO' });
});

// grab basic student audit information
router.get('/:studentId/audit', (req, res) => {
    const { studentId } = req.params;
    // TODO: replace with a db query
    res.json({ message: 'test', studentId });
});

module.exports = router;
