import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Linkedin,
  Mail,
  Menu,
  Network,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

const experience = [
  {
    years: '2024 — now',
    role: 'Founder & CEO',
    company: 'Celentrix.AI',
    description:
      'Founder-led AI consulting for firms ready to move from experimentation to measurable operational impact. I help leaders identify the right use cases, align teams, and deploy systems that compound value.',
    current: true,
  },
  {
    years: '2008 — 2019',
    role: 'Director of Operations & Founder',
    company: 'Top Trade Inc.',
    description:
      'Directed full P&L, forecasting, budgeting, procurement, and business development for an international trade company scaled from zero to $1M+ in annual revenue over 11 years.',
    detail:
      'Built and led a 25-person sales and operations team across US–Mexico trade corridors with three major distributors. Advised partners on cross-border business development, trade compliance, cost optimization, and logistics strategy.',
    featured: true,
  },
  {
    years: '2019 — 2024',
    role: 'Revenue Operations & Business Advisor',
    company: 'Independent practice',
    description:
      'Delivered 100+ advisory engagements for founders and operators, sustaining 85%+ client retention on a referral-driven practice.',
    detail:
      'Built sales enablement infrastructure, standardized operating workflows, and revenue accountability frameworks that let clients self-sustain post-engagement.',
  },
];

