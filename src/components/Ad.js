import React, { Component } from 'react';
import { random } from 'lodash';

import './Ad.css';

class Ad extends Component {
  state = {
    outlined: false
  }

  componentDidMount() {
    const blinkOutline = () => this.setState({ outlined: !this.state.outlined });

    const startBlinkingOutline = () => {
      this.blinker = setInterval(blinkOutline, random(100, 1250))
    };
    setTimeout(startBlinkingOutline, random(500))
  }

  componentWillUnmount() {
    clearInterval(this.blinker);
  }

  render() {
    const { href, description } = this.props;
    const { outlined } = this.state;

    return (
      <a href={href} target="_blank" className="Ad">
        <div className={`AdContent ${outlined ? 'outlined' : ''}`}>
          {description}
        </div>
      </a>
    );
  }
}


export default Ad;
