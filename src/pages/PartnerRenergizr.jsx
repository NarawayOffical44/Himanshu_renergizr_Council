import { Link } from 'react-router';
import Page from '../components/Page.jsx';

export default function PartnerRenergizr() {
  return (
    <Page title={"Renergizr Industries | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/hero.jpg)'}}>
      <div className="container partner-head">
        
        <div><span className="eyebrow">Partner</span><h1>Renergizr Industries Pvt. Ltd.</h1><p>Clean energy technology &middot; Ghaziabad, Uttar Pradesh</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container two-col">
        <div>
          <span className="kicker">About</span>
          <h2>Deep-tech clean energy</h2>
          <p>Renergizr Industries is a deep-tech clean energy startup. It has developed an indigenous, patented process technology for round-the-clock clean electricity generation using geothermal energy.</p>
          <p>The company is incubated at the Startup Incubation and Innovation Centre at the Indian Institute of Technology Kanpur and the I-Hub Foundation at the Indian Institute of Management Sambalpur.</p>
        </div>
        <aside className="card fact-card">
          <h3>At a glance</h3>
          <ul className="reg-list">
            <li><strong>Patent</strong><br />No. 548040 &mdash; &ldquo;A process for generation of electricity from geothermal source&rdquo; (granted 2024)</li>
            <li><strong>Founder &amp; Chief Executive Officer</strong><br />Himanshu Gupta</li>
            <li><strong>Recognition</strong><br />4 national awards for clean energy innovation</li>
          </ul>
        </aside>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <span className="kicker">Services</span>
        <h2>What Renergizr offers</h2>
        <div className="cards three">
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8z"/></svg></span><h3>Geothermal power systems</h3><p>Binary-cycle systems using organic refrigerants to generate electricity from geothermal hot water.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><h3>Clean energy gensets</h3><p>Modular 5 kilowatt to 1 megawatt systems that generate electricity from wastewater and green hydrogen, replacing diesel gensets.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg></span><h3>Monitoring &amp; maintenance</h3><p>Remote monitoring with predictive maintenance software for deployed systems.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="kicker">Projects</span>
        <h2>Projects</h2>
        <div className="cards three">
          <article className="card project"><span className="tag">Completed</span><h3>5 Kilowatt Geothermal Prototype</h3><p className="meta">Delhi &middot; Partner: Renergizr Industries</p><p>Prototype geothermal power unit in Delhi, inaugurated in November 2022 by officials of the Ministry of New &amp; Renewable Energy and the Geological Survey of India.</p></article>
          <article className="card project"><span className="tag">Completed</span><h3>20 Kilowatt Geothermal Pilot</h3><p className="meta">Manuguru, Telangana &middot; Partner: Renergizr Industries</p><p>Field demonstration with Singareni Collieries Company Limited at a site with an estimated 122 megawatts geothermal potential, achieving 16 gigajoules of energy savings.</p></article>
          <article className="card project"><span className="tag tag-muted">In development</span><h3>Clean Energy Genset System</h3><p className="meta">Pan-India &middot; Partner: Renergizr Industries</p><p>Modular 5 kilowatt to 1 megawatt gensets generating zero-emission electricity from wastewater and green hydrogen, with noise below 45 decibels.</p></article>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <h2>Contact</h2>
        <ul className="reg-list">
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/renergizr" rel="noopener">linkedin.com/company/renergizr</a></li>
          <li><strong>Email:</strong> <a href="mailto:renergizr.industries@gmail.com">renergizr.industries@gmail.com</a></li>
        </ul>
        <p><Link to="/partners" className="link-arrow">&larr; Back to Partner Network</Link></p>
      </div>
    </section>
  </Page>
  );
}
