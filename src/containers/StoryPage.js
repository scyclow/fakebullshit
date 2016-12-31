import React, { Component } from 'react';

class StoryPage extends Component {
  render() {
    const { story } = this.props;

    if (!story) return null;

    const { title, address, summary, content, img } = story;

    return (
      <div className="StoryPage">
        <div>{title}</div>
        <div>{address}</div>
        <div>{summary}</div>
        <div>{content}</div>
        <div>{img}</div>
      </div>
    );
  }
}

export default StoryPage;
