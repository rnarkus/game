import React, {Component} from 'react';

export default class Person extends Component {
	constructor(props){
		super(props);
		this.state={
			top: this.props.beerInfo
		}
		console.log(this.state.top);
	};


	changes(e){
		this.props.beerInfo(e.target.value);
	}


	render(){
		const style={
			top: this.state.top+ "%"
		}
		return(
			
			<div>
				<img class="person" style={style} src={require("./images/person.png")} alt="person"/>
			</div>
			);
	}
}
