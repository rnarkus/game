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

function partyTime(){

}

function beerFun(){

}

export default class Sidebar extends Component {
	constructor(props){
		super();

	};

	clicked(){
		console.log("Beer clicked");
		beerFun();
	}

	clickedIce(){
		console.log("Ice Clicked")
	}

	clickedDis(){
		console.log("Disco Clicked");
	}

	clickedMusic(){
		console.log("Music Clicked");
	}

	clickedDice(){
		console.log("Dice Clicked")
	}


	render(){

		return(
			<div>
				<Mobile>
				<div class="sidebar-main-mobile">
					<ul class="ul-mobile">
						<li class="li-mobile"><div onClick={this.clicked.bind(this)}><Beer/></div></li>
						<li class="li-mobile"><div onClick={this.clickedIce.bind(this)}><Ice/></div></li>
						<li class="li-mobile"><div onClick={this.clickedDis.bind(this)}><Disco/></div></li>
						<li class="li-mobile"><div onClick={this.clickedMusic.bind(this)}><Music/></div></li>
						<li class="li-mobile"><div onClick={this.clickedDice.bind(this)}><Dice/></div></li>
					</ul>
				</div>
			</Mobile>
			<Default>
			<div class="sidebar-main">
				<ul>
					<li><div onClick={this.clicked.bind(this)}><Beer/></div></li>
					<li><div onClick={this.clickedIce.bind(this)}><Ice/></div></li>
					<li><div onClick={this.clickedDis.bind(this)}><Disco/></div></li>
					<li><div onClick={this.clickedMusic.bind(this)}><Music/></div></li>
					<li><div onClick={this.clickedDice.bind(this)}><Dice/></div></li>
				</ul>
			</div>
		</Default>
		</div>
			);
	}

}
