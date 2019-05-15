import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';


const FeaturedProject =  ({data}) => {
    console.log(data);
    const {frontmatter} = data[0].node;
    return (
        <section className="section featured-projects">
            <div className="section__title">Featured Projects</div>
            <div className="section__content">
            {
                frontmatter.featured.map( project =>(
                    <div key={project.date} className="project">
                        <figure className="project__pic">
                            <a href={project.external} target="_blank">
                              <Img fluid={project.cover.childImageSharp.fluid} alt={project.name} />                        
                            </a>
                        </figure>
                        <figcaption className="project__caption">
                            <div className="project__name">
                            <a href={project.external} target="_blank">{project.name}</a>
                            </div>
                            <p>{project.caption}</p>
                        </figcaption>
                    </div>
            ))}
            </div>
        </section>
    )
}

FeaturedProject.propTypes = {
    data: PropTypes.array.isRequired,
}

export default FeaturedProject;