import React, {Component} from 'react';

export default class Couch extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img class="couch" src={require("./images/couch.png")} alt="couch" onDragEnd={this.props.action}/>
			</div>
			);
	}
}
