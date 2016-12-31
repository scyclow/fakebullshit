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

const ads = [
  {
    href: 'http://fastcashmoneyplus.biz',
    content: 'BUY FASTCASH NOW',
    description: 'FastCashMoneyPlus.biz is the hottest fastcash accumulation platform on the web today.'
  }, {
    href: 'http://fastcashmoneyplus.biz',
    content: 'BUY FASTCASH NOW',
    description: `Be part of the new digital economy today! Don't get left behind!`
  }, {
    href: 'http://fastcashmoneyplus.biz',
    content: 'BUY FASTCASH NOW',
    description: `Don't miss out on the investment opportunity of a lifetime that professional investment experts don't want you to know about!`
  }, {
    href: 'http://fastcashmoneyplus.biz',
    content: 'BUY FASTCASH NOW',
    description: `Act NOW by joining scores of people jsut like yourself who have realized staggering amounts of wealth by using the FastCashMoneyPlus (TM)'s patented wealth-accumulation platform!`
  }
]

class FillerSection extends Component {
  render() {
    const { stories } = this.props;
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
        <Ad {...ad} />
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
