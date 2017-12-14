import React, {Component} from 'react';
import Center from 'react-center';
import person from './images/person.png';
import { Flex, Box } from 'reflexbox';

var image=new Image();
image.src=person;
export default class Couch extends Component {
	constructor(props){
		super();

	};

	render(){
		return(

			<div class="container">
                <Flex  justify='center' w={1} id="header">
                    <h1 className="title">Get Your Roommate Off the Couch!</h1>
                </Flex>
                <Center id="couchhere">
				    <img id="imgCouch" className="couch" src={require("./images/person.gif")} alt="couch" onDragEnd={this.props.action}/>
                </Center>
           
			</div>

			);
	}
}
