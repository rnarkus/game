import React, {Component} from 'react';

export default class Dice extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img class="item-sidebar" src={require("./images/dice.png")} alt="dice" onDragEnd={this.props.action}/>
			<p class="item-word">Dice</p>
			</div>
			);
	}
}
