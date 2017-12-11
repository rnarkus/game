import React, {Component} from 'react';

export default class Person extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img class="person" src={require("./images/person.png")} alt="person"/>
			</div>
			);
	}
}
