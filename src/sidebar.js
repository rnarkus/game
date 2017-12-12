import React, {Component} from 'react';
import Beer from "./beer";
import Ice from "./ice";
import Disco from "./disco";
import Music from "./music";
import Solocup from "./solocup";
import Dice from "./dice";
import Person from "./person";
import Pillow from "./pillow";
import {Flex, Box} from 'reflexbox';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function partyTime(){

}

function beerFun(props){
	let top;
	top = Math.floor(Math.random()*80+10);
	console.log(top);
	return top;
}

export default class Sidebar extends Component {
	constructor(props){
		super(props);

		this.state = this.clickedBeer.bind(this);
		this.clicked = this.clicked.bind(this);
	};

	clickedBeer(){
	  	let top;
		top = Math.floor(Math.random()*80+10);
		return top;
  }

	componentWillMount(){
    	window.addEventListener('clicked', this.clicked);
  }
  componentWillUnmount(){
    	window.removeEventListener('clicked', this.clicked);
  }

	clicked(){
		console.log("Beer clicked");
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
			<div class="persondiv"><Person beerInfo={beerFun()} /></div>
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
		</div>

			);
	}

}
