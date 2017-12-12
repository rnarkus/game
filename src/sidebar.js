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
import person from './images/person2.png'

var image=new Image();
image.src=person;

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

let top;
top = Math.floor(Math.random()*80+10);

function partyTime(){

}

function beerFun(props){
	console.log(top);
	return top;
}

function clickedItem(item){
	if(item=="beer"){
		top=top-5;
		document.getElementById("couchhere").innerHTML="<img src="+image.src+"/>";
		console.log(top);
	} else if(item=="ice"){
		top=top-7;
		console.log(top);
	} else if(item=="disco"){
		top=top-12;
		console.log(top);
	} else if (item=="music"){
		top=top-10;
		console.log(top);
	} else if(item=="dice"){
		top=top-7;
		console.log(top);
	}
	checkWakeUp();
}

function checkWakeUp(){
	if(top<20){
		console.log("He woke up!");
	}
}


export default class Sidebar extends Component {
	constructor(props){
		super(props);

		this.state = this.clickedBeer.bind(this);
		this.clicked = this.clicked.bind(this);
	};

	clickedBeer(){
	  	// let top;
		// top = Math.floor(Math.random()*80+10);
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
		clickedItem("beer");
	}

	clickedIce(){
		console.log("Ice Clicked");
		clickedItem("ice");
	}

	clickedDis(){
		console.log("Disco Clicked");
		clickedItem("disco");
		var hanger =document.getElementById('disco-opp');
		hanger.innerHTML = ('<div class"overall"><div class="hanger"></div><div class="discoball"><img src="https://drive.google.com/uc?id=0B7QrEBMF4GTGQ3lfRzV0cU5rNHM" alt=""></img></div></div>')

		var delayMillis = 5000;

		setTimeout(function() {
			hanger.innerHTML = ''
		}, delayMillis);

	}

	clickedMusic(){
		console.log("Music Clicked");
		clickedItem("music");
	}

	clickedDice(){
		console.log("Dice Clicked");
		clickedItem("dice");
	}


	render(){

		return(
			<div>
			
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
