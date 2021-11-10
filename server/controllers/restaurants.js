// CONTROLLERS

const getAllRestaurants = (req, res) => {
	
	res.status(200).json({ msg: 'getAllRestaurants' });
};


const createRestaurant = (req, res) => {
	console.log('req.body = ', req.body);
	
	const restaurant = req.body;
	
	res.status(201).json({ msg: restaurant });
};


const getRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	
	res.status(200).json({ msg: 'getRestaurant' });
};


const updateRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	console.log('req.body = ', req.body);
	
	const restaurant = req.body;
	
	res.status(200).json({ msg: restaurant });
};


const deleteRestaurant = (req, res) => {
	console.log('req.params = ', req.params);
	
	res.status(204).json({ status: 'success' });
};





module.exports = {
	getAllRestaurants,
	createRestaurant,
	getRestaurant,
	updateRestaurant,
	deleteRestaurant
}




