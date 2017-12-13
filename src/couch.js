import React, {Component} from 'react';
import Center from 'react-center';
import person from './images/person.png'

var image=new Image();
image.src=person;
export default class Couch extends Component {
	constructor(props){
		super();
		this.resetme=this.resetme.bind(this);

	};

	resetme(){
  	console.log("resetme");
  	}

	render(){
		return(

			<div class="container">
                <Center id="header">
                    <h1 className="title">Get Your Roommate Off the Couch!</h1>
                </Center>
                <Center id="couchhere">
				    <img id="imgCouch" className="couch" src={require("./images/person.gif")} alt="couch" onDragEnd={this.props.action}/>
                </Center>
			</div>

			);
	}
}
