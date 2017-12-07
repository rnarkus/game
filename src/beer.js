import React, {Component} from 'react';

export default class Beer extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img class="item-sidebar" src={require("./images/beer.png")} alt="beer" onDragEnd={this.props.action}/>
			<p class="item-word">Beer</p>
			</div>
			);
	}
}
