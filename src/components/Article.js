import React, { Component } from 'react';
import { sample, random } from 'lodash';
import './Article.css';
import CommentSection from './CommentSection';

class Article extends Component {
  render() {
    const { content, title, address, summary, img, comments, ads } = this.props;
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
        <div className="preheader">
          <p>
            <strong>HOME > NEWS ></strong> {address} -- PAGE VIEWS: <strong>{random(5000)}</strong> -- <a href="#comments">SKIP TO COMMENTS: {comments.length}</a>
          </p>
        </div>

        <h1>{title}</h1>
        <div className="byline">By Patrick Swanson</div>
        { img && <div className="img-container"><img src={img} alt="bleh" /></div> }
        <article>
          {articleText}
          <p key="summary">{address}<br/>{summary}<br/></p>
        </article>
        <a name="comments" />
        <CommentSection comments={comments} />
      </div>
    );
  }
}

export default Article;
