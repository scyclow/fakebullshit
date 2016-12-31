import React, { Component } from 'react';
import Link from 'react-router/Link';
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

    const leadStyle = lead ? { fontSize: random(60, 140) } : {};

    return (

      <Link
        to={`/articles/${address}`}
        className={`ArticleCard ArticleCard-${storyType}`}
      >
        {/* ix > -1 && <div>{ix}</div>*/}
        { title   && <h2 className="ArticleCard-title" style={leadStyle}>{title}</h2> }
        { summary && <div className="ArticleCard-summary">{summary}</div> }
        { img     && <div className="ArticleCard-img">{img}</div> }
      </Link>
    );
  }
}

export default ArticleCard;
