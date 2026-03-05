import './App.css';

const services = [
  {
    title: 'Brand-Aligned Web Design',
    description:
      'Bespoke, mobile-first layouts crafted to feel like home for your brand while keeping conversion top-of-mind.',
  },
  {
    title: 'Lightning-Fast Development',
    description:
      'Production-ready sites built on modern frameworks (Next.js, Vite, Astro) with Core Web Vitals baked in.',
  },
  {
    title: 'Care Plans & Growth',
    description:
      'Ongoing iteration, SEO improvements, analytics dashboards, and proactive updates so you never stall.',
  },
];

const stats = [
  { label: 'Tauranga launches in 2025', value: '34' },
  { label: 'Average conversion lift', value: '+38%' },
  { label: 'Response time to new briefs', value: '<2 hrs' },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    copy: 'A 90-minute workshop to map goals, voice, and buyer journeys. We translate that into a punchy brief and site map.',
  },
  {
    step: '02',
    title: 'Design Sprints',
    copy: 'High-fidelity prototypes, microcopy, and interaction states delivered in Figma. Two iteration rounds included.',
  },
  {
    step: '03',
    title: 'Build & Launch',
    copy: 'We develop, integrate, and QA on multiple devices before handing over a launch-ready playbook and Loom walkthroughs.',
  },
];

const caseStudies = [
  {
    name: 'Pacific Loft Kitchens',
    result: '35% more qualified inquiries in the first 60 days',
    description:
      'Rebuilt their brochure site into a structured story with scannable pricing tiers and before/after galleries.',
  },
  {
    name: 'Mount Active Physiotherapy',
    result: 'Booking calendar stays 92% utilised month over month',
    description:
      'Introduced a lighter brand system, treatment finders, and automated follow-ups connected to Cliniko.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Harbour & Co. Digital · Tauranga</p>
        <h1>
          Website design for ambitious Bay of Plenty businesses ready to look as sharp as the work they deliver.
        </h1>
        <p className="subhead">
          We’re a tight Tauranga team blending brand, UX, and full-stack dev to launch sites that feel handcrafted and
          convert like mad. No offshore handovers—just locals you can ring when you need them.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:hello@harbourandco.nz">Book a discovery call</a>
          <a className="button ghost" href="#portfolio">See recent launches</a>
        </div>
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="grid" id="services">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>From memo to live site, handled under one Tauranga roof.</h2>
          <p>
            Strategy, design, copy, build, hosting, optimisation—we bundle everything so you get one invoice and one crew
            accountable for results. Perfect for service businesses, builders, hospitality, and local product brands.
          </p>
        </div>
        <div className="tiles">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid process" id="process">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>Delivered in three fast, transparent phases.</h2>
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
          <h2>Local launches we’re proud of.</h2>
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

      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">Let’s build</p>
          <h2>Need a site that feels bespoke, fast, and future-proof?</h2>
          <p>Tell us about your project and we’ll send a scoped plan within two business days.</p>
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
      </footer>
    </div>
  );
}

export default App;
