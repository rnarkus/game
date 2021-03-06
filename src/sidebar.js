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
import person from './images/dice2.gif';
import person2 from './images/dicefast.gif';
import person3 from './images/icefast.gif';
import discoIMG from './images/disco-ball.png';
import discoMUSIC from './music/disconoise.wav';
import musicMUSIC from './music/partyinUS.mp3';
import og from './images/person.gif';
import couchnew from './images/couchnew.png';


var audio = new Audio();
audio.src=discoMUSIC;

var audio1 = new Audio();
audio1.src=musicMUSIC;

var image=new Image();
image.src=person+"?x="+Math.random();

var imageog=new Image();
imageog.src=og+"?x="+Math.random();

var image2=new Image();
image2.src=person2+"?x="+Math.random();

var image3=new Image();
image3.src=person3+"?x="+Math.random();

var imageDisco = new Image();
imageDisco.src = discoIMG;

var couchend = new Image();
couchend.src = couchnew;

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
		var image=new Image();
		image.src=person+"?x="+Math.random();
		// document.getElementById("couchhere").innerHTML="<img class='couch' src=''/>";
		// document.getElementById("couchhere").innerHTML="<img class='couch' src='+imageog.src+'/>";
		top=top-5;
		var timeout = 10000;
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image.src+"/>";
		console.log(top);
	} else if(item=="ice"){
		var image3=new Image();
		image3.src=person3+"?x="+Math.random();
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+imageog.src+"/>";
		var timeout = 10000;
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image3.src+"/>";
		// document.getElementById("couchhere").innerHTML="<img class='couch' src="+image3.src+"/>";
		top=top-7;
		console.log(top);
	} else if(item=="disco"){
		// document.getElementById("couchhere").innerHTML="<img class='couch' src="+imageog.src+"/>"
		top=top-12;
		console.log(top);
	} else if (item=="music"){
		// document.getElementById("couchhere").innerHTML="<img class='couch' src="+imageog.src+"/>"
		top=top-10;
		console.log(top);
	} else if(item=="dice"){
		var image2=new Image();
		image2.src=person2+"?x="+Math.random();
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+imageog.src+"/>"
		top=top-7;
		document.getElementById("couchhere").innerHTML="<img class='couch' src="+image2.src+"/>";
		console.log(top);
	}

	checkWakeUp();
}

function checkWakeUp(){
	if(top<20){
		var delayMillis = 0;
		var hanger =document.getElementById('disco-opp');
		hanger.innerHTML = ('<div class"overall"><div class="hanger"></div><div class="discoball"><img src='+ imageDisco.src+ ' alt=""></img></div></div>')
		audio.play();
		audio1.pause();
		setTimeout(function() {
			hanger.innerHTML = '',
			audio.pause(),
			imageDisco.src = '';
		}, delayMillis);
		audio.src='';
		audio1.src='';
		console.log("He woke up!");
		document.getElementById("header").innerHTML="<h1 class='donetitle'>He Woke Up!</h1> <button type='submit' onClick='window.location.reload()'>Play Again</button>";
		document.getElementById("couchhere").innerHTML='<img class="couch" src='+couchend.src+'><img/>';
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
		audio1.currentTime = 0
	}

	clickedIce(){
		console.log("Ice Clicked");
		clickedItem("ice");
		audio1.pause();
		audio1.currentTime = 0
	}

	clickedDis(){
		if(top>20){
		console.log("Disco Clicked");
		clickedItem("disco");
		audio.currentTime = 0
		audio1.currentTime = 0
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

	}

	clickedMusic(){
		var hanger =document.getElementById('disco-opp');
		console.log("Music Clicked");
		clickedItem("music");
		audio1.play();
		audio1.currentTime = 0
	}

	clickedDice(){
		console.log("Dice Clicked");
		clickedItem("dice");
		audio1.pause();
		audio1.currentTime = 0
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
