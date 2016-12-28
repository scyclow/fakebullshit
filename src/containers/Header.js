import React, { Component } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import Nav from '../components/Nav';

class Header extends Component {
  render() {
    return (
      <div>
        <HeaderTitle className="__ht" />
        <Nav className="__hn" />
      </div>
    );
  }
}

export default Header;
