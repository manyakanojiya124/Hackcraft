import React, { useState } from 'react';
import './Profile.css';
import Timeline from './Timeline';
import Navbar from './Navbar'; // 👈 IMPORT NAVBAR

import img1 from '../images/210.png';
import img2 from '../images/211.png';
import img3 from '../images/212.png';
import img4 from '../images/213.png';
import img5 from '../images/214.png';
import img6 from '../images/Shardeum.png'; // 🔥 SHARDEUM SPECIAL TRACK


const Profile = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);

  const exhibitors = [
    {
      id: 1,
      name: 'AI',
      image: img1,
      description: 'Comming Soon!',
      theme: 'AI',
      problemStatement: 'Comming Soon!'
    },
    {
      id: 2,
      name: 'Cybersecurity',
      image: img2,
      description: 'Comming Soon!',
      theme: 'Cybersecurity',
      problemStatement: 'Comming Soon!'
    },
    {
      id: 3,
      name: 'IOT',
      image: img3,
      description: 'Comming Soon!',
      theme: 'IOT',
      problemStatement: 'Comming Soon!'
    },
    {
      id: 4,
      name: 'FINANCE',
      image: img4,
      description: 'Comming Soon!',
      theme: 'FINANCE',
      problemStatement: 'Comming Soon!'
    },
    {
      id: 5,
      name: 'Healthcare',
      image: img5,
      description: 'Comming Soon!',
      theme: 'Healthcare',
      problemStatement: 'Comming Soon!'
    },
    {
  id: 6,
  name: "Shardeum's Special Web3",
  image: img6,
  description: "A special Web3 sponsor track powered by Shardeum. Build decentralized applications, smart contracts, DeFi solutions, or blockchain-based innovations using Shardeum ecosystem tools.",
  theme: "Web3 - Sponsor Track",
  problemStatement: "Build an innovative Web3 solution on Shardeum blockchain. Teams selecting this track will compete for special prizes, exclusive goodies, official recognition, and potential ecosystem opportunities directly from Shardeum."
}

  ];

  const openPopup = (exhibitor) => {
    setSelectedExhibitor(exhibitor);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedExhibitor(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* 🔥 NAVBAR ADDED HERE */}
      <Navbar />

      <div className="profile-container">

        <header className="profile-header">
          <div className="header-line"></div>
          <h1 className="main-title">
            <span className="glitch-text" data-text="INDIAN EXHIBITORS">THEMES</span>
          </h1>
        </header>

        <div className="cards-grid">
          {exhibitors.map((exhibitor, index) => (
            <div
              key={exhibitor.id}
className={`exhibitor-card ${exhibitor.id === 6 ? 'special-track' : ''} ${hoveredCard === exhibitor.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(exhibitor.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openPopup(exhibitor)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-border">
                <div className="border-corner corner-tl"></div>
                <div className="border-corner corner-tr"></div>
                <div className="border-corner corner-bl"></div>
                <div className="border-corner corner-br"></div>
              </div>

              <div className="card-glow"></div>

              <div className="card-content">
                <div className="image-container">
                  <img 
  src={exhibitor.image} 
  alt={exhibitor.name} 
  className={`exhibitor-image ${exhibitor.id === 6 ? 'landscape-logo' : ''}`} 
/>

                </div>

                <div className="card-footer">
                  <h3 className="exhibitor-name">{exhibitor.name}</h3>
                  <div className="data-stream"></div>
                </div>

                <div className="card-description">
                  <div className="description-header">
                    <span className="theme-tag">{exhibitor.theme}</span>
                  </div>
                  <p className="description-text">{exhibitor.description}</p>
                  <div className="description-accent"></div>
                </div>
              </div>

              <div className="card-particles">
                <span className="particle"></span>
                <span className="particle"></span>
                <span className="particle"></span>
              </div>
            </div>
          ))}
        </div>

        {/* POPUP MODAL */}
        {selectedExhibitor && (
          <div className="popup-overlay" onClick={closePopup}>
            <div 
              className="popup-container" 
              onClick={(e) => e.stopPropagation()}
            >

              <div className="popup-border">
                <div className="popup-corner popup-corner-tl"></div>
                <div className="popup-corner popup-corner-tr"></div>
                <div className="popup-corner popup-corner-bl"></div>
                <div className="popup-corner popup-corner-br"></div>
              </div>

              <button className="popup-close" onClick={closePopup}>
                <span className="close-icon">✕</span>
              </button>

              <div className="popup-header">
                <div className="popup-header-line"></div>
                <h2 className="popup-title">
                  {selectedExhibitor.name}
                </h2>
                <span className="popup-theme-tag">{selectedExhibitor.theme}</span>
              </div>

              <div className="popup-content">
                <div className="popup-description popup-description-full">
                  <div className="popup-data-header">
                    <span className="data-label">&gt;_ DESCRIPTION</span>
                    <div className="data-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <p className="popup-text">{selectedExhibitor.description}</p>

                  <div className="popup-data-header" style={{ marginTop: '1.5rem' }}>
                    <span className="data-label">&gt;_ PROBLEM STATEMENT</span>
                    <div className="data-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <p className="popup-text">{selectedExhibitor.problemStatement}</p>

                  <div className="popup-stats">
                    <div className="stat-item">
                      <span className="stat-label">STATUS</span>
                      <span className="stat-value">ONLINE</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">ID</span>
                      <span className="stat-value">
                        EXH-{String(selectedExhibitor.id).padStart(3, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="popup-particles">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="popup-particle" style={{ animationDelay: `${i * 0.2}s` }}></span>
                ))}
              </div>

              <div className="popup-noise"></div>
            </div>
          </div>
        )}

        <div className="vignette"></div>
      </div>
    </>
  );
};

export default Profile;
