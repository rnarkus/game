import React, { Component } from "react";
import Couch from "./couch";
//import Stuff from "./Stuff";
//import Contact from "./Contact";
import Sidebar from "./sidebar";
import {Flex, Box} from 'reflexbox';


class Main extends Component {
  render() {
    return (
        <Flex justify='space-between' align='center' style={{ 'margin-top': '10%' }}>
            <Box auto><Couch /></Box>
            <Box auto><Sidebar /></Box>

        </Flex>


    );
  }
}

export default Main;
