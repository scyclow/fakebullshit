import React, { Component } from 'react';
import ArticleCard from '../components/ArticleCard';
import FillerSection from '../components/FillerSection';

class Articles extends Component {
  render() {
    console.log(this.props)

    const lead = this.props.stories[0];
    const filler = this.props.stories.slice(1);

    return (
      <div className="Articles">
        <ArticleCard lead {...lead} />
        <FillerSection stories={filler}/>
      </div>
    );
  }
}

export default Articles;
