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
				<img class="couch" src={require("./images/couch.png")} alt="couch" onDragEnd={this.props.action}/>
        </Center>
			</div>

			);
	}
}
