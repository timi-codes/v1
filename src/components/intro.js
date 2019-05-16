import React from 'react';
import PropTypes from 'prop-types'
import { email } from '@config';

const Intro = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    return (
        <header className="intro">
            <h1 className="intro__hello">{frontmatter.title}
                <span className="emoji wave-hand animated"></span>
            </h1>

            <h2 className="intro__tagline">I'm 
                <span className="name"> {frontmatter.name}</span>{frontmatter.subtitle}
                <span className="emoji technologist"></span>
            </h2>

            <h3 className="intro__contact">
                <span>{frontmatter.contactText}</span>
                <span className="emoji pointer"></span>
                <span>
                <a href={`mailto:${email}`} target="_blank" className="highlight-link">{email}</a>
                </span>
            </h3>
        </header>
    )
}

Intro.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Intro;