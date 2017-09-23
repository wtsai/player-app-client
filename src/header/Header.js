import React, { Component } from 'react';
import ImageLink from '../share/ImageLink';
import homeImage from '../image/home.svg';
import './Header.css';

class Header extends Component {
  render() {
    const homePath = '/';
    return (
      <div className="main-Header">
        <ImageLink className="column-left" src={homeImage} alt="home" path={homePath}/>
        <h2>Video Player</h2>
      </div>
    );
  }
}

export default Header;
