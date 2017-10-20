import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './share.css'

class Selector extends Component {
  render() {
    return (
      <Select
        className="main-Selector"
        value={this.props.value}
        options={this.props.options}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Selector;
