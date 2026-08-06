import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const NAV = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

const SunIcon = () => (
    <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
);

const Sidebar = ({ theme, onToggleTheme }) => {
    const [activeId, setActiveId] = useState(NAV[0].id);

    useEffect(() => {
        const sections = NAV
            .map(item => document.getElementById(item.id))
            .filter(Boolean);

        // The final section is too short to ever reach the observer band, so the
        // bottom of the page always counts as being on the last nav item.
        const atBottom = () =>
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;

        const observer = new IntersectionObserver(
            entries => {
                if (atBottom()) return;
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
        );

        sections.forEach(section => observer.observe(section));

        const onScroll = () => {
            if (atBottom()) setActiveId(NAV[NAV.length - 1].id);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className="sidebar">
            <div className="sidebar-inner">
                <img src="/profilepic.jpeg" alt="Liam Hastings" className="profile-picture" />
                <div className="identity">
                    <div className="name">Liam Hastings</div>
                    <div className="role">Computer Science, ML &amp; AI</div>
                </div>

                <nav className="sidebar-nav" aria-label="Sections">
                    {NAV.map(item => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={item.id === activeId ? 'active' : undefined}
                            aria-current={item.id === activeId ? 'true' : undefined}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
                </button>
            </div>
        </header>
    );
};

export default Sidebar;
