import React, { Component } from 'react';
import Match from 'react-router/Match';
import { find, shuffle } from 'lodash';

import StoryPage from './StoryPage';
import HomePage from './HomePage';
import stories from '../content/stories/story1.json';

import api from '../utils/api';

class Main extends Component {
  render() {
    console.log('stories',stories)
    const [lead, ...filler] = shuffle(stories);

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
            const story = find(stories, { address });

            return <StoryPage story={story} />
          }}
        />
      </div>
    );
  }
}

export default Main;
