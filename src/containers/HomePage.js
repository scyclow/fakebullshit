import React from 'react';

import ArticleCard from '../components/ArticleCard';
import FillerSection from '../components/FillerSection';
import Hero from '../components/Hero';


const HomePage = ({ lead, filler, ads }) => {
  const [topAd, ...restAds] = ads;

  return (
    <div className="HomePage">
      <Hero>
        { !!lead && <ArticleCard lead {...lead} /> }
        { topAd }
      </Hero>
      { !!filler.length && <FillerSection stories={filler} ads={restAds}/> }
    </div>
  );
}

export default HomePage;
