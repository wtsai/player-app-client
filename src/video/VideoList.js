import React, { Component } from 'react';
import Api from './api';

const api = new Api();
// import getData from '';

class VideoList extends Component {
  constructor() {
    super();

  }

  componentWillMount() {
    api.getChannel().then(
      res => {
        console.log('getData');
        console.log(res);
        res.map(item => {
          console.log('map');
          console.log(item.cover.default);
        })
      }
    ).then(
      () => {
      }
    );
    this.setState({videos: 'http://i.ytimg.com/vi/UtKUJQraHeU/default.jpg'});
  }

  render() {
    return (
      <div>
        <p>hi</p>
        {
          <img src={this.state.videos}/>
        }
      </div>
    );
  }
}

export default VideoList;
