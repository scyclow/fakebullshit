import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import './Footer.css';

const gaShit = `<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-89889907-1','auto');ga('send','pageview');</scrip`;
class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        FakeBullshit.news (TM) Copyright 2016
        <div><Link to="/about">ABOUT</Link></div>
        <div><Link to="/terms-of-service">TERMS OF SERVICE</Link></div>
        {gaShit}
      </footer>
    );
  }
}

export default Footer;
