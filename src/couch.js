import React, {Component} from 'react';
import Center from 'react-center';

export default class Couch extends Component {
	constructor(props){
		super();

	};

	render(){
		return(

			<div class="container">
                <Center>
                    <h1 class="title">Get Your Roommate Off the Couch!</h1>
                </Center>
                <Center>
				    <img class="couch" src={require("./images/couch.png")} alt="couch" onDragEnd={this.props.action}/>
                </Center>
			</div>

			);
	}
}
