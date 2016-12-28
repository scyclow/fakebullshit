import React, { Component } from 'react';
import './HeaderTitle.css';

class HeaderTitle extends Component {
  render() {
    return (
      <a href="/" className="HeaderTitle">
        <span className=" HeaderTitle-content">Fake Bullshit News</span>
      </a>
    );
  }
}

export default HeaderTitle;
