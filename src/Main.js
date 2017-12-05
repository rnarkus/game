import React, { Component } from "react";
import Couch from "./couch";
//import Stuff from "./Stuff";
//import Contact from "./Contact";
import Sidebar from "./sidebar";
import {Flex, Box} from 'reflexbox';
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class Main extends Component {
  render() {
    return (
        <div>
        <Mobile>
          <Flex column justify='space-between' align='center' style={{ 'margin': '10%' }}>
              <Box auto><Couch /></Box>
              <Box auto><Sidebar /></Box>
          </Flex>
      </Mobile>
        <Default>
          <Flex justify='space-between' align='center' style={{ 'margin': '10%' }}>
              <Box auto><Couch /></Box>
              <Box auto><Sidebar /></Box>
          </Flex>
      </Default>
  </div>



    );
  }
}

export default Main;
