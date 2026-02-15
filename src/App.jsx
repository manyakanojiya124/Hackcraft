import "./App.css";

import Front from "../pages/Front";
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import Timeline from "../pages/Timeline";
import About from "../pages/About";
import Epic from "../pages/Epic";
import AboutPage from "../pages/AboutPage";
import Navbar from "../pages/Navbar";
import Profilez from "../pages/Profilez";
import Footer from "../pages/Footer";
import ChatBot from "../src/components/Chatbot";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ NAVBAR ALWAYS ON TOP */}
      <Navbar />
      <ChatBot />

      {/* ✅ ROUTES */}
      <Routes>

        <Route path="/" element={<Front />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/team" element={<Team />} />
        <Route path="/epic" element={<Epic />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profilez" element={<Profilez />} />

      </Routes>
<Footer />
    </BrowserRouter>
  );
}

export default App;
