import React, {Component} from 'react';

export default class Dice extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/dice.png")} alt="dice" onDragEnd={this.props.action}/>
			</div>
			);
	}
}