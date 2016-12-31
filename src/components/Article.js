import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    const { content, title, address, summary, img } = this.props;
    const articleText = content.split('\n').map((txt, i) => (
      <p key={i}>{txt}</p>
    ));

    return (
      <div className="Article">
        <article>
          <h1>{title}</h1>
          {articleText}
          <div>{address}</div>
          <div>{summary}</div>
          <div>{img}</div>
        </article>
      </div>
    );
  }
}

export default Article;
