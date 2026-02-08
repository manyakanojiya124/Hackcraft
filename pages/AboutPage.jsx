import React, { useState, useEffect } from "react";
import "./AboutPage.css";

import logo from "../images/hackcraft-logo.png";
import gitmLogo from "../images/GITM_Logo.jpg";
import teamSankalpLogo from "../images/TeamSankalp.png";

// Glimpse images for slider
import g1 from "../images/glimp/1.jpeg";
import g2 from "../images/glimp/2.jpeg";
import g3 from "../images/glimp/3.jpeg";
import g4 from "../images/glimp/4.jpeg";
import g5 from "../images/glimp/5.jpeg";
import g6 from "../images/glimp/6.jpeg";

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [g1, g2, g3, g4, g5, g6];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="aboutpage-section">
      {/* Background */}
      <div className="cyber-grid"></div>

      <div className="aboutpage-container">
        {/* ================= HERO ================= */}
        <div className="aboutpage-hero">
          {/* Left */}
          <div className="aboutpage-left">
            <img src={logo} alt="HackCraft Logo" className="aboutpage-logo" />
            <h1>HACKCRAFT 3.0</h1>
            <p className="tagline">
              Organized by <span>Team Sankalp</span>
            </p>
            <p className="college">
              Global Institute of Technology and Management
            </p>
          </div>

          {/* Right */}
          <div className="aboutpage-right">
            <h2>About HackCraft</h2>
            <p>
              HackCraft is the flagship annual hackathon organized and hosted by
              Global Institute of Technology and Management (GITM). The event is
              completely sponsored and supported by the college administration.
            </p>
            <p>
              Since its inception in 2024, HackCraft has successfully conducted
              editions in 2024 and 2025, empowering young innovators and
              nurturing problem-solving skills.
            </p>
            <p>
              This hackathon focuses on developing creative thinking,
              collaboration, and real-world solution building among students.
              Participants work intensively for 24 hours to transform ideas into
              impactful projects.
            </p>
            <p>
              Team Sankalp, the legacy technical club of the institution, serves
              as the core coordination team. They manage planning, execution,
              collaborations, and overall operations of the event.
            </p>
          </div>
        </div>

        {/* ================= ABOUT GITM ================= */}
        <div className="about-entity">
          <div className="entity-content">
            <div className="entity-text">
              <h2>About GITM</h2>
              <p>
                Global Institute of Technology and Management (GITM) is
                committed to providing quality education and fostering a culture
                of research, innovation, and professional development.
              </p>
              <p>
                The institute supports technical and entrepreneurial initiatives
                that help students grow academically and professionally. GITM
                provides the platform and resources for events like HackCraft,
                encouraging students to push their boundaries and innovate.
              </p>
              <p>
                With state-of-the-art infrastructure and industry-aligned
                curriculum, GITM prepares students to become future-ready
                professionals in the ever-evolving technological landscape.
              </p>
            </div>
            <div className="entity-image">
              <img src={gitmLogo} alt="GITM Logo" />
            </div>
          </div>
        </div>

        {/* ================= ABOUT TEAM SANKALP ================= */}
        <div className="about-entity sankalp-section">
          <div className="entity-content reverse">
            <div className="entity-text">
              <h2>About Team Sankalp</h2>
              <p>
                Team Sankalp is the official technical club of GITM, dedicated
                to nurturing technical skills, leadership, creativity, and
                innovation among students.
              </p>
              <p>
                The club regularly organizes workshops, seminars, competitions,
                and technical events to empower students with industry-relevant
                skills. As the driving force behind HackCraft, Team Sankalp
                ensures seamless execution and creates memorable experiences for
                participants.
              </p>
              <p>
                With a legacy of excellence, Team Sankalp continues to build a
                community of passionate learners and innovators who shape the
                future of technology.
              </p>
            </div>
            <div className="entity-image">
              <img src={teamSankalpLogo} alt="Team Sankalp Logo" />
            </div>
          </div>
        </div>

        {/* ================= GLIMPSES SLIDER ================= */}
        <div className="aboutpage-glimpses">
          <h2>Event Glimpses</h2>
          
          <div className="slider-container">
            <div className="slider-track" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
              {images.map((img, index) => (
                <div key={index} className="slide">
                  <img src={img} alt={`Event glimpse ${index + 1}`} />
                </div>
              ))}
            </div>
         
            
            {/* Navigation Buttons */}
            <button 
              className="slider-nav prev"
              onClick={() => setCurrentSlide((prev) => 
                prev === 0 ? images.length - 1 : prev - 1
              )}
            >
              ‹
            </button>
            <button 
              className="slider-nav next"
              onClick={() => setCurrentSlide((prev) => 
                (prev + 1) % images.length
              )}
            >
              ›
            </button>
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="aboutpage-contact">
          <h2>Contact the Organisers</h2>
          <div className="contact-grid">
            {/* Devansh */}
            <div className="contact-card">
              <h3>Devansh Singh</h3>
              <p>Organizer</p>
              <span>+91 870971745</span>
              <span>devanshsinghr@gmail.com</span>
            </div>
            
            {/* Kunal */}
            <div className="contact-card">
              <h3>Kunal</h3>
              <p>Organizer</p>
              <span>globalhackcraft@gitmgurugram.com</span>
              <span>linkedin.com/in/kunal-biserwal-b2a70528a</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;