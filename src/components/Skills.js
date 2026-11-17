import React from 'react';
import './Skills.css';

const groups = [
    {
        name: 'Languages',
        items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'SQL', 'HTML/CSS'],
    },
    {
        name: 'Frameworks & Libraries',
        items: ['React', 'Next.js', 'React Native', 'Expo', 'Node.js', 'Express', 'Tailwind CSS', 'Vite'],
    },
    {
        name: 'Databases',
        items: ['PostgreSQL', 'PostGIS', 'SQLite', 'Supabase', 'Schema Design'],
    },
    {
        name: 'Testing & QA',
        items: ['JUnit 5', 'Cucumber', 'Cypress', 'Test-Driven Development'],
    },
    {
        name: 'AI Tools',
        items: ['Claude Code', 'Claude API', 'Multi-Agent Workflows'],
    },
    {
        name: 'Tools & Concepts',
        items: ['Git', 'Maven', 'Linux', 'REST APIs', 'JWT Auth', 'VS Code', 'IntelliJ IDEA'],
    },
];

const Skills = () => {
    return (
        <section className="section section-split" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="section-body">
                <p className="section-intro">
                    Technologies I've used to ship something real, not just read
                    about.
                </p>

                <dl className="skill-groups">
                    {groups.map(group => (
                        <div key={group.name} className="skill-group">
                            <dt>{group.name}</dt>
                            <dd>{group.items.join(', ')}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default Skills;
