import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = () => (
  <StaticQuery
    query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "images/emojis/rockon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt=""/>}
  />
)
export default Image