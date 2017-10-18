import React, { Component } from 'react';
import Api from '../../lib/Api';
import Header from '../header/Header';
import MultiPlayerList from './MultiPlayerList';

const api = new Api();

function getVideo(id) {
  return api.getVideo(id).then(
    res => res
  );
}

class MultiPlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: {contents: []}};
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      getVideo(this.props.match.params.id).then(
        res => {
          this.setState({channel: res.channel});
        }
      );
    }
  }

  render() {
    return (
      <div>
        <Header title={this.state.channel.name}/>
        <MultiPlayerList channel={this.state.channel}/>
      </div>
    );
  }
}

export default MultiPlayerPage;
