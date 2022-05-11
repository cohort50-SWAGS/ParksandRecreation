const express = require('express');
const apiController = require('../controllers/api.js');

const router = express.Router();

router.post('/getlocation',
    apiController.getByLocation,
    apiController.getRecAreaByID,
    (req, res) => {
        res.status(200).json(res.locals.recAreas)
    }
);

// router.post('/getCity', apiController.getCityName, (req, res) => {
//     res.status(200).json(res.locals.location)
// })
module.exports = router;