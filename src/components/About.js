import React from 'react';

const About = () => {
    return (
        <section className="section" id="about">
            <h2 className="section-title">
                <span className="section-index">01.</span> About
            </h2>
            <p className="section-intro">
                A bit of context on how I work and what I'm looking for.
            </p>

            <p>
                I'm a recent Computer Science graduate from Carleton University,
                where I specialized in the AI and Machine Learning stream. My
                coursework covered algorithms, systems programming, databases,
                and software engineering, and most of what I actually enjoy sits
                at the intersection of those: designing a schema that holds up,
                then building something real on top of it.
            </p>
            <p>
                Most of my strongest work has come from taking a course project
                past the point where it was graded. A relational database
                assignment became a full Flask app backed by live catalogue APIs.
                A native iOS side project got rebuilt from scratch as a
                cross-platform React Native client with a Node/Express and
                PostGIS backend, because the original had a GPS-drift bug I
                couldn't leave alone.
            </p>
            <p>
                I'm currently looking for new grad software engineering and
                ML/AI roles. This site is React, built and deployed by me.
            </p>
        </section>
    );
};

export default About;
