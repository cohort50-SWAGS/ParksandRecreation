const express = require('express');
const userController = require('../controllers/user.js');

const router = express.Router();

router.post('/', userController.add, 
    userController.verify,
    (req, res) => {
    res.status(200).json(res.locals.response)
});

module.exports = router;