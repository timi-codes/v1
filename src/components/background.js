import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Background = ({data}) => {
    const { frontmatter, html } = data[0].node;

    return (
        <section className="section background">
            <div className="section__title">{frontmatter.title}</div>
            <div className="section__content" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
    )
}

Background.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Background;