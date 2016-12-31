import React from 'react';

import ArticleCard from '../components/ArticleCard';
import FillerSection from '../components/FillerSection';
import Hero from '../components/Hero';

const HomePage = ({ lead, filler }) => (
  <div className="HomePage">
    <Hero>
      { !!lead && <ArticleCard lead {...lead} /> }
    </Hero>
    { !!filler.length && <FillerSection stories={filler}/> }
  </div>
);

export default HomePage;
