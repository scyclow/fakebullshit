import React, { Component } from 'react';
import Link from 'react-router/Link';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        FakeBullshit.news (TM) Copyright 2016
        <div><Link to="/about">ABOUT</Link></div>
        <div><Link to="/about">TERMS OF SERVICE</Link></div>
      </footer>
    );
  }
}

export default Footer;
