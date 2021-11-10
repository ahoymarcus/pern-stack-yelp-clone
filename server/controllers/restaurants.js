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
		// ATENTION: never use Template String
		// because of sql injections
		// 'returning *' makes Postgres returns 
		// the data from the query made
		const result = await node_postgres.query(	
			"INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *", 
			[name, location, price_range]
		);
		
		//console.log(result);
		
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
 

const updateRestaurant = async (req, res) => {
	console.log('req.params = ', req.params);
	console.log('req.body = ', req.body);
	
	const { name, location, price_range} = req.body;
	
	try {
		// ATENTION: never use Template String
		// because of sql injections
			const result = await node_postgres.query(
			"UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *"
			, 
			[name, location, price_range, req.params.id]
		);
		
		//console.log(result);
		
		res.status(200).json({ 
			data: {
				restaurant: result.rows[0]
			}
		});
	} catch (error) {
		console.log(error);
	}
};


const deleteRestaurant = async (req, res) => {
	console.log('req.params = ', req.params);
	
	try {
		// ATENTION: never use Template String
		// because of sql injections
		const result = await node_postgres.query(
			"DELETE FROM restaurants WHERE id = $1",
			[req.params.id]
		);
		
		res.status(204).json({ 
			status: 'success'
		});
	} catch (error) {
		console.log(error);
	}
};





module.exports = {
	getAllRestaurants,
	createRestaurant,
	getRestaurant,
	updateRestaurant,
	deleteRestaurant
}




