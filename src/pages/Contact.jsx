import Page from '../components/Page.jsx';

export default function Contact() {
  return (
    <Page title={"Contact Us | Bharat Geothermal & Energy Council"} description={"Bharat Geothermal & Energy Council is a Section 8 not-for-profit advancing geothermal, renewable and clean energy in India through projects and partnerships."}>
    <section className="page-hero" style={{'--bg':'url(/images/hero.jpg)'}}><div className="container"><span className="eyebrow">Contact Us</span><h1>Let&rsquo;s talk energy</h1></div></section>

    <section className="section">
      <div className="container two-col">
        <div>
          <h2>Send us a message</h2>
          {/* FORM_ENDPOINT: set action to the form service URL that delivers to the work email */}
          <form className="form" action="#" method="POST">
            <input type="hidden" name="form" value="Contact" />
            <label>Name<input type="text" name="name" required /></label>
            <label>Organisation<input type="text" name="organisation" /></label>
            <div className="form-row">
              <label>Phone<input type="tel" name="phone" required /></label>
              <label>Email<input type="email" name="email" required /></label>
            </div>
            <label>Enquiry type
              <select name="enquiry_type" required>
                <option value="">Select one</option>
                <option>Submit a Project</option><option>Partnership</option><option>Membership</option><option>General Enquiry</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows="5" required></textarea></label>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
        <aside className="card contact-card">
          <h2>Contact details</h2>
          <ul className="reg-list">
            <li><strong>Chairman</strong><br />Dr. Bhupesh Sharma, Ph.D.</li>
            <li><strong>Phone</strong><br /><a href="tel:+919318343243">+91 93183 43243</a></li>
            <li><strong>Email</strong><br /><a href="mailto:bhupesh@bharatgeoenergy.com">bhupesh@bharatgeoenergy.com</a></li>
            <li><strong>WhatsApp</strong><br /><a href="https://wa.me/919318343243">Message us on WhatsApp</a></li>
            <li><strong>Website</strong><br />bharatgeoenergy.com</li>
            {/* Add office address and Google Maps embed once confirmed */}
          </ul>
        </aside>
      </div>
    </section>
  </Page>
  );
}
