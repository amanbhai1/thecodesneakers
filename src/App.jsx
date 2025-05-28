import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Career from './pages/Career';
import Testimonials from './pages/Testimonials';
import Industries from './pages/Industries';
import SuccessStories from './pages/SuccessStories';
import FAQ from './pages/Faq.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="career" element={<Career />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
