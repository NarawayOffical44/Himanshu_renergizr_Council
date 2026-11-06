import Page from '../components/Page.jsx';

export default function Projects() {
  return (
    <Page title={"Focus Areas & Projects | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/solar.jpg)'}}><div className="container"><span className="eyebrow">Focus Areas &amp; Projects</span><h1>Energy for a sustainable Bharat</h1></div></section>

    <section className="section">
      <div className="container">
        <span className="kicker">Focus Areas</span>
        <h2>Sectors we work in</h2>
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
        <span className="kicker">Projects</span>
        <h2>Projects with our partners</h2>
        <div className="cards three">
          <article className="card project"><span className="tag">Completed</span><h3>5 Kilowatt Geothermal Prototype</h3><p className="meta">Delhi &middot; Partner: Renergizr Industries</p><p>Prototype geothermal power unit in Delhi, inaugurated in November 2022 by officials of the Ministry of New &amp; Renewable Energy and the Geological Survey of India.</p></article>
          <article className="card project"><span className="tag">Completed</span><h3>20 Kilowatt Geothermal Pilot</h3><p className="meta">Manuguru, Telangana &middot; Partner: Renergizr Industries</p><p>Sanctioned by the Ministry of Coal and commissioned in February 2023 with Singareni Collieries Company Limited. It runs on 65 to 68 degree Celsius hot water in the Godavari Basin, at a site with an estimated 122 megawatts geothermal potential, and has achieved 16 gigajoules of energy savings.</p></article>
          <article className="card project"><span className="tag tag-muted">In development</span><h3>Clean Energy Genset System</h3><p className="meta">Pan-India &middot; Partner: Renergizr Industries</p><p>Modular 5 kilowatt to 1 megawatt gensets generating zero-emission electricity from wastewater and green hydrogen, with noise below 45 decibels.</p></article>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="kicker">Milestones</span>
        <h2>From sanction to national recognition</h2>
        <ol className="timeline">
          <li><span className="when">April 2021</span><div><h3>Government sanction</h3><p>The Ministry of Coal sanctioned the 20 kilowatt geothermal pilot at Manuguru, Telangana, based on closed-loop Binary Organic Rankine Cycle technology, with an outlay of &#8377;172.28 lakh under its science and technology plan.</p></div></li>
          <li><span className="when">November 2022</span><div><h3>5 kilowatt prototype in Delhi</h3><p>India&rsquo;s first indigenous geothermal power prototype was demonstrated using a 65 degree Celsius hot water source.</p></div></li>
          <li><span className="when">February 2023</span><div><h3>Manuguru pilot commissioned</h3><p>The 20 kilowatt plant began generating power from actual geothermal resources, a first for India. The process is protected by Indian Patent No. 548040.</p></div></li>
          <li><span className="when">June 2024</span><div><h3>Community outreach</h3><p>Residents of Pagaderu village, Manuguru, visited the plant to see geothermal power generation first-hand.</p></div></li>
          <li><span className="when">April 2025</span><div><h3>Cover story in Akshay Urja</h3><p>The Ministry of New and Renewable Energy&rsquo;s newsletter featured the work as its cover story, &ldquo;Harnessing Geothermal Energy: The Potential Unfolds&rdquo;.</p></div></li>
          <li><span className="when">Next</span><div><h3>1 megawatt plant in Ladakh</h3><p>A 1 megawatt geothermal power plant is being planned in Ladakh, in areas such as Puga and Chumathang, with the Oil and Natural Gas Corporation, the Ministry of New and Renewable Energy and the Geological Survey of India.</p></div></li>
        </ol>
      </div>
    </section>

    <section className="section" id="compare">
      <div className="container">
        <span className="kicker">Comparison</span>
        <h2>Geothermal against other renewables</h2>
        <div className="table-wrap">
          <table className="compare">
            <thead><tr><th>Factor</th><th className="hl">Geothermal</th><th>Solar</th><th>Wind</th><th>Hydro</th></tr></thead>
            <tbody>
              <tr><td>Operating cost</td><td className="hl">Low</td><td>High</td><td>High</td><td>High</td></tr>
              <tr><td>Land footprint</td><td className="hl">Low</td><td>High</td><td>High</td><td>High</td></tr>
              <tr><td>Carbon footprint (grams of carbon dioxide per kilowatt-hour)</td><td className="hl">8</td><td>48</td><td>12</td><td>24</td></tr>
              <tr><td>Capacity factor</td><td className="hl">&gt;99%</td><td>25%</td><td>35%</td><td>32%</td></tr>
              <tr><td>Weather impact</td><td className="hl">None</td><td>High</td><td>High</td><td>High</td></tr>
            </tbody>
          </table>
        </div>
        <p className="source">Source: Renergizr Industries project brief. India heat-flow data: Geological Survey of India Geothermal Atlas, 2022.</p>
      </div>
    </section>
  </Page>
  );
}
