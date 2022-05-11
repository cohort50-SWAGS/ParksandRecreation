const express = require('express');
const dbController = require('../controllers/db.js');

const router = express.Router();

router.post('/addtrip', dbController.addTrip,
    (req, res) => {
        res.status(200).json(res.locals.user.trips)
});

router.get('/gettrips/:username', dbController.getTrips,
(req,res) => {
    res.status(200).json(res.locals.trips);
});
module.exports = router;