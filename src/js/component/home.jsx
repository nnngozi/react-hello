import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./tools/Navbar.jsx";
import Jumbotron from "./tools/Jumbotron.jsx";
import Cards from "./tools/Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
};

export default Home;
