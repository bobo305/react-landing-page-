import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbo from "./Jumbo";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbo/>
			<div style={{display : "flex" , justifyContent : "space-around"}}>
				<Card/>	
				<Card/>
				<Card/>
				<Card/>

			</div>
			<Footer/>
		
		</div>
	);
};

export default Home;
