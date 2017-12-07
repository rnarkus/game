import React, {Component} from 'react';
import $ from 'jquery';

var APP = {};

var Holder = React.createClass({
  getInitialState: function (){
    return {count: 0};
  },
  componentDidMount: function(){
    $(APP).on('up', function(e){
      var count = this.state.count + 1;
      this.setState({count: count});
    }.bind(this));

    $(APP).on('down', function(e){
      var count = (this.state.count - 1);
      this.setState({count: count});
    }.bind(this));
  },
  componentWillUnmount: function () {
    $(APP).off('up');
    $(APP).off('down');
  },
  render: function() {
    var count = this.state.count;
    return <span>{count}</span>;
  }
});

var Counter = React.createClass({
  decrement: function() {
    $(APP).trigger('down');
  },
  increment: function() {
    $(APP).trigger('up');
  },
  render: function(){
    return (<div>
      <button onClick={this.increment} >Increment</button>
      <button onClick={this.decrement} >Decrement</button>
    </div>)
  }
});
