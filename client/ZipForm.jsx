import React from 'react';

function ZipForm(props) {
	return (
		<div id="zip-form">
		  <input id="user-input" placeholder='Enter your Zip Code' />
		  <button onClick={props.clickHandler}>Go</button>
		</div>
	);
} 

export default ZipForm;