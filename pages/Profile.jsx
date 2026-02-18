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
    theme: 'AI',
    description: 'Artificial Intelligence solutions addressing education, governance, behavioral intelligence, energy forecasting, and structured AI data pipelines.',
    problemStatements: [
      "AIP01: Context-Aware Academic & Research Knowledge Extraction",
      "AIP02: Early Detection of Online Behavioral Risk Patterns",
      "AIP03: AI-Driven Energy Demand Forecasting for Micro-Communities",
      "AIP04: Real-Time Multilingual Public Communication Intelligence",
      "AIP05 (Alactic AGI Integrated): Automated Grounding of Unstructured Research Data for Domain-Specific LLMs"
    ]
  },
  {
    id: 2,
    name: 'Cybersecurity',
    image: img2,
    theme: 'Cybersecurity',
    description: 'Advanced cyber defense systems for deepfake detection, fraud intelligence, identity protection, and automated security intelligence structuring.',
    problemStatements: [
      "CSP01: Real-Time Detection of Deepfake and AI-Generated Misinformation",
      "CSP02: Behavioral Anomaly Detection in Financial Transactions",
      "CSP03: Secure Digital Identity for Public Service Access",
      "CSP04: Critical Infrastructure Threat Monitoring",
      "CSP05 (Alactic AGI Integrated): Automated Intelligence Extraction from Security Incident Reports"
    ]
  },
  {
    id: 3,
    name: 'IoT',
    image: img3,
    theme: 'IoT',
    description: 'Smart infrastructure and sensor-driven intelligence systems.',
    problemStatements: [
      "IOTP01: Urban Water Leakage and Distribution Inefficiency Monitoring",
      "IOTP02: Smart Waste Segregation and Collection Optimization",
      "IOTP03: Environmental Air Quality Intelligence in Dense Urban Areas",
      "IOTP04: Cold Chain Monitoring for Perishable Goods in Transit",
      "IOTP05 (Alactic AGI Integrated): Structuring Multi-Source Sensor Documentation"
    ]
  },
  {
    id: 4,
    name: 'Finance',
    image: img4,
    theme: 'Finance',
    description: 'AI-driven financial modeling and transparency systems.',
    problemStatements: [
      "FNP01: Financial Inclusion Risk Assessment for Informal Sector Workers",
      "FNP02: Real-Time Small Business Cash Flow Volatility Prediction",
      "FNP03: Transparent Public Fund Utilization Tracking",
      "FNP04: AI-Driven Detection of Insider Trading Signals",
      "FNP05 (Alactic AGI Integrated): Automated Structuring of Regulatory Filings"
    ]
  },
  {
    id: 5,
    name: 'Healthcare',
    image: img5,
    theme: 'Healthcare',
    description: 'Healthcare intelligence systems for prediction and optimization.',
    problemStatements: [
      "HCP01: Early Detection of Lifestyle Disease Risk",
      "HCP02: Rural Diagnostic Accessibility",
      "HCP03: Hospital Resource Allocation Optimization",
      "HCP04: Pharmaceutical Supply Chain Transparency",
      "HCP05 (Alactic AGI Integrated): Clinical Research Data Grounding"
    ]
  },
  {
    id: 6,
    name: "Shardeum's Special Web3",
    image: img6,
    theme: "Web3 - Sponsor Track",
    description: "Decentralized transparency and blockchain innovation track.",
    problemStatements: [
      "W3P01: Decentralized Academic Credential Verification",
      "W3P02: Transparent Agricultural Produce Tracking",
      "W3P03: Community-Based Decentralized Energy Trading",
      "W3P04: Tamper-Proof Public Grievance Systems",
      "W3P05 (Alactic AGI Integrated): Decentralized Verification of AI Training Data Provenance"
    ]
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
<div className="problem-list">
  {selectedExhibitor.problemStatements.map((ps, index) => (
    <div
      key={index}
      className={`problem-item ${
        ps.includes("Alactic") ? "agi-highlight" : ""
      } ${
        selectedExhibitor.id === 6 ? "web3-highlight" : ""
      }`}
    >
      {ps}
    </div>
  ))}
</div>

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
