// https://www.youtube.com/watch?v=J01rYl9T3BU
// 1 hr  21' 07''
require('dotenv').config();
const express = require('express');

const restaurantsRouter = require('./routes/restaurants');



const app = express();

app.use(express.json());


app.get('/', (req, res) => {
	res.send("<h1>Hello Yelp-clone</h1><a href=''>Yelp-Clone App</a>")
});


app.use('/api/v1/restaurants', restaurantsRouter);






const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Serving listening at port ${port}`);
});




