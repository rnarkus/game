import React, {Component} from 'react';

export default class Solocup extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/solocup.png")} alt="solocup" onDragEnd={this.props.action}/>
			</div>
			);
	}
}