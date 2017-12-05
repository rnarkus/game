import React, {Component} from 'react';

export default class Ice extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/ice.png")} alt="ice" onDragEnd={this.props.action}/>
			</div>
			);
	}
}