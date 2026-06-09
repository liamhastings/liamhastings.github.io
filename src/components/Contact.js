import React from 'react';
import './Contact.css';

const EmailIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9z" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.41-5.25 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
);

const Contact = () => {
    const email = 'liamhastings@cmail.carleton.ca';
    const mailto = `mailto:${email}?subject=Hello%20from%20your%20site`;

    return (
        <div className="contact section" id="contact">
            <h2>Contact</h2>
            <p className="contact-intro">
                I just wrapped up my degree and I'm open to chatting about new grad
                roles, ML/AI projects, or anything that sounds interesting. The
                fastest way to reach me is email, but feel free to use whichever
                works for you.
            </p>

            <div className="contact-grid">
                <a className="contact-card" href={mailto}>
                    <EmailIcon />
                    <div className="text">
                        <span className="label">Email</span>
                        <span className="handle">{email}</span>
                    </div>
                </a>

                <a className="contact-card"
                    href="https://www.linkedin.com/in/liam-hastings-30b389270/"
                    target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                    <div className="text">
                        <span className="label">LinkedIn</span>
                        <span className="handle">in/liam-hastings</span>
                    </div>
                </a>

                <a className="contact-card"
                    href="https://github.com/li66m"
                    target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                    <div className="text">
                        <span className="label">GitHub</span>
                        <span className="handle">@li66m</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Contact;
