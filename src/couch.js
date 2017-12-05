import React, {Component} from 'react';

export default class Couch extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/couch.png")} alt="pillow" onDragEnd={this.props.action}/>
			</div>
			);
	}
}
