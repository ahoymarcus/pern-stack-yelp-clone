// ROUTES
const express = require('express');

const { getAllRestaurants } = require('../controllers/restaurants');



const router = express.Router();


router.route('/').get(getAllRestaurants);




module.exports = router




