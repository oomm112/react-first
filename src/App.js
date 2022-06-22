import React from "react";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Game from './Game';
import Study from './Study';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import ReactMeal from './ReactMeal';
import Header from './include/Header';

function App(){
		return(
			<div>
				<h1> title </h1>
					<Router>
						<Header />
						<Routes>
							<Route path="/game" element={<Game/>}/>
							<Route path="/study" element={<Study/>}/>	//main page
							<Route path="/part1" element={<Part1/>}/>
							<Route path="/part2" element={<Part2/>}/>
							<Route path="/part3" element={<Part3/>}/>
							<Route path="/part4" element={<Part4/>}/>
							<Route path="/reactMeal" element={<ReactMeal/>}/>
						</Routes>
					</Router>
			</div>
		);
}

export default App;
