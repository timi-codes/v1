/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "../styles/layout.css";

const Layout = ({ children }) => {
    return (
      <>
        <Header/>
        <div>{children}</div> 
        <Footer/>
      </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
