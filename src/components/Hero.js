import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-headline">
                    Hi, I'm Liam. I build software I actually use, and I can't
                    leave a bug alone.
                </h1>
                <p className="hero-summary">
                    I'm a software engineer in Ottawa with a Computer Science
                    degree from Carleton University. I build full-stack web and
                    mobile apps end to end, from PostgreSQL and PostGIS queries
                    and Node APIs to React and React Native clients, and I'm
                    looking for a full-time software developer or software
                    engineering role.
                </p>

                <div className="hero-actions">
                    <a className="button button-primary" href="/resume.pdf" download>
                        Download résumé
                    </a>
                    <a className="button" href="#projects">
                        See projects
                    </a>
                    <a className="button" href="mailto:liamhastings04@gmail.com">
                        Email me
                    </a>
                </div>
            </div>

            <img
                src="/profilepic.jpeg"
                alt="Liam Hastings"
                className="hero-photo"
                width="220"
                height="220"
            />
        </section>
    );
};

export default Hero;
