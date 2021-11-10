// CONTROLLERS

const getAllRestaurants = (req, res) => {
	
	res.status(200).json({ msg: 'getAllRestaurants' });
};


const createRestaurant = (req, res) => {
	
	res.status(201).json({ msg: 'createRestaurant' });
};


const getRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	
	res.status(200).json({ msg: 'getRestaurant' });
};


const updateRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	
	
	res.status(200).json({ msg: 'updateRestaurant' });
};


const deleteRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	
	res.status(200).json({ msg: 'deleteRestaurant' });
};





module.exports = {
	getAllRestaurants,
	createRestaurant,
	getRestaurant,
	updateRestaurant,
	deleteRestaurant
}




