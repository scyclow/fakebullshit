import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import './FillerSection.css';

class FillerSection extends Component {
  render() {
    const { stories } = this.props

    return (
      <section className="FillerSection">
        {stories.map((story, i) =>
          <div className="FillerSlot" key={i}>
            <ArticleCard filler {...story} />
          </div>
        )}
      </section>
    );
  }
}

export default FillerSection;
