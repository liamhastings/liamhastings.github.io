import React from 'react';
import './Timeline.css';

const roles = [
    {
        id: 'td',
        title: 'Customer Experience Associate',
        org: 'TD Canada Trust · Ontario',
        period: 'March 2026 — Present',
        points: [
            'Process a high volume of deposits, withdrawals, bill payments, and transfers daily with accuracy, in accordance with banking regulations and TD\'s Code of Conduct.',
            'Assess individual customer needs to recommend tailored banking products and solutions, consistently meeting referral and sales objectives.',
            'Resolve customer concerns using standard procedures, escalating non-standard issues to maintain a positive customer experience.',
            'Collaborate with branch team members to deliver consistent, high-quality service and support an inclusive work environment.',
        ],
    },
    {
        id: 'honda',
        title: 'Summer Associate',
        org: 'Honda of Canada Mfg. · Alliston, ON',
        period: 'May — Sept. 2023, 2024, 2025',
        points: [
            'Assembled 2023-2025 Honda CRVs using state-of-the-art technology and computer-calibrated tools.',
            'Repaired vehicles found during sweep, limiting outflow and maintaining quality for customers.',
            'Handled power tools and developed correct posture for safely using them, resulting in safer work conditions.',
        ],
    },
];

const Experience = () => {
    return (
        <section className="section" id="experience">
            <h2 className="section-title">
                <span className="section-index">04.</span> Experience
            </h2>
            <p className="section-intro">
                My technical work so far lives in the projects above. Alongside my
                degree I've held client-facing and production roles that rewarded
                accuracy, consistency, and working well on a team.
            </p>

            <div className="timeline">
                {roles.map(role => (
                    <article key={role.id} className="timeline-entry card">
                        <div className="timeline-head">
                            <div>
                                <h3 className="timeline-title">{role.title}</h3>
                                <div className="timeline-org">{role.org}</div>
                            </div>
                            <span className="timeline-period">{role.period}</span>
                        </div>
                        <ul className="timeline-points">
                            {role.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
