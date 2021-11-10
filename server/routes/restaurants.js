// ROUTES
const express = require('express');

const { getAllRestaurants, createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurants');



const router = express.Router();


router.route('/').get(getAllRestaurants).post(createRestaurant);
router.route('/:id').get(getRestaurant).put(updateRestaurant).delete(deleteRestaurant);




module.exports = router




