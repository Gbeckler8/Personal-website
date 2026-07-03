import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const links = [
  {
    label: 'Email',
    value: 'gbciaobella@gmail.com',
    href: 'mailto:gbciaobella@gmail.com',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gordon-beckler',
    href: 'https://www.linkedin.com/in/gordon-beckler-b120233a8/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3"/>
        <path d="M7 10v7"/>
        <path d="M7 7v.01"/>
        <path d="M11 17v-4c0-1.5 1-3 3-3s3 1.5 3 3v4"/>
        <path d="M11 10v7"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/Gbeckler8',
    href: 'https://github.com/Gbeckler8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--off-white)' }}>
      <section id="contact" ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
        <h2>Get In Touch</h2>
        <div className="section-rule" />
        <p style={{ fontSize: '1.15rem', color: 'var(--text-mid)', marginBottom: '2.5rem', maxWidth: '520px' }}>
          Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {links.map(({ label, value, href, icon }) => (
            <a key={label} href={href} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              color: 'var(--text-dark)', fontSize: '1.05rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
            >
              <span style={{ color: 'var(--gold)', flexShrink: 0 }}>{icon}</span>
              {value}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
