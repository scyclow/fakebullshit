import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { random } from 'lodash';

import './ArticleCard.css';

class ArticleCard extends Component {
  render() {
    const { title, summary, img, address, ix, lead, secondary, filler } = this.props

    const storyType =
      lead ? 'lead' :
      secondary ? 'secondary' :
      filler ? 'filler' :
      '';

    const leadStyle = lead ? {
      fontSize: window.innerWidth >= 689 ? random(60, 140) : 80
    } : {};

    return (
      <Link
        to={`/articles/${address}`}
        className={`ArticleCard ArticleCard-${storyType}`}
      >
        <div className="ArticleCard-container">
          { ix > -1 && <div style={{display:'none'}}>{ix}</div> }
          { title && <h2 className="ArticleCard-title" style={leadStyle}>{title}</h2> }
          { lead && img && <div className="img-container"><img src={img} alt="blah" /></div> }
          { summary && <div className="ArticleCard-summary">{summary}</div> }
          { img && <div className="ArticleCard-link">http://fakebullshit.news/articles/{address}</div> }
        </div>
      </Link>
    );
  }
}

export default ArticleCard;
