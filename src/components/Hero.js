import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <p className="hero-eyebrow">Ottawa, Canada</p>
            <h1 className="hero-name">Liam Hastings</h1>
            <p className="hero-headline">
                Software engineer with a Computer Science degree in the AI and
                Machine Learning stream.
            </p>
            <p className="hero-summary">
                I build full-stack applications end to end, from PostGIS
                geospatial queries and Node APIs to React Native clients and CNNs
                trained on GPU. Actively seeking full-time software engineering
                and ML opportunities.
            </p>

            <div className="hero-actions">
                <a className="button button-primary" href="/resume.pdf" download>
                    Download Resume
                </a>
                <a className="button" href="#projects">
                    View Projects
                </a>
                <a className="button" href="mailto:liamhastings04@gmail.com">
                    Get in Touch
                </a>
            </div>

            <dl className="hero-facts">
                <div>
                    <dt>Education</dt>
                    <dd>B.C.S., Carleton University</dd>
                </div>
                <div>
                    <dt>Focus</dt>
                    <dd>AI / ML &middot; Full-Stack</dd>
                </div>
                <div>
                    <dt>Core Stack</dt>
                    <dd>Java &middot; Python &middot; React &middot; Node</dd>
                </div>
            </dl>
        </section>
    );
};

export default Hero;
