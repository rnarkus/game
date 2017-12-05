import React, {Component} from 'react';
import Beer from "./beer";
import Ice from "./ice";
import Disco from "./disco";
import Music from "./music";
import Solocup from "./solocup";
import Dice from "./dice";
import Pillow from "./pillow";

export default class Sidebar extends Component {
	constructor(props){
		super();

	};


	render(){
		return(
			<div>
				<ul>
					<li><Beer/></li>
					<li><Ice/></li>
					<li><Disco/></li>
					<li><Music/></li>
					<li><Dice/></li>
					<li><Solocup/></li>
					<li><Pillow/></li>
				</ul>
			</div>
			);
	}
}
