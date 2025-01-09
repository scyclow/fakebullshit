import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router/Redirect';
import { find, shuffle, get } from 'lodash';

import StoryPage from './StoryPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import TOSPage from './TOSPage';
import Ad from '../components/Ad';

import stories from '../content/stories';
import ads from '../content/ads';

const adComponents = shuffle(ads).map((ad, i) => <Ad {...ad} key={'ad'+i} />)

class Main extends Component {
  render() {
    const [lead, ...filler] = shuffle(stories);

    return (
      <div className="Main">
        <Route
          path="/articles/:articleAddress"
          render={(data) => {
            const address = data.match.params.articleAddress;
            const story = find(stories, { address });

            window.scrollTo(0,0);
            return <StoryPage story={story} ads={adComponents} />
          }}
        />
        <Route
          path="/about"
          component={AboutPage}
        />
        <Route
          path="/terms-of-service"
          component={TOSPage}
        />
        <Route exactly
          path="/"
          render={({ location }) => {
            if (get(location, 'query.redirect')) {
              const { pathname, hash } = location.query;
              return <Redirect to={pathname + '#' + hash} />
            }
            else {
              if (location.pathname !== '/') return <div/>
              window.scrollTo(0,0);
              return <HomePage lead={lead} filler={filler} ads={adComponents} />
            }
          }}
        />
      </div>
    );
  }
}

export default Main;
