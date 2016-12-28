import React, { Component } from 'react';
import './Nav.css';

const NavItem = ({ text }) => (
  <li className="NavItem">
    <a href="#">{text}</a>
  </li>
);

const navItems = [
  {
    title: 'News'
  },
  {
    title: 'Politics'
  },
  {
    title: 'Weather'
  },
  {
    title: 'Sports'
  }
];

class Nav extends Component {
  render() {
    return (
      <ul className="Nav">
        {navItems.map((item, i) => <NavItem text={item.title} key={i} />)}
      </ul>
    );
  }
}

export default Nav;
