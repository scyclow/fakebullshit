import React, { Component } from 'react';
import { times } from 'lodash';
import ArticleCard from './ArticleCard';
import Ad from './Ad';
import './FillerSection.css';

function createStoryColumns (stories) {
  return [[stories[0], stories[1]], stories.slice(2)]
}

const StoryColumn = ({ children }) => (
  <div className="StoryColumn">
    {children}
  </div>
);

const FillerSlot = ({ children }) => (
  <div className="FillerSlot">
    {children}
  </div>
);

class FillerSection extends Component {
  render() {
    const { stories, ads } = this.props;
    stories.forEach((story, i) => story.ix = i);

    const columns = createStoryColumns(stories);

    const secondaryStories = columns[0].map((story) =>
      <FillerSlot key={story.ix}>
        <ArticleCard secondary {...story} />
      </FillerSlot>
    );

    const fillerStories = columns[1].map((story) =>
      <FillerSlot key={story.ix}>
        <ArticleCard filler {...story} />
      </FillerSlot>
    );

    const adComponents = ads.map((ad, i) => (
      <FillerSlot key={i}>
        { ad }
      </FillerSlot>
    ));

    return (
      <section className="FillerSection">
        <StoryColumn secondary>
          {secondaryStories}
          {adComponents}
        </StoryColumn>

        <StoryColumn stories={columns[1]}>
          {fillerStories}
        </StoryColumn>
      </section>
    );
  }
}

export default FillerSection;
