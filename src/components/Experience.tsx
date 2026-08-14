import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const positions = [
  {
    title: 'Socially Responsible Computing (SRC) Undergraduate Teaching Assistant',
    org: 'Brown University Department of Computer Science',
    period: 'Sep 2026 – Dec 2026',
    bullets: [
      'Covering topics such as operating systems and concurrency for an intermediate systems course at Brown University with a primary focus on SRC',
      'Developing engaging and informative SRC course content',
      'Holding weekly office hours to help students with course content and aid students in the debugging process',
    ],
  },
  {
    title: 'Student Researcher',
    org: 'NYU Department of Computer Science',
    period: 'April 2026 – Present',
    bullets: [
      'Co-developing Attune, a real-time music practice feedback tool',
      'Spearheading web deployment, moving Attune from research prototype to public tool',
      'Built a mistake review subsystem and audio trimming logic, and contributed to experiment design and execution',
      'Contributing as second author on forthcoming publication',
    ],
  },
  {
    title: 'Music Director',
    org: 'The Higher Keys, Brown University',
    period: 'Jan 2026 – Dec 2026',
    bullets: [
      "Directing and conducting the Higher Keys, a vocal jazz group at Brown University",
      'Arranging and orchestrating jazz vocal compositions for campus events, local venues, and international and domestic tours',
      'Co-directed the recording of a Christmas Album to be released on Spotify and co-directing an upcoming Tokyo concert tour',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useFadeIn();
  return (
    <div style={{ background: 'var(--white)' }}>
      <section id="experience" ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
        <h2>Experience</h2>
        <div className="section-rule" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.8rem' }}>
          {positions.map(p => (
            <div key={p.title} style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem',
              borderLeft: '3px solid var(--gold)', paddingLeft: '2rem',
            }}>
              <div>
                <p style={{ color: 'var(--silver-dark)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                  {p.period}
                </p>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                  {p.org}
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.8rem' }}>{p.title}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {p.bullets.map((b, i) => (
                    <li key={i} style={{ color: 'var(--text-mid)', fontSize: '1rem', display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.55rem', marginTop: '0.55rem', flexShrink: 0 }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
