import React from "react";

function WeatherData (props) {
	return (
		<div id="weather">
			<p> Temperature: {props.data.temp_c} *C </p>
			<p> Humidity: {props.data.relative_humidity} </p>
		</div>
	)
}

export default WeatherData