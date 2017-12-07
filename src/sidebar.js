import React, {Component} from 'react';
import Beer from "./beer";
import Ice from "./ice";
import Disco from "./disco";
import Music from "./music";
import Solocup from "./solocup";
import Dice from "./dice";
import Pillow from "./pillow";
import {Flex, Box} from 'reflexbox';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;



export default class Sidebar extends Component {
	constructor(props){
		super();

	};


	render(){

		return(
			<div>
				<Mobile>
				<div class="sidebar-main-mobile">
					<ul class="ul-mobile">
						<li class="li-mobile"><Beer/></li>
						<li class="li-mobile"><Ice/></li>
						<li class="li-mobile"><Disco/></li>
						<li class="li-mobile"><Music/></li>
						<li class="li-mobile"><Dice/></li>
					</ul>
				</div>
			</Mobile>
			<Default>
			<div class="sidebar-main">
				<ul>
					<li><Beer/></li>
					<li><Ice/></li>
					<li><Disco/></li>
					<li><Music/></li>
					<li><Dice/></li>
				</ul>
			</div>
		</Default>
		</div>
			);
	}

}
