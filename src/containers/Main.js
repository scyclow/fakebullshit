import React, { Component } from 'react';
import Match from 'react-router/Match';
import { find, shuffle } from 'lodash';

import StoryPage from './StoryPage';
import HomePage from './HomePage';

import api from '../utils/api';

class Main extends Component {
  state = {
    stories: []
  }

  componentDidMount() {
    api.get('stories/story1.json')
      .then(stories => this.setState({ stories }))
      .catch(...err => console.error('Something bad happened:', err))
  }

  render() {
    const stories = shuffle(this.state.stories);

    const lead = stories[0];
    const filler = stories.slice(1);

    return (
      <div className="Main">
        <Match exactly
          pattern="/"
          component={
            () => <HomePage lead={lead} filler={filler}/>
          }
        />
        <Match
          pattern="/articles/:articleAddress"
          render={(data) => {
            const address = data.params.articleAddress;
            const story = find(this.state.stories, { address });

            return <StoryPage story={story} />
          }}
        />
      </div>
    );
  }
}

export default Main;
