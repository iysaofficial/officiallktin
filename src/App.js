import "./App.css";

import NavigationComps from "./components/NavigationComps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import About from "./pages/About";

// import ProvisionComps from './components/ProvisionsComps';
import FooterComps from "./components/FooterComps";

import Landing from "./Landing";

import Lowtahun from "./pages/low/lowtahun";
import Jenjang24 from "./pages/low/2024/jenjang24";
import Jenjang23 from "./pages/low/2023/jenjang23";
import Jenjang25 from "./pages/low/2025/jenjang25";

import Homeindo from "./pages/registration/homeindo"
import Indonesiaparticipants from "./pages/registration/indo-online"
import Thankyou from "./pages/registration/thankyou";

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
          <Route path="LowTahun" element={<Lowtahun />} />
          <Route path="Jenjang25" element={<Jenjang25 />} />
          <Route path="Jenjang24" element={<Jenjang24 />} />
          <Route path="Jenjang23" element={<Jenjang23 />} />
          <Route path="homeindo" element={<Homeindo />} />
          <Route path="indonesiaparticipants" element={<Indonesiaparticipants />} />
          <Route path="thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
      <FooterComps />
    </>
  );
}

export default App;
