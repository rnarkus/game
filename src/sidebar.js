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
import person from './images/beer.gif';
import person2 from './images/dice.gif';
import person3 from './images/ice.gif';
import discoIMG from './images/disco-ball.png';
import discoMUSIC from './music/disconoise.wav';
import musicMUSIC from './music/partyinUS.mp3';

var audio = new Audio();
audio.src=discoMUSIC;

var audio1 = new Audio();
audio1.src=musicMUSIC;

var image=new Image();
image.src=person;

var image2=new Image();
image2.src=person2;

var image3=new Image();
image3.src=person3;

var imageDisco = new Image();
imageDisco.src = discoIMG;

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
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image.src+"/>";
		console.log(top);
	} else if(item=="ice"){
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image3.src+"/>";
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
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image2.src+"/>";
		console.log(top);
	}
	checkWakeUp();
}

function checkWakeUp(){
	if(top<20){
		console.log("He woke up!");
		document.getElementById("header").innerHTML="<h1 class='donetitle'>He Woke Up!</h1> <button type='submit' onClick='window.location.reload()'>Play Again</button>";
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
		audio1.pause();
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
		audio1.pause();
	}

	clickedIce(){
		console.log("Ice Clicked");
		clickedItem("ice");
		audio1.pause();
	}

	clickedDis(){
		console.log("Disco Clicked");
		clickedItem("disco");
		audio.play();
		audio1.pause();
		var hanger =document.getElementById('disco-opp');
		hanger.innerHTML = ('<div class"overall"><div class="hanger"></div><div class="discoball"><img src='+ imageDisco.src+ ' alt=""></img></div></div>')
		var delayMillis = 5000;

		setTimeout(function() {
			hanger.innerHTML = '',
			audio.pause()
		}, delayMillis);

	}

	clickedMusic(){
		var hanger =document.getElementById('disco-opp');
		console.log("Music Clicked");
		clickedItem("music");
		audio1.play();
	}

	clickedDice(){
		console.log("Dice Clicked");
		clickedItem("dice");
		audio1.pause();
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
