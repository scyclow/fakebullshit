import React, { Component } from 'react';
import { sample } from 'lodash';
import Article from '../components/Article';

class StoryPage extends Component {
  render() {
    const { story, ads } = this.props;

    if (!story) return null;

    const { title, address, summary, content, img } = story;

    return (
      <div className="StoryPage">
        <Article {...story} ads={ads} />
        { sample(ads)}
      </div>
    );
  }
}

export default StoryPage;
