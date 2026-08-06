import React from 'react';
import './Timeline.css';

const coursework = [
    'Data Structures & Algorithms',
    'Systems Programming',
    'Machine Learning',
    'Database Management Systems',
    'Java Object-Oriented Programming',
    'Software Engineering',
    'Web Applications',
    'Software Quality Assurance',
];

const awards = [
    "Dean's List",
    'Faculty Scholarship',
    'William and Ann Merrill Bursary',
];

const Education = () => {
    return (
        <section className="section" id="education">
            <h2 className="section-title">
                <span className="section-index">05.</span> Education
            </h2>

            <div className="timeline">
                <article className="timeline-entry card">
                    <div className="timeline-head">
                        <div>
                            <h3 className="timeline-title">
                                Bachelor of Computer Science: Artificial
                                Intelligence and Machine Learning
                            </h3>
                            <div className="timeline-org">
                                Carleton University &middot; Ottawa, ON
                            </div>
                        </div>
                        <span className="timeline-period">
                            September 2022 — May 2026
                        </span>
                    </div>

                    <h4 className="timeline-subhead">Awards</h4>
                    <ul className="tag-list">
                        {awards.map(award => (
                            <li key={award} className="tag">{award}</li>
                        ))}
                    </ul>

                    <h4 className="timeline-subhead">Relevant Coursework</h4>
                    <ul className="tag-list">
                        {coursework.map(course => (
                            <li key={course} className="tag">{course}</li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Education;
