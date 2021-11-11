// https://www.youtube.com/watch?v=J01rYl9T3BU
// 3 hr  02' 00''
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';



const App = () => {
	
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" component={Home} />
					<Route exact path="/restaurants/:id/update" component={UpdatePage} />
					<Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
				
				</Routes>
			</Router>
			
			<span>App</span>
		</div>
	);
};



export default App;



