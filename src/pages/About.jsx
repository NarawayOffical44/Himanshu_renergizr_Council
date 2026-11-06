import Page from '../components/Page.jsx';

export default function About() {
  return (
    <Page title={"About Us | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/geothermal.jpg)'}}><div className="container"><span className="eyebrow">About Us</span><h1>Harnessing Earth&rsquo;s Energy for a Sustainable Bharat</h1></div></section>

    <section className="section">
      <div className="container two-col align-center">
        <div>
          <span className="kicker">Profile</span>
          <h2>Who we are</h2>
          <p>Bharat Geothermal &amp; Energy Council is a Section 8 not-for-profit company working across the energy sector. The Council takes on energy projects and allocates them to a network of qualified partners, while connecting India with the global energy community.</p>
          <p>We are non-political, independent and impartial. The Council is funded through membership fees from its member committees and through support from national and international, government and private organisations.</p>
        </div>
        <div className="quote-card"><p>&ldquo;To promote the sustainable supply and use of energy for the greatest benefit of all people.&rdquo;</p><span>Mission of the Council</span></div>
      </div>
    </section>

    <section className="section alt">
      <div className="container two-col">
        <div className="card vm"><span className="kicker">Vision</span><h3>Advancing India&rsquo;s place in the global energy transition</h3><p>An independent energy community, with member presence in over 100 countries, that connects leaders, industries, governments and innovators to meet whole-energy-system challenges.</p></div>
        <div className="card vm"><span className="kicker">Mission</span><h3>Sustainable energy for all people</h3><p>To champion India&rsquo;s geothermal potential and enable innovation and partnerships for renewable, clean and green energy that is affordable and reliable.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <span className="kicker">Objectives</span>
        <h2>What the Council works towards</h2>
        <div className="cards three">
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 21 13 13"/></svg></span><h3>Promote sustainable energy</h3><p>Advance the sustainable use and supply of energy for the benefit of all.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg></span><h3>Strategic dialogue</h3><p>Engage with the energy leaders of today and the future, build capabilities and help shape the energy future.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg></span><h3>Use every resource</h3><p>Harness resources above and below ground for generating, storing and transporting energy for industrial, commercial and residential use.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z"/></svg></span><h3>Practical solutions</h3><p>Develop practical solutions that help energy leaders make informed decisions.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></span><h3>Access to clean energy</h3><p>Enable access to clean, affordable and reliable energy.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 15c3 0 6 1.5 6 4"/></svg></span><h3>Humanising energy</h3><p>Involve more people and communities in the energy transition.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/></svg></span><h3>Reliable data</h3><p>Provide reliable data, tools and impartial commentary for decision-makers.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg></span><h3>Member committees</h3><p>Build national member committees, partners, programmes and a Future Energy Leaders community.</p></article>
          <article className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-8z"/></svg></span><h3>Geothermal for India</h3><p>Bring India&rsquo;s geothermal resources into the mainstream of its clean energy mix.</p></article>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <span className="kicker">Leadership</span>
        <h2>Our leadership</h2>
        <article className="card leader">
          
          <div>
            <h3>Dr. Bhupesh Sharma, Ph.D.</h3>
            <p className="role">Chairman</p>
            <p>A material scientist with over 35 years of industrial research experience across private and government industries, and an expert in hydrogen and fuel cells. Dr. Sharma is a co-inventor of an Indian patent for generating electricity from geothermal sources.</p>
            <p>He was a member of the 27th and 28th Indian Scientific Expeditions to Antarctica for the Ministry of Earth Sciences, carrying out long-term environmental monitoring at the Maitri research base. In 2010 he joined the Department of Atomic Energy team at India&rsquo;s first public radiation accident in Mayapuri, Delhi, and was recognised for that work. He has also served on the Atomic Energy Regulatory Board&rsquo;s Exposure Investigation Committee for the Northern Region.</p>
            <p>His work includes 20 research papers, 3 book chapters, 2 patents and 3 awards, along with technologies taken from laboratory to commercial scale in radiation processing, fly ash utilisation, plastic waste recycling and medical blood bags.</p>
            <ul className="tags"><li>Chartered Chemist</li><li>Radiological Safety Officer approved by the Atomic Energy Regulatory Board (2013&ndash;18)</li><li>Postgraduate Diploma in Radiological Physics, Bhabha Atomic Research Centre</li><li>Postgraduate Diploma in Business Management</li></ul>
          </div>
        </article>
        <article className="card leader">
          <div>
            <h3>Himanshu Gupta</h3>
            <p className="role">Geothermal technology</p>
            <p>A co-developer of India&rsquo;s first indigenous geothermal power technology, including the turbine for low-boiling fluids. He worked on the 5 kilowatt Delhi prototype and the 20 kilowatt Manuguru pilot, credited by the Ministry of New and Renewable Energy&rsquo;s Akshay Urja newsletter.</p>
          </div>
        </article>
        <article className="card leader">
          <div>
            <h3>Aawesh Dahiya</h3>
            <p className="role">Deputy Ambassador, South Asia</p>
            <p>Deputy Ambassador for South Asia at the Intergovernmental Institution for the use of Micro-algae Spirulina Against Malnutrition, a United Nations Economic and Social Council mission.</p>
            <p>A senior professional with over 20 years of experience in engineering, business analysis, operations and strategic leadership across the telecommunications, energy and information technology sectors. A graduate in Electronics and Telecommunication Engineering, he progressed from network engineering through sales and business development into senior leadership.</p>
            <p>As Director at Spiktel Technologies Private Limited, he led business analysis, business development and consultancy services, particularly in blockchain. He combines technical knowledge, business insight and operational expertise to drive organisational growth and process improvement.</p>
          </div>
        </article>
      </div>
    </section>

  </Page>
  );
}
