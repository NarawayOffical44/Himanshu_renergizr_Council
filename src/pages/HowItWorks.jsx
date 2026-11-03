import { Link } from 'react-router';
import Page from '../components/Page.jsx';

export default function HowItWorks() {
  return (
    <Page title={"How It Works | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/grid.jpg)'}}><div className="container"><span className="eyebrow">How It Works</span><h1>How projects reach the right partners</h1></div></section>

    <section className="section">
      <div className="container">
        <span className="kicker">For Project Owners</span>
        <h2>Submit a project</h2>
        <ol className="steps">
          <li><h3>Share your brief</h3><p>Send us the project scope, location, energy requirement and timelines.</p></li>
          <li><h3>Council review</h3><p>We assess feasibility, resource availability and technical requirements.</p></li>
          <li><h3>Partner allocation</h3><p>We assign the project to a vetted partner with matching expertise.</p></li>
          <li><h3>Delivery &amp; oversight</h3><p>The partner delivers while the Council tracks milestones and outcomes.</p></li>
        </ol>
        <Link to="/contact" className="btn">Submit a Project</Link>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <span className="kicker">For Partners</span>
        <h2>Join and receive projects</h2>
        <ol className="steps">
          <li><h3>Apply</h3><p>Complete the partner application with your profile and specialisation.</p></li>
          <li><h3>Verification</h3><p>We review your credentials, capabilities and completed work.</p></li>
          <li><h3>Listing</h3><p>Approved partners are listed in our Partner Network with a dedicated page.</p></li>
          <li><h3>Receive projects</h3><p>Get matched to projects that fit your expertise.</p></li>
        </ol>
        <Link to="/become-a-partner" className="btn">Become a Partner</Link>
      </div>
    </section>

    <section className="section">
      <div className="container narrow">
        <span className="kicker">FAQs</span>
        <h2>Frequently asked questions</h2>
        <details className="faq"><summary>What kind of projects does the Council take on?</summary><p>Projects across geothermal, renewable energy, clean and green technology, energy innovation and sustainable infrastructure&mdash;from feasibility studies and pilots to megawatt-scale installations.</p></details>
        <details className="faq"><summary>Who can submit a project?</summary><p>Government bodies, public sector companies, companies, institutions and community organisations with an energy project in India.</p></details>
        <details className="faq"><summary>Who can become a partner?</summary><p>Organisations with proven expertise in one or more of our focus areas. Apply through the Become a Partner page.</p></details>
        <details className="faq"><summary>Is the Council a for-profit company?</summary><p>No. The Council is a Section 8 not-for-profit company. It is non-political, independent and impartial.</p></details>
        <details className="faq"><summary>How is the Council funded?</summary><p>Through membership fees from its member committees, and through support from national and international, government and private organisations.</p></details>
      </div>
    </section>
  </Page>
  );
}
