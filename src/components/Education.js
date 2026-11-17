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
        <section className="section section-split" id="education">
            <h2 className="section-title">Education</h2>

            <div className="section-body timeline">
                <article className="timeline-entry">
                    <div className="timeline-head">
                        <div>
                            <h3 className="timeline-title">
                                Bachelor of Computer Science: Artificial
                                Intelligence and Machine Learning
                            </h3>
                            <div className="timeline-org">
                                Carleton University, Ottawa, ON
                            </div>
                        </div>
                        <span className="timeline-period">
                            September 2022 – May 2026
                        </span>
                    </div>

                    <h4 className="timeline-subhead">Awards</h4>
                    <p className="timeline-list">{awards.join(', ')}</p>

                    <h4 className="timeline-subhead">Relevant coursework</h4>
                    <p className="timeline-list">{coursework.join(', ')}</p>
                </article>
            </div>
        </section>
    );
};

export default Education;
