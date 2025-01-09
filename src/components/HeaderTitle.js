import React, { Component } from 'react';
import Link from 'react-router-dom/Link';


import './HeaderTitle.css';

class HeaderTitle extends Component {
  render() {
    return (
      <Link to="/"className="HeaderTitle">
        <span className=" HeaderTitle-content">
          Fake Bullshit News
        </span>
      </Link>
    );
  }
}

export default HeaderTitle;
