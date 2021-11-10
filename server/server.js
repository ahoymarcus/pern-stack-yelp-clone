// https://www.youtube.com/watch?v=J01rYl9T3BU
// 2 hr  14' 19''
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const restaurantsRouter = require('./routes/restaurants');



const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => {
	console.log('\n### YEAH! Our own costumized middleware...........');
	
	next();
});



app.get('/', (req, res) => {
	res.send("<h1>Hello Yelp-clone</h1><a href=''>Yelp-Clone App</a>")
});


app.use('/api/v1/restaurants', restaurantsRouter);






const port = process.env.PORT || 3005;

const start =  () => {
	try {
		app.listen(port, () => {
			console.log(`Serving listening at port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};



start();




