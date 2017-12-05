import React, {Component} from 'react';

export default class Disco extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img src={require("./images/disco.png")} alt="disco ball" onDragEnd={this.props.action}/>
			</div>
			);
	}
}