import React, { Component } from 'react';
import Match from 'react-router/Match';
import Redirect from 'react-router/Redirect';
import { find, shuffle, get } from 'lodash';

import StoryPage from './StoryPage';
import HomePage from './HomePage';
import Ad from '../components/Ad';

import stories from '../content/stories';
import ads from '../content/ads';

const adComponents = shuffle(ads).map((ad, i) => <Ad {...ad} key={'ad'+i} />)

class Main extends Component {
  render() {
    const [lead, ...filler] = shuffle(stories);

    return (
      <div className="Main">
        <Match exactly
          pattern="/"
          render={({ location }) => {
            if (get(location, 'query.redirect')) {
              return <Redirect to={location.query.pathname} />
            }
            else {
              window.scrollTo(0,0);
              return <HomePage lead={lead} filler={filler} ads={adComponents} />
            }
          }}
        />
        <Match
          pattern="/articles/:articleAddress"
          render={(data) => {
            const address = data.params.articleAddress;
            const story = find(stories, { address });

            window.scrollTo(0,0);
            return <StoryPage story={story} ads={adComponents} />
          }}
        />
      </div>
    );
  }
}

export default Main;
