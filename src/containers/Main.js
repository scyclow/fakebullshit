import React, { Component } from 'react';
import Match from 'react-router/Match';
import { find } from 'lodash';

import StoryPage from './StoryPage';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import FillerSection from '../components/FillerSection';
import api from '../utils/api';

const HomePage = ({ lead, filler }) => (
  <div className="HomePage">
    <Hero>
      { !!lead && <ArticleCard lead {...lead} /> }
    </Hero>
    { !!filler.length && <FillerSection stories={filler}/> }
  </div>
);

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
    const { stories } = this.state;

    const lead = stories[0];
    const filler = stories.slice(1);

    return (
      <div className="Main">
        <Match
          exactly
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
