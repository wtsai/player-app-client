import React, { Component } from 'react';
import Api from '../../lib/Api';
import Header from '../header/Header';
import MultiPlayerList from './MultiPlayerList';

const api = new Api();

function getChannel(id) {
  return api.getLocalVideo(id).then(
    res => res
  );
}

class MultiPlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videolist: {}
    };
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      getChannel(this.props.match.params.id).then(
        res => {
          this.setState({videolist: res.channel});
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.videolist.name}/>
        <MultiPlayerList videolist={this.state.videolist}/>
      </div>
    );
  }
}

export default MultiPlayerPage;
