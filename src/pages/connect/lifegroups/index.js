import React from 'react';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import humanizeList from 'humanize-list';

import Layout from '../../../components/layout';
import { H1, H3, H4 } from '../../../components/headers';
import LifeGroup from '../../../components/LifeGroup';
import Breadcrumbs from '../../../components/Breadcrumbs';
import MultiSelect from '../../../components/MultiSelect';

const title = 'LifeGroups';

const DatePickerContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 799px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.div`
  margin: 0 auto;
  max-width: 1170px;
`;

const sortByDayOfWeek = (a, b) => {
  const days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };
  return days[a.node.day] - days[b.node.day];
};

class Page extends React.Component {
  state = {
    selectedDays: [],
  };

  handleLifeGroupDayChange = days => {
    this.setState(prevState => ({
      ...prevState,
      selectedDays: days.map(d => d.name),
    }));
  };

  render() {
    const { data } = this.props;
    const { selectedDays } = this.state;

    const lifegroups = data.allContentfulSmallGroup.edges;

    const allDays = Object.keys(
      lifegroups.reduce(
        (days, { node }) => ({
          ...days,
          [node.day]: node.day,
        }),
        {}
      )
    ).map(x => ({
      name: x,
      id: x,
    }));

    return (
      <Layout>
        <Breadcrumbs
          path={[{ title: 'Home', url: '/' }, { title: 'Connect' }]}
          title={title}
        />
        <H1>{title}</H1>

        <Image>
          <Img sizes={data.lifegroupImage.childImageSharp.sizes} />
        </Image>

        <DatePickerContainer>
          <H3>Which days work best for you?</H3>

          <MultiSelect
            onChange={this.handleLifeGroupDayChange}
            items={allDays}
          />
        </DatePickerContainer>

        {!!this.state.selectedDays.length && (
          <H4>
            LifeGroups on{' '}
            {humanizeList(this.state.selectedDays, { oxfordComma: true })}
          </H4>
        )}

        <CardContainer>
          {lifegroups
            .filter(
              lifegroup =>
                selectedDays.includes(lifegroup.node.day) ||
                selectedDays.length === 0
            )
            .sort(sortByDayOfWeek)
            .map(({ node }, index, array) => (
              <LifeGroup
                key={node.id}
                name={node.name}
                description={node.description && node.description.description}
                day={node.day}
                time={node.time}
                address={node.address || ''}
                hosts={node.hosts || null}
                leaders={node.leaders || null}
                contact={node.fields.contactFormatted}
                hasChildcare={node.hasChildcare}
                registrationLink={node.registrationLink}
                reachedCapacity={node.reachedCapacity}
              />
            ))}
        </CardContainer>

        <Link to="/lifegroup-leaders">LifeGroup Leader Resources</Link>
      </Layout>
    );
  }
}

export default Page;

export const query = graphql`
  query LifegroupsQuery {
    lifegroupImage: file(
      relativePath: { eq: "pages/connect/lifegroups/winter-session.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1170) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allContentfulSmallGroup {
      edges {
        node {
          id
          name
          description {
            description
          }
          day
          time
          address
          hosts {
            id
            name
            description {
              description
            }
            photo {
              title
              sizes(maxWidth: 200) {
                ...GatsbyContentfulSizes
              }
            }
          }
          leaders {
            id
            name
            description {
              description
            }
            photo {
              title
              sizes(maxWidth: 200) {
                ...GatsbyContentfulSizes
              }
            }
          }
          hasChildcare
          fields {
            contactFormatted
          }
          registrationLink
          reachedCapacity
        }
      }
    }
  }
`;
