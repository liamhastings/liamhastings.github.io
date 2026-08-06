import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

const getInitialTheme = () => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(current => (current === 'dark' ? 'light' : 'dark'));

    return (
        <div className="app">
            <Sidebar theme={theme} onToggleTheme={toggleTheme} />
            <main className="content">
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Experience />
                <Education />
                <Contact />
                <footer className="site-footer">
                    <span>
                        Built with React. Source on{' '}
                        <a
                            href="https://github.com/liamhastings/liamhastings.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        .
                    </span>
                </footer>
            </main>
        </div>
    );
}

export default App;