const systems = [
  {
    number: '01',
    icon: Network,
    title: 'Revenue clarity system',
    description: 'CRM architecture, pipeline design, KPI dashboards, and accountability frameworks that make growth visible and actionable.',
    tags: ['CRM architecture', 'Revenue operations'],
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI workflow studio',
    description: 'Practical automations and multi-agent workflows that reduce manual work without losing the human judgment behind the business.',
    tags: ['Agentic workflows', 'Automation'],
  },
  {
    number: '03',
    icon: Target,
    title: '30-day activation',
    description: 'A structured path from business diagnosis to an operating system your team can actually use, measure, and improve.',
    tags: ['Implementation', 'Adoption'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');
    const subject = encodeURIComponent(`New conversation from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:jupima2010@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-line" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Julio Pinet home">
          <span className="brand-mark">JP</span>
          <span className="brand-name">Julio Pinet<span>.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>What I build</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu} className="nav-cta">Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> AI strategy · operating systems · leadership</p>
            <h1>Turn AI ambition<br /><em>into operating reality.</em></h1>
            <p className="hero-lede">I help ambitious leaders replace disconnected experiments with practical systems that improve how their business thinks, moves, and grows.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#work">Explore my work <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div><strong>20+</strong><span>years building<br />business systems</span></div>
              <div><strong>100+</strong><span>founders advised<br />across industries</span></div>
              <div><strong>85%</strong><span>client retention<br />through referrals</span></div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-glow" />
            <div className="portrait-frame"><img src="/images/Onboarding5.jpeg" alt="Julio Pinet" /></div>
            <div className="portrait-note"><span className="note-line" /><span>Based in San Antonio,<br />working globally.</span></div>
            <div className="portrait-stamp"><span>JP</span><span>AI / OPERATIONS<br />LEADERSHIP</span></div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Areas of focus">
          <div className="marquee-track"><span>AI STRATEGY</span><b>✦</b><span>REVENUE OPERATIONS</span><b>✦</b><span>AGENTIC WORKFLOWS</span><b>✦</b><span>LEADERSHIP</span><b>✦</b><span>AI STRATEGY</span><b>✦</b><span>REVENUE OPERATIONS</span></div>
        </section>

        <section id="about" className="about section-wrap section-padding">
          <div className="section-label"><span>01</span><span>Perspective</span></div>
          <div className="about-content">
            <div className="about-intro"><p className="eyebrow">The throughline</p><h2>Strategy only matters<br />when it changes <em>Monday.</em></h2></div>
            <div className="about-text"><p>I&apos;ve spent my career at the intersection of people, process, and performance — from building an international trade business from the ground up to helping today&apos;s leaders make AI useful in the real world.</p><p>My work is deliberately practical. I translate big possibilities into clear decisions, accountable workflows, and tools teams will actually adopt.</p><a className="inline-link" href="https://www.linkedin.com/in/juliopinet-innovation/" target="_blank" rel="noreferrer">More on LinkedIn <ExternalLink size={14} /></a></div>
          </div>
          <div className="credentials"><div><span className="credential-mark">H</span><span>Harvard Kennedy School<br /><small>Exercising Leadership · 2024</small></span></div><div><span className="credential-mark">A</span><span>Author<br /><small>AI Leadership Blueprint · 2025</small></span></div><div><span className="credential-mark">CSM</span><span>Certified ScrumMaster<br /><small>Implementation & delivery</small></span></div><div><span className="credential-mark">UNAM</span><span>Post-graduate studies<br /><small>International business & trade law</small></span></div></div>
        </section>

        <section id="work" className="systems-section section-padding">
          <div className="section-wrap"><div className="section-label light"><span>02</span><span>What I build</span></div><div className="systems-heading"><h2>Useful beats <em>impressive.</em></h2><p>Good technology should create more capacity for judgment, not another dashboard to babysit.</p></div><div className="system-grid">{systems.map((system) => { const Icon = system.icon; return <article className="system-card" key={system.number}><div className="system-top"><span>{system.number}</span><Icon size={23} strokeWidth={1.5} /></div><h3>{system.title}</h3><p>{system.description}</p><div className="tag-row">{system.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>; })}</div></div>
        </section>

        <section id="experience" className="experience section-wrap section-padding">
          <div className="section-label"><span>03</span><span>Experience</span></div>
          <div className="experience-heading"><h2>Built from the<br /><em>inside out.</em></h2><p>Before I advised businesses on AI, I had to build, operate, and grow one. That operating experience still shapes every recommendation I make.</p></div>
          <div className="timeline">{experience.map((item) => <article className={item.featured ? 'timeline-item featured' : 'timeline-item'} key={item.company}><div className="timeline-year">{item.years}</div><div className="timeline-marker" /><div className="timeline-content"><div className="role-line"><h3>{item.role}</h3>{item.current && <span className="current-pill">Current</span>}</div><p className="company-name">{item.company}</p><p>{item.description}</p>{item.detail && <p>{item.detail}</p>}{item.featured && <div className="featured-callout"><BriefcaseBusiness size={18} /><span>Scaled from zero to $1M+ revenue<br /><small>11 years · US–Mexico trade corridors</small></span></div>}</div></article>)}</div>
        </section>

        <section className="book-section section-padding"><div className="book-visual"><div className="book-cover"><div className="book-small">A FIELD GUIDE FOR LEADERS</div><h3>AI<br /><span>Leadership</span><br />Blueprint</h3><div className="book-rule" /><p>Guiding humanity<br />and technology<br />toward a shared future.</p><strong>JULIO PINET</strong></div></div><div className="book-copy"><p className="eyebrow">The book</p><h2>The future belongs to leaders who can hold both sides.</h2><p>AI Technology Waits for No One, Not Even You. My book is a practical roadmap for leaders navigating the gap between what AI promises and what organizations can responsibly make real.</p><a className="button button-dark" href="https://www.amazon.com/AI-Leadership-Blueprint-Humanity-Technology/dp/B0DT6M31R9" target="_blank" rel="noreferrer">Explore the book <ArrowUpRight size={17} /></a></div></section>

        <section id="contact" className="contact-section section-padding"><div className="section-wrap contact-inner"><div className="section-label light"><span>04</span><span>Contact</span></div><div className="contact-grid"><div><h2>Have a hard problem?<br /><em>Good. Let&apos;s talk.</em></h2><p>If you&apos;re exploring where AI can create real leverage in your business, start with a conversation. No pitch deck required.</p><div className="contact-details"><a href="mailto:jupima2010@gmail.com"><Mail size={17} /> jupima2010@gmail.com</a><a href="https://www.linkedin.com/in/juliopinet-innovation/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input name="name" required placeholder="Jane Smith" /></label><label>Your email<input name="email" type="email" required placeholder="jane@company.com" /></label><label>What are you working through?<textarea name="message" required rows={4} placeholder="Tell me a little about the opportunity or challenge..." /></label><button className="button button-teal" type="submit">{submitted ? <><Check size={17} /> Email draft ready</> : <>Send a note <ArrowUpRight size={17} /></>}</button>{submitted && <p className="form-note">Your email app should have opened with the message ready to send.</p>}</form></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><div className="brand"><span className="brand-mark">JP</span><span className="brand-name">Julio Pinet<span>.</span></span></div><p>AI strategy for leaders who intend to move.</p><div className="footer-right"><span>© 2026 Julio Pinet</span><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
