import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './App.css';

const services = [
  {
    title: 'Brand-Aligned Web Systems',
    description:
      'High-end UX, copy, and art direction inspired by Tauranga’s coastal palette plus modern NZ typography.',
    takeaway: 'Ideal for professional services, builders, hospitality, and boutique product brands.',
  },
  {
    title: 'Full-Stack Delivery',
    description:
      'Next.js/Vite builds, CMS integration, form automation, analytics, and ADA compliance handled in-house.',
    takeaway: 'Zero offshore handovers—one team owns the experience from sprint planning to lighthouse scores.',
  },
  {
    title: 'Growth & Care Plans',
    description:
      'Monthly CRO tests, SEO experiments, security patches, and proactive content drops tied to your calendar.',
    takeaway: 'Ship monthly wins instead of yearly rebuilds.',
  },
];

const stats = [
  { label: 'Local launches in 12 months', value: '34' },
  { label: 'Avg. enquiry lift', value: '+38%' },
  { label: 'Response time to briefs', value: '<2 hrs' },
];

const process = [
  {
    step: '01',
    title: 'Bay Blueprint',
    copy: 'We research Mount Maunganui, CBD, and Papamoa audiences to map a positioning angle + conversion journey.',
  },
  {
    step: '02',
    title: 'Design Intensives',
    copy: 'Two-week sprint with collaborative Figma boards, video walkthroughs, and feedback inside Notion.',
  },
  {
    step: '03',
    title: 'Launch + Care',
    copy: 'We deploy to Vercel, wire automations, and monitor heatmaps to queue the next optimisation drop.',
  },
];

const caseStudies = [
  {
    name: 'Pacific Loft Kitchens',
    result: '35% more qualified inquiries in the first 60 days',
    description:
      'Refreshed their value prop around bespoke joinery, added estimator wizard, and embedded before/after reels.',
  },
  {
    name: 'Mount Active Physiotherapy',
    result: 'Booking calendar stays 92% utilised month over month',
    description:
      'Lightweight booking interface tied to Cliniko + SEO hubs for common surf / trail injuries.',
  },
];

const insights = [
  'Tauranga is New Zealand’s fastest-growing city—demand for polished digital experiences keeps climbing along with net migration.',
  'Mount Maunganui + Papamoa audiences respond to coastline imagery, live social proof, and immediate CTAs (call, WhatsApp, tap-to-book).',
  'Local search trends show “builder Tauranga”, “architect Mount”, and “wellness studio Papamoa” dominating—our layouts prioritise those keyword clusters.',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  budget: '',
  message: '',
};

type FormFields = typeof initialForm;

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function App() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof FormFields) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Name, email, and project notes are required.');
      return;
    }
    setStatus('sending');
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error('Failed to send');
      }
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('[lead-form] submit failed', err);
      setStatus('error');
      setError('Could not send message. Please try again or call us.');
    }
  };

  return (
    <div className="page">
      <header className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-tauranga.jpg">
          <source src="/media/harbour-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <p className="eyebrow">Harbour & Co. Digital · Tauranga</p>
          <h1>
            Coastal-grade website design for Bay of Plenty teams ready for a sharper story, faster load times, and more
            booked work.
          </h1>
          <p className="subhead">
            We mix Tauranga research, cinematic visuals, and senior full-stack dev into one service so you can brief once
            and launch once. From Mount Maunganui retailers to CBD consultancies, we design in sprints and deploy in days.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@harbourandco.nz">Book a discovery call</a>
            <a className="button ghost" href="#lead-form">Send a project brief</a>
          </div>
          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="grid" id="services">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Strategy, visuals, code, and optimisation—all handled locally.</h2>
          <p>
            We audit your competitors across Sulphur Point, The Mount, and the CBD, then build a coastline-inspired system
            that actually sells. Our stack is React, Next.js, Vercel, HubSpot, and Make automations.
          </p>
        </div>
        <div className="tiles">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p className="takeaway">{service.takeaway}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase">
        <div className="showcase-media">
          <img src="/media/hero-tauranga.jpg" alt="Mount Maunganui coastline at sunset" />
          <img src="/media/studio-team.jpg" alt="Design team collaborating in studio" />
        </div>
        <div className="showcase-copy">
          <p className="eyebrow">Look & feel</p>
          <h2>We borrow the harbour’s gradients and Mount silhouettes to keep every screen unmistakably Tauranga.</h2>
          <p>
            Cinematic hero video, warm gold typography, and editorial layouts pair with subtle animations. Perfect for
            service businesses that want a boutique feel without sacrificing performance.
          </p>
          <div className="chips">
            <span>Mount Maunganui palettes</span>
            <span>Story-driven case studies</span>
            <span>Interactive lead forms</span>
          </div>
        </div>
      </section>

      <section className="grid process" id="process">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>Delivered in three transparent phases.</h2>
        </div>
        <div className="timeline">
          {process.map((item) => (
            <article key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid" id="portfolio">
        <div>
          <p className="eyebrow">Proof</p>
          <h2>Recent Tauranga collaborations.</h2>
        </div>
        <div className="tiles">
          {caseStudies.map((cs) => (
            <article key={cs.name}>
              <h3>{cs.name}</h3>
              <p className="result">{cs.result}</p>
              <p>{cs.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insights">
        <div>
          <p className="eyebrow">Local insights</p>
          <h2>Research we build into every layout.</h2>
        </div>
        <ul>
          {insights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="lead-form" id="lead-form">
        <div>
          <p className="eyebrow">Project intake</p>
          <h2>Tell us what you’re building.</h2>
          <p>
            We’ll respond from <strong>miles@andrewstribe.co.nz</strong> within two business days with a scoped plan,
            transparent budget, and suggested kickoff date.
          </p>
        </div>
        <form className="lead-form-card" onSubmit={handleSubmit}>
          <label>
            Full name*
            <input type="text" value={form.name} onChange={updateField('name')} placeholder="Jordan McKenzie" required />
          </label>
          <label>
            Email*
            <input type="email" value={form.email} onChange={updateField('email')} placeholder="you@company.co.nz" required />
          </label>
          <label>
            Phone / WhatsApp
            <input type="tel" value={form.phone} onChange={updateField('phone')} placeholder="+64" />
          </label>
          <label>
            Budget range
            <input type="text" value={form.budget} onChange={updateField('budget')} placeholder="$10k – $25k" />
          </label>
          <label className="full">
            Project notes*
            <textarea
              value={form.message}
              onChange={updateField('message')}
              placeholder="Current site, goals, deadline, examples"
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          {status === 'success' && <p className="form-success">Thanks! We’ll reply shortly.</p>}
          <button className="button primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send proposal request'}
          </button>
          <small>We’ll email a transcript to you instantly.</small>
        </form>
      </section>

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Let’s build</p>
          <h2>Prefer to talk first?</h2>
          <p>Send your goals, inspo links, and deadline. We’ll reply with a scoped plan within two business days.</p>
        </div>
        <div className="cta-card">
          <p>Call us: <a href="tel:+6478080425">+64 7 808 0425</a></p>
          <p>Email: <a href="mailto:hello@harbourandco.nz">hello@harbourandco.nz</a></p>
          <a className="button primary" href="mailto:hello@harbourandco.nz?subject=New%20project%20inquiry">
            Send brief
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Harbour & Co. Digital — Tauranga waterfront studio.</p>
        <small>
          Imagery: Pexels (Ray Bilcliff, fauxels) · Video: filesamples.com ocean sequence (CC0)
        </small>
      </footer>
    </div>
  );
}

export default App;
