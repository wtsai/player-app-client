import React, { Component } from 'react';
import Plyr from './plyr';
import { Grid } from 'semantic-ui-react'

class MultiPlayerList extends Component {
  render() {
		var row1 = [];
		var row2 = [];
		var row3 = [];
		this.props.channel.contents.forEach(function(channel, index, array) {
			if( index <= 3){
				row1.push(
					<Grid.Column>
						<Plyr
						 key={channel._id}
						 type={channel.type}
						 videoId={channel.youtube_id}
						/>
					</Grid.Column>
				)
			}
			if( index > 3 && index <= 7){
				row2.push(
					<Grid.Column>
						<Plyr
						 key={channel._id}
						 type={channel.type}
						 videoId={channel.youtube_id}
						/>
					</Grid.Column>
				)
			}
			if( index > 7 && index <= 11){
				row3.push(
					<Grid.Column>
						<Plyr
						 key={channel._id}
						 type={channel.type}
						 videoId={channel.youtube_id}
						/>
					</Grid.Column>
				)
			}
		});

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
