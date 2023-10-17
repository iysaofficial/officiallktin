import "./App.css";

import NavigationComps from "./components/NavigationComps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import About from "./pages/About";

// import ProvisionComps from './components/ProvisionsComps';
import FooterComps from "./components/FooterComps";

import Landing from "./Landing";

function App() {
  return (
    <>
      <NavigationComps />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Faq" element={<Faqs />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
      <FooterComps />
    </>
  );
}

export default App;
