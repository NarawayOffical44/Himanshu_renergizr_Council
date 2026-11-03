import { Link } from 'react-router';
import Page from '../components/Page.jsx';

export default function Partners() {
  return (
    <Page title={"Partner Network | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/innovation.jpg)'}}><div className="container"><span className="eyebrow">Partner Network</span><h1>The experts who deliver our projects</h1></div></section>

    <section className="section">
      <div className="container">
        <p className="intro">Our partner network brings together organisations with proven expertise across geothermal, renewable and clean energy. Each partner is verified by the Council before receiving projects.</p>
        <div className="cards two">
          <Link to="/partner-renergizr" className="card partner-card"><div><h3>Renergizr Industries Pvt. Ltd.</h3><p className="meta">Clean energy technology &middot; Ghaziabad, Uttar Pradesh</p><p>Patented geothermal electricity process and clean energy gensets.</p><span className="link-arrow">View partner &rarr;</span></div></Link>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow center">
        <h2>Grow the network</h2>
        <p>Organisations with expertise in our focus areas are invited to apply.</p>
        <Link to="/become-a-partner" className="btn">Become a Partner</Link>
      </div>
    </section>
  </Page>
  );
}
