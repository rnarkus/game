import React, { Component } from "react";
import Couch from "./couch";
//import Stuff from "./Stuff";
//import Contact from "./Contact";
import Sidebar from "./sidebar";


class Main extends Component {
  render() {
    return (
    	<div>
    		<p>HI</p>
    		<Sidebar />
                <div><Couch /></div>
    	</div>


    );
  }
}

export default Main;
