import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import WebDevelopment from './components/pages/WebDevelopment';
import AppDevelopment from './components/pages/AppDevelopment';
import DataAnalytics from './components/pages/DataAnalytics';
import VRAR from './components/pages/VRAR';
import UIUX from './components/pages/UIUX';
import AIPage from './components/pages/AIPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/vr-ar" element={<VRAR />} />
          <Route path="/services/ui-ux" element={<UIUX />} />
          <Route path="/services/ai" element={<AIPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;