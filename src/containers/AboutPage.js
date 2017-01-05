import React, { Component } from 'react';
import Link from 'react-router/Link';


class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <p style={{ padding: 20 }}>
          Founded in 2016 by Patrick Swanson, a 20-year veteran journalist and former chief policy advisor, <Link to="/">FakeBullshit.news</Link> is a 24-hour news publication providing its audience with original reporting, in-depth investigations, thought-provoking commentary and breaking news. In six years, <Link to="/">FakeBullshit.news</Link> readership has grown to more than 16.5 million unique visitors per month and draws more than 59 million monthly pageviews. Stay informed by subscribing to our daily emails, liking us on Facebook and following us on Twitter. Mobile web apps are available for viewing on the iPhone, iPad and Android platforms. These user-friendly apps provide readers with the full range of <Link to="/">FakeBullshit.news</Link>’s website offerings on the go.
        </p>
        <p style={{ padding: 20 }}>
          For all errors, typos, and website bugs, please open an issue or pull request on <a href="https://github.com/scyclow/fakebullshit">our github page</a>.
        </p>
      </div>
    );
  }
}

export default AboutPage;
