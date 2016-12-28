import React, { Component } from 'react';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import FillerSection from '../components/FillerSection';
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
    const { stories } = this.state;

    const lead = stories[0];
    const filler = stories.slice(1);

    return (
      <div className="Main">
        <Hero>
          { lead && <ArticleCard lead {...lead} /> }
        </Hero>
        { filler.length && <FillerSection stories={filler}/> }
      </div>
    );
  }
}

export default Main;
