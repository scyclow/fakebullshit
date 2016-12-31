import React, { Component } from 'react';
import { random } from 'lodash';

import './Ad.css';

class Ad extends Component {
  state = {
    outlined: false
  }

  componentDidMount() {
    const blinkOutline = () => this.setState({ outlined: !this.state.outlined });

    const startBlinkingOutline = () => setInterval(blinkOutline, random(100, 1250));
    setTimeout(startBlinkingOutline, random(500))
  }

  render() {
    const { href, content, description } = this.props;
    const { outlined } = this.state;

    return (
      <a href={href} className={`Ad ${outlined ? 'outlined' : ''}`}>
        {/*content*/}
        {description}
      </a>
    );
  }
}


export default Ad;
