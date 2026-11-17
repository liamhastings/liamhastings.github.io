import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <p className="hero-eyebrow">Ottawa, Canada</p>
            <h1 className="hero-name">Liam Hastings</h1>
            <p className="hero-headline">
                Software engineer with a Computer Science degree from Carleton
                University.
            </p>
            <p className="hero-summary">
                I build full-stack web and mobile applications end to end, from
                PostgreSQL and PostGIS queries and Node APIs to React and React
                Native clients. Actively seeking full-time software developer and
                software engineering roles.
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
                    <dd>Full-Stack &middot; Mobile</dd>
                </div>
                <div>
                    <dt>Core Stack</dt>
                    <dd>TypeScript &middot; Java &middot; React &middot; Node</dd>
                </div>
            </dl>
        </section>
    );
};

export default Hero;
