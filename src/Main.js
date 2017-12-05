import React, { Component } from "react";
import Couch from "./couch";
//import Stuff from "./Stuff";
//import Contact from "./Contact";
import Sidebar from "./sidebar";
import Center from 'react-center';


class Main extends Component {
  render() {
    return (
    	<div>
    		<p>HI</p>
    		<Sidebar />
            <Center>
                <div><Couch /></div>
            </Center>,

    	</div>


    );
  }
}

export default Main;
