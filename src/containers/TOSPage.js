import React, { Component } from 'react';

import termsOfService from '../content/termsOfService';

const sectionStyle = {
  fontSize: 16,
  padding: 5,
  lineHeight: 1.4
};

const jargonStyle = {
  fontSize: 25,
  padding: 10
};

const SectionText = ({ content }) => (
  <div>
    {content.map((text, i) => (
      <p key={i} style={sectionStyle}>
        {text}
      </p>
    ))}
  </div>
);

const LegalJargon = ({ copy }) => (
  <div>
    {copy.map((section, i) =>
      <div key={i}>
        <h4 style={jargonStyle}>{section.title}</h4>
        <SectionText content={section.content} />
      </div>
    )}
  </div>
);

class TOSPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <LegalJargon copy={termsOfService} />
      </div>
    );
  }
}

export default TOSPage;
