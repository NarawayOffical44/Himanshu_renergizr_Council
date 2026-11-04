import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';

const nav = [
  ['/', 'Home'],
  ['/about', 'About Us'],
  ['/how-it-works', 'How It Works'],
  ['/projects', 'Focus Areas & Projects'],
  ['/partners', 'Partner Network'],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <div className="tricolor" aria-hidden="true"><span></span><span></span><span></span></div>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand">
            <img src="/assets/BGEC_Icon_128px.png" alt="" width="48" height="48" />
            <span><strong>Bharat Geothermal &amp; Energy Council</strong><small>Harnessing Earth&rsquo;s Energy for a Sustainable Bharat</small></span>
          </Link>
          <button className="nav-toggle" aria-label="Open menu" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen((o) => !o)}>&#9776;</button>
          <nav id="nav-menu" className={open ? 'nav-menu open' : 'nav-menu'}>
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end>{label}</NavLink>
            ))}
            <NavLink to="/contact" className="nav-cta">Contact Us</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/BGEC_Logo_Transparent_Master.png" alt="Bharat Geothermal & Energy Council logo" width="220" height="117" loading="lazy" />
            <p>A non-political, independent and impartial Section 8 not-for-profit promoting sustainable, clean and reliable energy.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/how-it-works">How It Works</Link></p>
            <p><Link to="/projects">Focus Areas &amp; Projects</Link></p>
            <p><Link to="/partners">Partner Network</Link></p>
            <p><Link to="/become-a-partner">Become a Partner</Link></p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a href="tel:+919318343243">+91 93183 43243</a></p>
            <p><a href="mailto:bhupesh@bharatgeoenergy.com">bhupesh@bharatgeoenergy.com</a></p>
            <p><a href="https://wa.me/919318343243">WhatsApp</a></p>
          </div>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Bharat Geothermal &amp; Energy Council. A Section 8 not-for-profit company. All rights reserved.</p>
      </footer>
    </>
  );
}
