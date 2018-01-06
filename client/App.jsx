import React from 'react';
import ZipForm from './ZipForm.jsx';

 class App extends React.Component {

 	constructor() {
 		super();
 		this.state = {
 			zipcode: 0
 		}
 		this.updateZipcode = this.updateZipcode.bind(this);

 	}

 	updateZipcode(event) {
 		event.preventDefault()
 		const blah = document.getElementById('user-input')
 		this.setState({
 			zipcode: blah.value
 		})
 		console.log(this.state.zipcode)
 	}

 	render() {
	  return (
	    <div className="container">
	      <h1>What's the weather?</h1>
	      <ZipForm clickHandler={this.updateZipcode} />
	      <p>Your Zip code: {this.state.zipcode}</p>
	    </div>
	  )
	}
}

export default App;
