import React from 'react';
import ZipForm from './ZipForm.jsx';
import axios from 'axios';
import WeatherData from './WeatherData.jsx';

const APIKey = 'd061c4516e8c2edb';

class App extends React.Component {

 	constructor() {
 		super();
 		this.state = {
 			zipcode: 0,
 			weatherData: {}
 		}
 		this.updateZipcode = this.updateZipcode.bind(this);

 	}

 	updateZipcode(event) {
 		event.preventDefault()
 		const blah = document.getElementById('user-input')
 		this.setState({
 			zipcode: blah.value
 		})
 		console.log("http://api.wunderground.com/api/d061c4516e8c2edb/conditions/q/" + blah.value + ".json")
 		axios.get("http://api.wunderground.com/api/d061c4516e8c2edb/conditions/q/" + blah.value + ".json")
 		.then(response => response.data.current_observation)
 		.then(data => {
 			console.log(data)
 			this.setState({
 				weatherData: data
 			})
 		})
 		.catch(console.log)
 	}

 	render() {
	  return (
	    <div className="container">
	      <h1>What's the weather?</h1>
	      <ZipForm clickHandler={this.updateZipcode} />
	      { (this.state.zipcode === 0) ? null :
	      	<div>
			      <p>Your Zip code: {this.state.zipcode}</p>
			      <WeatherData data={this.state.weatherData} />
			    </div>
		    }
	    </div>
	  )
	}
}

export default App;
