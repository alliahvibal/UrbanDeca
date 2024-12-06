import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Amenities from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
