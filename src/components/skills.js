import React from 'react';
import PropTypes from 'prop-types';


const Skills = ({data}) => {
    const {frontmatter, html} = data[0].node;
    return (
        <section className="section skills">
        <div className="section__title">{frontmatter.title}</div>
        <div className="section__content">
            <div className="skillz">
                <div className="skillz__category">
                    <div className="skillz__category__label">Languages</div>
                    <ul>
                    {
                        frontmatter.languages.map(language => (
                            <li key={language} className="skillz__category__item">{language}</li>
                    ))}
                    </ul>
                </div>
                <div className="skillz__category">
                    <div className="skillz__category__label">Frameworks/<br/>Libraries</div>
                    <ul>
                    {
                        frontmatter.frameworks.map(framework => (
                            <li key={framework} className="skillz__category__item">{framework}</li>
                    ))}
                    </ul>
                </div>
                <div className="skillz__category">
                    <div className="skillz__category__label">Tools</div>
                    <ul>
                    {
                        frontmatter.tools.map(tool => (
                            <li key={tool} className="skillz__category__item">{tool}</li>
                    ))}
                    </ul>
                </div>
                <div className="skillz__category">
                    <div className="skillz__category__label">Design</div>
                    <ul>
                    {
                        frontmatter.design.map(design => (
                            <li key={design} className="skillz__category__item">{design}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
        </section>

    )
}

Skills.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Skills;