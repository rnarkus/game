import React, {Component} from 'react';

export default class Music extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<img class="item-sidebar" src={require("./images/music.png")} alt="music" onDragEnd={this.props.action}/>
			<p class="item-word">Music</p>
			</div>
			);
	}
}
