import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy-Policy';
import Disclaimer from './components/Disclaimer';
import Contact from './components/Contact';
import CookiePolicy from './components/Cookie-policy';
import TermCondition from './components/Term-Condition';
import AccessibilityStatement from './components/AccessibilityStatement ';
import Checklist from './components/Checklist';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/term-of-use" element={<TermCondition />} />
        <Route path="/Accessibility-Statement" element={<AccessibilityStatement />} />
        <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
