import React, { Component } from 'react';
import Articles from './Articles';
import api from '../utils/api';

class Main extends Component {
  state = {
    stories: []
  }

  componentDidMount() {
    api.get('stories/story1.json')
      .then(stories => this.setState({ stories }))
      .catch(err => console.error(err))
  }

  render() {
    const stories = this.state.stories.length ? this.state.stories : [{}];

    return (
      <div className="Main">
        <Articles stories={stories}/>
      </div>
    );
  }
}

export default Main;
