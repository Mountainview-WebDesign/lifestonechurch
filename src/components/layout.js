import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import * as COLORS from '../constants/colors';

import './layout.css';

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

const TemplateWrapper = ({ children }) => {
  return (
    <Container>
      <StaticQuery
        query={graphql`
          query LayoutQuery {
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
        `}
        render={data => (
          <div>
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
            <Header navigation={data.site.siteMetadata.navigation} />
          </div>
        )}
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700|Droid+Serif:400,700,400italic"
        rel="stylesheet"
        type="text/css"
      />
      <Content>
        <div>{children}</div>
      </Content>
      <Footer />
    </Container>
  );
};

TemplateWrapper.propTypes = {};

export default TemplateWrapper;
