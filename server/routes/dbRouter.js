const express = require('express');
const dbController = require('../controllers/db.js');

const router = express.Router();

router.post('/addtrip', dbController.addTrip,
    // dbController.logIn,
    (req, res) => {
        res.status(200).json(res.locals.user.trips)
});

module.exports = router;