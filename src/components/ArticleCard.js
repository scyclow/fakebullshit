import React, { Component } from 'react';
import './ArticleCard.css';

class ArticleCard extends Component {
  render() {
    const { title, content, img, lead, filler } = this.props

    const storyType =
      lead ? 'lead' :
      filler ? 'filler' :
      '';

    return (
      <a
        href="/"
        className={`ArticleCard ArticleCard-${storyType}`}
      >
        { title   && <h2 className="ArticleCard-title">{title}</h2> }
        { content && <div className="ArticleCard-content">{content}</div> }
        { img     && <div className="ArticleCard-img">{img}</div> }
      </a>
    );
  }
}

export default ArticleCard;
