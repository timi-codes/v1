import React from 'react';
import PropTypes from 'prop-types';
import resume from '@resume';

const Experience =  ({data}) => {
    const { frontmatter } = data[0].node;

    return (
        <section className="section experience">
            <div className="section__title">Experience</div>
            <div className="section__content">
                <div className="jobs">
                {
                    frontmatter.companies.map(company => (
                        <div key={company.name} className="job">
                            <div className="time-place">
                                <div className="job__company">
                                    <a href={company.url} target="_blank">{company.name}</a>
                                </div>
                                <div className="job__time">{company.time}</div>
                            </div>
                            <div className="job__position">{company.position}</div>
                        </div>
                    ))
                }
                </div>

                <a href={resume} target="_blank" rel="nofollow noopener noreferrer" className="arrow-link">View My Resume</a>
            </div>
        </section>
    )
}

Experience.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Experience;