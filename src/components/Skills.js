import React from 'react';
import './Skills.css';

const groups = [
    {
        name: 'Languages',
        items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'HTML/CSS'],
    },
    {
        name: 'Frameworks & Libraries',
        items: ['React', 'React Native', 'Expo', 'Node.js', 'Express', 'Flask', 'Handlebars'],
    },
    {
        name: 'Machine Learning & Data',
        items: ['PyTorch', 'NumPy', 'Pandas', 'Matplotlib', 'CNNs', 'Google Colab'],
    },
    {
        name: 'Databases',
        items: ['PostgreSQL', 'PostGIS', 'SQLite', 'Schema Design', 'Normalization'],
    },
    {
        name: 'Testing & QA',
        items: ['Cypress', 'Cucumber', 'Software Quality Assurance'],
    },
    {
        name: 'Tools & Concepts',
        items: ['Git', 'Linux', 'REST APIs', 'JWT Auth', 'Role-Based Access Control', 'VS Code', 'IntelliJ'],
    },
];

const Skills = () => {
    return (
        <section className="section" id="skills">
            <h2 className="section-title">
                <span className="section-index">02.</span> Skills
            </h2>
            <p className="section-intro">
                Technologies I've used to ship something real, not just read about.
            </p>

            <div className="skill-groups">
                {groups.map(group => (
                    <div key={group.name} className="skill-group">
                        <h3 className="skill-group-name">{group.name}</h3>
                        <ul className="tag-list">
                            {group.items.map(item => (
                                <li key={item} className="tag">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
