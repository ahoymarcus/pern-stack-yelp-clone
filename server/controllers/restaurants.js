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

  
const createRestaurant = async (req, res) => {
	console.log('req.body = ', req.body);
	
	const { name, location, price_range} = req.body;
	
	try {
		// 'returning *' makes Postgres returns 
		// the data from the query made
		const result = await node_postgres.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *", [name, location, price_range]);
		
		console.log(result);
		
		res.status(200).json({ 
			data: {
				restaurant: result.rows[0]
			}
		});
	} catch (error) {
		console.log(error);
	}
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
	
	const { name, location, price_range} = req.body;
	console.log(name, location, range);
	
	try {
		 
		res.status(200).json({ msg: restaurant });
	} catch (error) {
		console.log(error);
	}
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




