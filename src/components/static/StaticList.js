import React, { Component } from 'react';
import windowSize from 'react-window-size';
import Api from '../../lib/Api';
import config from '../../config/config';
import ImageIcon from '../share/ImageIcon';
import './StaticList.css';

const api = new Api();

class StaticList extends Component {
  constructor(props) {
    super(props);
    this.state = 	{	channels: [],
										videolist: false,
										leftpadding: 0
									};
  }

  componentDidUpdate() {
		if(this.state.videolist === false){
			const { windowWidth, windowHeight } = this.props;
			const skipNum = 0;
			console.log('[componentDidUpdate]width: ' + windowWidth + '. height: ' + windowHeight);
			if( windowWidth > 0 && windowHeight > 0 ){
				var width_count = parseInt(windowWidth/parseInt(config.icon.width, 10), 10);
				var height_count = parseInt((windowHeight-config.mainHeader.height)/parseInt(config.icon.height, 10), 10);
				var total = width_count*height_count;
				var Left_padding = (windowWidth-(width_count * parseInt(config.icon.width, 10)))/2;
				console.log('Left_padding: ' + Left_padding);
		    api.getChannelByLimit(skipNum,total).then(
		      res => {
		        this.setState({channels: res});
						this.setState({videolist: true});
						this.setState({leftpadding: Left_padding});
		      }
		    );
			}
		}
  }

  render() {
    const path = (id) => `/video/${id}`;

    return (
      <div id='iconlist' style={{ 'paddingLeft': this.state.leftpadding }}>
        {
          this.state.channels.map((channel) => (
            <ImageIcon
              key={channel._id}
              src={channel.cover.default}
              title={channel.name}
              path={path(channel._id)}
							className='ImageIcon'
            />
          ))
        }
      </div>
    );
  }
}

export default windowSize(StaticList);
