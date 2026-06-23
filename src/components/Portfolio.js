import React from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 'amichalked',
        title: 'AmIChalked',
        tagline: 'A community-powered parking app that warns drivers the moment their tires get chalked.',
        description: (
            <>
                Full-stack mobile app that turns parking enforcement into a
                crowdsourced early-warning system. When a bylaw officer chalks tires
                on a street, any user can report it in two taps, and everyone
                parked nearby gets an instant alert, tiered by urgency (your street
                vs. just the area). Originally a native iOS app, rebuilt from the
                ground up as a cross-platform React Native + Expo client backed by a
                Node/Express API and a PostgreSQL + PostGIS database.
            </>
        ),
        highlights: [
            'Designed a geospatial notification engine using PostGIS ST_DWithin queries that matches new chalk reports against every active parking session and tiers alerts by proximity to the user\'s exact street.',
            'Built intersection-based location selection on top of the OpenStreetMap Overpass API, resolving a street + cross-street pair to precise coordinates, fixing a GPS-drift bug in the original design.',
            'Migrated the original native iOS app to a cross-platform Expo codebase, with JWT auth, persisted sessions, and a notification pipeline that never blocks the primary write path on failure.',
        ],
        tech: [
            'React Native', 'Expo', 'TypeScript', 'Node.js', 'Express',
            'PostgreSQL', 'PostGIS', 'JWT', 'OpenStreetMap',
        ],
    },
    {
        id: 'cnn-mnist',
        title: 'MNIST Image Classifier (CNN)',
        tagline: 'Convolutional Neural Network for handwritten digit recognition.',
        description: (
            <>
                Built a CNN from scratch for image classification on the MNIST
                database, trained on a T4 GPU via Google Colab. A class project that
                turned into a deeper dive into model architecture, regularization,
                and training dynamics.
            </>
        ),
        tech: ['Python', 'PyTorch', 'Google Colab', 'NumPy'],
    },
    {
        id: 'watchlist-db',
        title: 'Watchlist Database',
        tagline: 'Full-stack web app for tracking movies, books, and your reading/watching lists.',
        description: (
            <>
                Started as a COMP3005 relational-database project and grew into a full
                Flask web app with a clean custom interface. Users create accounts
                (passwords hashed), then search real titles from the Open Library and
                TMDB APIs and add them with cover art, posters, authors, and
                directors to personal book and video lists. The catalog isn't
                hardcoded: it grows from whatever users discover, all backed by a
                normalized SQLite schema with users, lists, and many-to-many links.
            </>
        ),
        tech: ['Python', 'Flask', 'SQLite', 'SQL', 'HTML/CSS', 'REST APIs'],
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio section" id="portfolio">
            <h2>Portfolio</h2>
            <p className="portfolio-intro">
                A few things I've built, from coursework to side projects I keep
                coming back to.
            </p>

            <div className="project-list">
                {projects.map(project => (
                    <article key={project.id} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-tagline">{project.tagline}</p>
                        <p className="project-description">{project.description}</p>

                        {project.highlights && (
                            <ul className="project-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        )}

                        <div className="tech-tags">
                            {project.tech.map(t => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
