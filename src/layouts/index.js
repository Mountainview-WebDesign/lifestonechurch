import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import * as COLORS from '../constants/colors';

import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.LIGHT_GRAY};
`;

const Content = styled.div`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 16px;
`;

const Sidebar = styled.div``;

const TemplateWrapper = ({ children, data, location }) => {
  const navigation = data.site.siteMetadata.navigation;

  if (location.pathname === '/') {
    return (
      <Container>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="/favicon.png" />
          <meta
            name="google-site-verification"
            content="XMuf5LTwJ1U1gFb0tK6lFFDys1hzPnhxR-mTWx6bn3o"
          />
        </Helmet>
        <Header navigation={navigation} />
        <div>{children()}</div>
        <Footer />
      </Container>
    );
  } else if (location.pathname === '/admin/print-events') {
    return (
      <Container>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="/favicon.png" />
        </Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
        <Content>
          <div>{children()}</div>
        </Content>
      </Container>
    );
  } else {
    return (
      <Container>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="/favicon.png" />
        </Helmet>
        <Header navigation={navigation} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
        <Content>
          <div>{children()}</div>
          <Sidebar />
        </Content>
        <Footer />
      </Container>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        navigation {
          name
          path
          children {
            name
            path
          }
        }
      }
    }
  }
`;
