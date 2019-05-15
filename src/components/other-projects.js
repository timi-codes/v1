import React from 'react';
import PropTypes from 'prop-types';

const OtherProject = ({data}) => {
    const {frontmatter} = data[0].node;
    return (
       <section className="section other-projects">
            <div className="section__title">Other Projects</div>
            <div className="section__content">
                {
                    frontmatter.projects.map( project =>(
                        <div className="project" key={project.name}>
                        <div className="project__name">
                            <a href={project.link} target="_blank" className="arrow-link">{project.name}</a>
                        </div>
                        <p>{project.description}</p>
                        <div className="project__used">
                            {
                                project.tags.map(tag=>(
                                    <span key={tag} className="project__used__item">{tag}</span>
                                ))
                            }
                        </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

OtherProject.propTypes = {
    data: PropTypes.array.isRequired,
}

export default OtherProject;