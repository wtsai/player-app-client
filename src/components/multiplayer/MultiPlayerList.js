import React, { Component } from 'react';
import PlyrPlayer from './plyr';
import { Grid } from 'semantic-ui-react'

class MultiPlayerList extends Component {
  render() {
    let row1 = [];
    let row2 = [];
    let row3 = [];
    if(this.props.videolist.contents){
      this.props.videolist.contents.forEach(function(channel, index, array) {
        if( index <= 3){
          row1.push(
            <Grid.Column key={channel.youtube_id}>
              <PlyrPlayer
                type={channel.type}
                videoId={channel.youtube_id}
                />
            </Grid.Column>
          )
        }
        if( index > 3 && index <= 7){
          row2.push(
            <Grid.Column key={channel.youtube_id}>
              <PlyrPlayer
                type={channel.type}
                videoId={channel.youtube_id}
                />
            </Grid.Column>
          )
        }
        if( index > 7 && index <= 11){
          row3.push(
            <Grid.Column key={channel.youtube_id}>
              <PlyrPlayer
                type={channel.type}
                videoId={channel.youtube_id}
                />
            </Grid.Column>
          )
        }
      });
    }


    return (
      <Grid columns='equal' reversed='tablet' >
        <Grid.Row>
          {row1}
        </Grid.Row>
        <Grid.Row>
          {row2}
        </Grid.Row>
        <Grid.Row>
          {row3}
        </Grid.Row>
      </Grid>
    );
  }
}

export default MultiPlayerList;
