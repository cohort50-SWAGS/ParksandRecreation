const express = require('express');
const dbController = require('../controllers/db.js');

const router = express.Router();

router.get('/gettrips/:username', 
    dbController.getTrips,
    (req,res) => {
        res.status(200).json(res.locals.trips);
    }
);

router.post('/addtrip',
    dbController.addTrip,
    (req, res) => {
        res.status(200).json('trip added!');
    }
);

router.delete('/',
    dbController.deleteTrip,
    (req, res) => {
        res.status(200).json('trip deleted!');
    }
);

module.exports = router;