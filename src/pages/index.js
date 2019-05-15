import React from "react";
import PropTypes from 'prop-types';
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from '../components/intro';
import Background from '../components/background';
import Status from '../components/status';
import Skills from '../components/skills';
import Experience from '../components/experience';
import FeaturedProject from '../components/featured-projects';
import OtherProject from '../components/other-projects';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro data={data.intro.edges}/>
    <Background data={data.background.edges}/>
    {/* <Status/> */}
    <Skills data={data.skills.edges}/>
    <Experience data={data.experiences.edges}/>
    <FeaturedProject data={data.featuredProject.edges}/>
    <OtherProject data={data.otherProjects.edges}/>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
{
  intro: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/intro/"}}){
    edges {
      node {
        frontmatter {
          title
          name
          subtitle
          contactText
        }
      }
    }
  },
  background: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/background/"}}){
    edges {
      node {
        frontmatter{
          title
        }
        html
      }
    }
  },
  skills: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/skills/"}}){
    edges {
      node {
        frontmatter{
          title
          subtitle
          languages
          frameworks
          tools
          design
        }
      }
    }
  },
  experiences: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experiences/"}}
    sort: { fields: [frontmatter___companies___date], order: DESC }
  ){
    edges {
      node {
        frontmatter{
          companies {
            name
            url
            time
            position
            date
          }
        }
      }
    }
  },
  featuredProject: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/featured-projects/"}}){
    edges {
      node {
        frontmatter{
            featured{
              name
              cover{
                childImageSharp {
                  fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
              caption
              github
              external
              show
              date
            }
        }
      }
    }
  },
  otherProjects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/other-projects/"}}){
    edges {
      node {
        frontmatter{
            projects{
              name
              description
              link
              show
              tags
          }
        }
      }
    }
  }
}
`


export default IndexPage
