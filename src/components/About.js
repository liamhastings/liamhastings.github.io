import React from 'react';

const About = () => {
    return (
        <section className="section section-split" id="about">
            <h2 className="section-title">About</h2>

            <div className="section-body">
                <p>
                    I'm a recent Computer Science graduate from Carleton
                    University, where I specialized in the AI and Machine
                    Learning stream. My coursework covered algorithms, systems
                    programming, databases, and software engineering, and most
                    of what I actually enjoy sits at the intersection of those:
                    designing a schema that holds up, then building something
                    real on top of it.
                </p>
                <p>
                    Most of my strongest work has come from taking a course
                    project past the point where it was graded, or from building
                    tools I actually use every day. A native iOS side project
                    got rebuilt from scratch as a cross-platform React Native
                    client with a Node/Express and PostGIS backend, because the
                    original had a GPS-drift bug I couldn't leave alone.
                </p>
                <p>
                    I'm currently looking for new grad software developer and
                    software engineering roles. This site is React, built and
                    deployed by me.
                </p>
            </div>
        </section>
    );
};

export default About;
