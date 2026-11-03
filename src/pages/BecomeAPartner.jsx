import Page from '../components/Page.jsx';

export default function BecomeAPartner() {
  return (
    <Page title={"Become a Partner | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/hydro.jpg)'}}><div className="container"><span className="eyebrow">Become a Partner</span><h1>Deliver India&rsquo;s clean energy projects with us</h1></div></section>

    <section className="section">
      <div className="container cards three">
        <div className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg></span><h3>Benefits</h3><p>Access to Council-sourced projects, a dedicated partner profile, and a place in a national and international energy network.</p></div>
        <div className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg></span><h3>Eligibility</h3><p>Organisations with demonstrated expertise in geothermal, renewable, clean or green energy, energy innovation or sustainable infrastructure.</p></div>
        <div className="card"><span className="ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3"/><path d="M4 4v4h4M20 20v-4h-4"/></svg></span><h3>Process</h3><p>Apply below, complete verification with our team, and get listed to start receiving matched projects.</p></div>
      </div>
    </section>

    <section className="section alt">
      <div className="container narrow">
        <span className="kicker">Application</span>
        <h2>Partner application form</h2>
        {/* FORM_ENDPOINT: set action to the form service URL that delivers to the work email */}
        <form className="form" action="#" method="POST">
          <input type="hidden" name="form" value="Become a Partner" />
          <label>Organisation name<input type="text" name="organisation" required /></label>
          <label>Contact person<input type="text" name="name" required /></label>
          <div className="form-row">
            <label>Phone<input type="tel" name="phone" required /></label>
            <label>Email<input type="email" name="email" required /></label>
          </div>
          <div className="form-row">
            <label>Specialisation
              <select name="specialisation" required>
                <option value="">Select one</option>
                <option>Geothermal</option><option>Renewable Energy</option><option>Clean Technology</option>
                <option>Green Technology</option><option>Energy Innovation</option><option>Sustainable Infrastructure</option>
              </select>
            </label>
            <label>Location<input type="text" name="location" required /></label>
          </div>
          <label>Website<input type="url" name="website" placeholder="https://" /></label>
          <label>About your organisation<textarea name="message" rows="5" required></textarea></label>
          <button type="submit" className="btn">Submit Application</button>
        </form>
      </div>
    </section>
  </Page>
  );
}
