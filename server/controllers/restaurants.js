// CONTROLLERS
const node_postgres = require('../db/postgres');



const getAllRestaurants = async (req, res) => {
	try {
		const result = await node_postgres.query("SELECT * FROM restaurants");
		
		//console.log(result);
		
		res.status(200).json({ 
			data: {
				count: result.rows.length,
				restaurants: result.rows 
			}
		});
	} catch (error) {
		console.log(error);
	}
};


const createRestaurant = (req, res) => {
	console.log('req.body = ', req.body);
	
	const restaurant = req.body;
	
	res.status(201).json({ msg: restaurant });
};


const getRestaurant = async (req, res) => {
	console.log('req.params = ', req.params);
	
	const restaurantId = req.params.id;
	console.log('restaurantId = ', restaurantId);
	
	try {
		// ATENTION: never use Template String
		// because of sql injections
		const result = await node_postgres.query("SELECT * FROM restaurants WHERE id = $1", [restaurantId]);
		
		res.status(200).json({ 
			data: {
				restaurant: result.rows[0]
			}
		});
	} catch (error) {
		console.log(error);
	}
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




