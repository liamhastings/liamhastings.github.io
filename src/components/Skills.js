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
