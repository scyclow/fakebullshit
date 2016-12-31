import React, { Component } from 'react';
import { sample, random } from 'lodash';
import Ad from './Ad';
import './Article.css';

class Article extends Component {
  render() {
    const { content, title, address, summary, img, ads } = this.props;
    const articleText = content.split('\n').map((txt, i) => (
      <p key={i}>{txt}</p>
    ));

    const sharePlatform = sample(['facebook.com', 'twitter.com', 'plus.google.com', 'reddit.com']);
    articleText.splice(1, 0,
      <a className="article-share" key='advert' target="_blank" href={`https://${sharePlatform}`}>
        ** SHARE THIS STORY ON {sharePlatform} **
      </a>
    );

    articleText.splice(5, 0, sample(ads));

    const articleStyle = {
      fontSize: random(50, 100)
    };

    return (
      <div className="Article" style={articleStyle}>
        <h1>{title}</h1>
        { img && <div className="img-container"><img src={img} /></div> }
        <div className="byline">By Patrick Swanson</div>
        <article>
          {articleText}
          <p>{address}<br/>{summary}<br/>{img}</p>
        </article>
      </div>
    );
  }
}

export default Article;
