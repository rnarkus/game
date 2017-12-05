import React, {Component} from 'react';

export default class Pillow extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/pillow.png")} alt="pillow" onDragEnd={this.props.action}/>
			</div>
			);
	}
}