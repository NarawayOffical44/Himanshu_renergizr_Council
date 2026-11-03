import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Projects from './pages/Projects.jsx';
import Partners from './pages/Partners.jsx';
import PartnerRenergizr from './pages/PartnerRenergizr.jsx';
import BecomeAPartner from './pages/BecomeAPartner.jsx';
import Contact from './pages/Contact.jsx';

const pages = [
  ['/', Home, 'index'],
  ['/about', About, 'about'],
  ['/how-it-works', HowItWorks, 'how-it-works'],
  ['/projects', Projects, 'projects'],
  ['/partners', Partners, 'partners'],
  ['/partner-renergizr', PartnerRenergizr, 'partner-renergizr'],
  ['/become-a-partner', BecomeAPartner, 'become-a-partner'],
  ['/contact', Contact, 'contact'],
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map(([path, Component]) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {/* Old .html addresses keep working */}
        {pages.map(([path, , file]) => (
          <Route key={file} path={`/${file}.html`} element={<Navigate to={path} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
