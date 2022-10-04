import React from "react";
import SecondsCounter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<SecondsCounter unidad={props.unidad} decimal={props.decimal} centenas={props.centenas} miles={props.miles} loquesigue={props.loquesigue}/>
	);
};

export default Home;
