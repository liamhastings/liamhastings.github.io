import React from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 'restock',
        featured: true,
        title: 'Restock',
        tagline: 'An offline iOS app whose kitchen inventory fills itself in while you decide what to cook.',
        description: (
            <>
                Most kitchen-inventory apps fail because keeping the inventory current
                is a chore nobody does. Restock never asks for that work directly:
                when you open a recipe you're already deciding "do I have this?" for
                each ingredient, so tapping "have it" or "need it" updates your
                inventory and your aisle-grouped grocery list as a by-product. A
                built-in browser imports recipes from any site. Everything runs
                locally on SQLite, with no backend, no account, and no sync. A
                personal project I use daily on my iPhone (not on the App Store).
            </>
        ),
        highlights: [
            'Kept all domain logic free of React and native imports, so the 106-assertion rules suite compiles with tsc and runs under plain Node, with no test framework and no mocks. Modules that need I/O take it as a parameter.',
            'Built two-tier recipe import: injected JavaScript reads schema.org Recipe JSON-LD over the WebView bridge, falling back to the Claude API only when a page has none. Both tiers fail closed, so a bad page never half-saves a recipe.',
            'Wrote an ingredient-line parser that turns "2 (14-ounce) cans diced tomatoes" into a canonical item plus a free-text quantity, handling fractions, ranges, size adjectives, and float noise so the catalog doesn\'t fill up with near-duplicates.',
        ],
        tech: [
            'React Native', 'Expo', 'TypeScript', 'Zustand', 'SQLite',
            'WebView', 'Claude API',
        ],
    },
    {
        id: 'stupideas',
        title: 'Stupideas Hackathon Project',
        tagline: 'A parody swipe-to-match web app for finding hackathon teammates, built by a team of three in one day.',
        description: (
            <>
                Built for the Stupideas hackathon: a parody of dating apps where you swipe through potential hackathon teammates instead.
                I owned the Next.js scaffold, the shared type contract, the profile
                API routes, and a seven-step onboarding wizard.
            </>
        ),
        highlights: [
            'Wrote the shared CLAUDE.md that coordinated three parallel Claude Code agents on separate branches, using per-person file ownership and a typed API contract so the agents never stepped on each other.',
            'Shipped 15 pull requests across the team in a single day.',
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Claude Code'],
    },
    {
        id: 'savely',
        title: 'Savely',
        tagline: 'A multi-user personal finance web app built on Plaid-linked bank accounts.',
        description: (
            <>
                A React, Vite, and Tailwind front end on an Express/TypeScript API
                and PostgreSQL, showing budgets, net worth, and transactions pulled
                from bank accounts linked through Plaid.
            </>
        ),
        highlights: [
            'Secured the API with Supabase Auth JWTs verified against the project\'s JWKS, and scoped every query to the signed-in user.',
            'Encrypted Plaid access tokens with AES-256-GCM inside a cursor-based transaction sync engine.',
        ],
        tech: [
            'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express',
            'PostgreSQL', 'Supabase', 'Plaid API',
        ],
    },
    {
        id: 'amichalked',
        featured: true,
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
        id: 'library-management',
        title: 'Library Management System',
        tagline: 'A console library system in Java 22, built strictly test-first.',
        description: (
            <>
                Supports login, borrowing, returns, and FIFO hold queues, enforcing a
                three-book limit, 14-day due dates, and hold-availability notices at
                login. The focus was on the testing process as much as the
                features.
            </>
        ),
        highlights: [
            'Practised test-driven development across 75 commits, committing each JUnit 5 test before the code that satisfies it for 26 requirements, with dedicated refactoring commits in between.',
            'Extended the 52-test JUnit suite with Cucumber BDD feature scenarios and Cypress end-to-end tests against a Node.js web port.',
            'Injected Scanner and PrintWriter so the console I/O stays testable.',
        ],
        tech: ['Java', 'JUnit 5', 'Cucumber', 'Cypress', 'Maven', 'Git'],
    },
];

const TechList = ({ tech }) => (
    <ul className="tag-list">
        {tech.map(t => (
            <li key={t} className="tag">{t}</li>
        ))}
    </ul>
);

const Highlights = ({ highlights }) => (
    <ul className="project-highlights">
        {highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
        ))}
    </ul>
);

const FeaturedProject = ({ project }) => (
    <article className="project-featured">
        <div className="project-summary">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-description">{project.description}</p>
            <TechList tech={project.tech} />
        </div>
        <Highlights highlights={project.highlights} />
    </article>
);

const CompactProject = ({ project }) => (
    <article className="project-compact">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <TechList tech={project.tech} />
        <details className="project-details">
            <summary>Engineering details</summary>
            <Highlights highlights={project.highlights} />
        </details>
    </article>
);

const Portfolio = () => {
    const featured = projects.filter(project => project.featured);
    const others = projects.filter(project => !project.featured);

    return (
        <section className="section" id="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-intro">
                A few things I've built, from coursework to side projects I keep
                coming back to.
            </p>

            <div className="project-featured-list">
                {featured.map(project => (
                    <FeaturedProject key={project.id} project={project} />
                ))}
            </div>

            <div className="project-compact-list">
                {others.map(project => (
                    <CompactProject key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
