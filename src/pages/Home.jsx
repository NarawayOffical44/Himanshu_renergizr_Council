import { Link } from 'react-router';
import Page from '../components/Page.jsx';

export default function Home() {
  return (
    <Page title={"Home | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="hero hero-photo">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Section 8 Not-for-Profit &middot; Energy Sector</span>
          <h1>Advancing India&rsquo;s Energy Future</h1>
          <p className="lead">An independent, impartial energy council connecting leaders, industries, governments and innovators to promote the sustainable supply and use of energy for the benefit of all people.</p>
          <div className="btn-row">
            <Link to="/contact" className="btn">Submit a Project</Link>
            <Link to="/become-a-partner" className="btn btn-outline">Become a Partner</Link>
          </div>
        </div>
        <div className="hero-panel">
          <span className="kicker">Our Mandate</span>
          <ul>
            <li>Promote sustainable energy</li><li>Enable access to clean energy</li><li>Develop practical solutions</li>
            <li>Provide reliable data</li><li>Shape the energy dialogue</li><li>Involve more people</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="stats-strip">
      <div className="container stats">
        <div><span className="stat-num">50 gigawatts</span><span className="stat-label">Estimated geothermal potential in India</span></div>
        <div><span className="stat-num">381</span><span className="stat-label">Identified geothermal locations</span></div>
        <div><span className="stat-num">&gt;98%</span><span className="stat-label">Geothermal capacity factor, day and night</span></div>
        <div><span className="stat-num">100+</span><span className="stat-label">Countries targeted for member presence</span></div>
      </div>
    </section>

    <section className="section">
      <div className="container two-col align-center">
        <div>
          <span className="kicker">About the Council</span>
          <h2>Connecting India with the global energy community</h2>
          <p>Bharat Geothermal &amp; Energy Council is a non-political, independent and impartial organisation. We engage in strategic dialogue with the energy leaders of today and tomorrow, build capabilities, and help shape an energy future that is clean, affordable and reliable.</p>
          <p>Through national member committees, partners, programmes and Future Energy Leaders, we work on whole-energy-system challenges&mdash;from India&rsquo;s untapped geothermal resources to renewable, clean and green technologies.</p>
          <Link to="/about" className="link-arrow">More about the Council &rarr;</Link>
        </div>
        <figure className="photo-frame">
          <img src="/images/geothermal.jpg" alt="Geothermal power station with steam rising from the plant" loading="lazy" width="1600" height="1067" />
          <figcaption>&ldquo;Promoting sustainable, clean and reliable energy.&rdquo;<span>Dr. Bhupesh Sharma, Ph.D. &middot; Chairman</span></figcaption>
        </figure>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <span className="kicker">What We Do</span>
        <h2>From project to partner, end to end</h2>
        <div className="cards three">
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h3"/></svg></span><h3>Take on projects</h3><p>We accept energy projects from government bodies, public sector companies, industry and communities across India.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 15c3 0 6 1.5 6 4"/></svg></span><h3>Allocate to partners</h3><p>Each project is matched to a vetted partner with the right specialisation and a proven track record.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg></span><h3>Build cooperation</h3><p>We bring Indian and international energy stakeholders together to share knowledge, data and investment.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container two-col align-center">
        <div>
          <span className="kicker">Why Geothermal</span>
          <h2>Round-the-clock clean power from the Earth</h2>
          <p>Geothermal energy has the lowest operational cost and carbon footprint among renewable sources, and its output does not depend on the time of day or the weather. It provides baseload power for a stable grid&mdash;24 hours a day, 365 days a year.</p>
          <ul className="checks">
            <li>Capacity factor above 98%, versus 25&ndash;35% for solar and wind</li>
            <li>Around five times the power density of solar</li>
            <li>Smallest land footprint among renewable technologies</li>
            <li>Applications in power, green hydrogen, heating and mineral recovery</li>
          </ul>
          <Link to="/projects#compare" className="link-arrow">Compare energy sources &rarr;</Link>
        </div>
        <figure className="photo-frame">
          <img src="/images/hero.jpg" alt="Geothermal pipelines crossing open landscape" loading="lazy" width="1600" height="1067" />
        </figure>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <span className="kicker">How It Works</span>
        <h2>A clear, accountable process</h2>
        <ol className="steps">
          <li><h3>Submit</h3><p>A project owner shares the project brief with the Council.</p></li>
          <li><h3>Assess</h3><p>We review scope, feasibility and technical requirements.</p></li>
          <li><h3>Allocate</h3><p>The project is assigned to the best-fit partner.</p></li>
          <li><h3>Deliver</h3><p>The partner executes, with Council oversight.</p></li>
        </ol>
        <Link to="/how-it-works" className="link-arrow">See the full process &rarr;</Link>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="kicker">Focus Areas</span>
        <h2>Where we work</h2>
        <div className="cards three">
          <article className="card focus"><img className="card-img" src="/images/geothermal.jpg" alt="Geothermal power plant" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8z"/></svg></span><h3>Geothermal</h3><p>Championing India&rsquo;s estimated 50 gigawatts geothermal potential, from resource assessment to power and direct-heat applications.</p></div></article>
          <article className="card focus"><img className="card-img" src="/images/solar.jpg" alt="Utility-scale solar power station" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></span><h3>Renewable Energy</h3><p>Solar, wind, hydro and hybrid projects that expand affordable, reliable clean power.</p></div></article>
          <article className="card focus"><img className="card-img" src="/images/innovation.jpg" alt="Geothermal plant cooling towers" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/></svg></span><h3>Clean Technology</h3><p>Technologies that cut emissions across industry, transport and buildings, including green hydrogen.</p></div></article>
          <article className="card focus"><img className="card-img" src="/images/hydro.jpg" alt="Hydro reservoir in Kerala" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 21 13 13"/></svg></span><h3>Green Technology</h3><p>Environment-first solutions for resource efficiency, waste reduction and a circular economy.</p></div></article>
          <article className="card focus"><img className="card-img" src="/images/hero.jpg" alt="Geothermal pipelines across open landscape" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z"/></svg></span><h3>Energy Innovation</h3><p>Research, pilots and new models that move ideas from the lab into the field.</p></div></article>
          <article className="card focus"><img className="card-img" src="/images/grid.jpg" alt="High-voltage transmission lines at sunset" loading="lazy" width="1600" height="1067" /><div className="card-body"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg></span><h3>Sustainable Infrastructure</h3><p>Resilient, low-carbon infrastructure built to serve communities for decades.</p></div></article>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <div className="section-head">
          <div><span className="kicker">Projects</span><h2>Geothermal in action</h2></div>
          <Link to="/projects" className="link-arrow">All projects &rarr;</Link>
        </div>
        <div className="cards three">
          <article className="card project"><span className="tag">Completed</span><h3>5 Kilowatt Geothermal Prototype</h3><p className="meta">Delhi &middot; Partner: Renergizr Industries</p><p>Prototype geothermal power unit in Delhi, inaugurated in November 2022 by officials of the Ministry of New &amp; Renewable Energy and the Geological Survey of India.</p></article>
          <article className="card project"><span className="tag">Completed</span><h3>20 Kilowatt Geothermal Pilot</h3><p className="meta">Manuguru, Telangana &middot; Partner: Renergizr Industries</p><p>Field demonstration with Singareni Collieries Company Limited at a site with an estimated 122 megawatts geothermal potential, achieving 16 gigajoules of energy savings.</p></article>
          <article className="card project"><span className="tag tag-muted">In development</span><h3>Clean Energy Genset System</h3><p className="meta">Pan-India &middot; Partner: Renergizr Industries</p><p>Modular 5 kilowatt to 1 megawatt gensets generating zero-emission electricity from wastewater and green hydrogen, with noise below 45 decibels.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="kicker">Partner Network</span>
        <h2>Delivered with expert partners</h2>
        <div className="cards two">
          <Link to="/partner-renergizr" className="card partner-card"><div><h3>Renergizr Industries Pvt. Ltd.</h3><p className="meta">Clean energy technology &middot; Ghaziabad, Uttar Pradesh</p><p>Patented geothermal electricity process and clean energy gensets.</p><span className="link-arrow">View partner &rarr;</span></div></Link>
        </div>
      </div>
    </section>

    <section className="section cta-band cta-photo">
      <div className="container cta-inner">
        <div>
          <h2>Have an energy project, or the expertise to deliver one?</h2>
          <p>Talk to the Council today.</p>
        </div>
        <div className="btn-row">
          <Link to="/contact" className="btn">Submit a Project</Link>
          <Link to="/become-a-partner" className="btn btn-outline">Become a Partner</Link>
        </div>
      </div>
    </section>
  </Page>
  );
}
