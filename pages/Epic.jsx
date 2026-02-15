import React, { useState } from "react";
import "./Epic.css";

import organiserLogo from "../images/500.png";
import sponsorLogo from "../images/501.png";
import hackshastra from "../images/Hackshastra.png"

const Epic = () => {
  const [popupType, setPopupType] = useState(null);

  const openPopup = (type) => {
    setPopupType(type);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupType(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="epic-section">
      {/* Background Elements */}
      <div className="cyber-grid-overlay"></div>
      
      <div className="epic-container">
        {/* HEADER */}
        <div className="epic-header">
          <h1>EPIC REWARDS</h1>
          <p>Compete. Build. Win. Connect.</p>
        </div>

        {/* ================= REWARDS ================= */}
        <div className="rewards-section">
          <h2 className="section-title">🏆 Prizes & Rewards</h2>

          <div className="rewards-grid">
            {/* 1st Place */}
            <div className="reward-card gold">
              <h3>🥇 1st Place</h3>
              <ul>
                <li>Grand Cash Prize</li>
                <li>Exclusive Mentorship Program</li>
                <li>Startup Funding Support</li>
                <li>Premium Tech Kit & Swag</li>
                <li>Featured on Our Platform</li>
                <li>Industry Connect Session</li>
              </ul>
            </div>

            {/* 2nd Place */}
            <div className="reward-card silver">
              <h3>🥈 2nd Place</h3>
              <ul>
                <li>Significant Cash Prize</li>
                <li>Mentorship Sessions</li>
                <li>Advanced Tech Package</li>
                <li>Networking Access</li>
                <li>Certificate of Excellence</li>
                <li>Resource Library Access</li>
              </ul>
            </div>

            {/* 3rd Place */}
            <div className="reward-card bronze">
              <h3>🥉 3rd Place</h3>
              <ul>
                <li>Cash Prize</li>
                <li>Tech Goodies Package</li>
                <li>Official Certificate</li>
                <li>Community Access</li>
                <li>Workshop Invitations</li>
                <li>Career Guidance</li>
              </ul>
            </div>
          </div>
        </div>

{/* ================= ORGANIZER + SPONSOR ================= */}
<div className="org-co-wrapper">

  {/* Organizer */}
  <div className="org-section">
    <h2>Organizer</h2>

    <div className="org-card">
      <img src={organiserLogo} alt="GITM" />
      <span>Global Institute of Technology & Management</span>
    </div>
  </div>

  {/* Sponsor 
  <div className="co-section">
    <h2>Co-Powered By</h2>

    <div className="co-card">
      <img src={sponsorLogo} alt="Alactic Inc" />
      <span>Alactic Inc. (Co-Powered)</span>
    </div>
  </div>
*/}
</div>

       {/* <div className="partner-section">
          <h2>Co-Powered By</h2>
          <div className="partner-grid">
            <div className="partner-card">
              <img src={sponsorLogo} alt="Alactic Inc" />
              <span>Alactic Inc. (Co-Powered)</span>
            </div>
             Additional sponsors can be added here 
          </div>
        </div>
*/}
        {/* ================= COMMUNITY ================= */}
        <div className="partner-section">
          <h2>Community Partners</h2>
          <div className="partner-grid">
            <a
              href="https://www.teameklavya.xyz/"
              target="_blank"
              rel="noreferrer"
              className="partner-card"
            >
              <img
                src="https://www.teameklavya.xyz/logo.png"
                alt="Team Eklavya"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/120x70/0d0d0d/00ffff?text=Team+Eklavya";
                }}
              />
              <span>Team Eklavya</span>
            </a>
            <a
              href="https://hackshastra.in/"
              target="_blank"
              rel="noreferrer"
              className="partner-card"
            >
              <img
                src={hackshastra}
                alt="HackShastra"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/120x70/0d0d0d/00ffff?text=Team+Eklavya";
                }}
              />
              <span>HackShastra</span>
            </a>
            {/* Additional community partners can be added here */}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="cta-section">
          <button
            className="cta-btn primary"
            onClick={() => openPopup("sponsor")}
          >
            Become a Sponsor
          </button>

          <button
            className="cta-btn"
            onClick={() => openPopup("partner")}
          >
            Become a Community Partner
          </button>
        </div>

        {/* ================= POPUP ================= */}
        {popupType && (
          <div className="epic-popup-overlay" onClick={closePopup}>
            <div
              className="epic-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="popup-close"
                onClick={closePopup}
              >
                ×
              </button>

              <div className="popup-content">
                {/* Poster Image */}
                <div className="popup-poster-container">
                  <img 
                    src={popupType === "sponsor" 
                      ? "/Call for sponsors.png" 
                      : "/Call for community partners.png"
                    }
                    alt={popupType === "sponsor" 
                      ? "Call for Sponsors" 
                      : "Call for Community Partners"
                    }
                    className="popup-poster"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="popup-poster-overlay">
               
                  </div>
                </div>

                <h3>
                  {popupType === "sponsor"
                    ? "Sponsor With Us"
                    : "Partner With Us"}
                </h3>

                <p>
                  Join HackCraft 3.0 and connect with innovators, students, 
                  and industry leaders.
                  {popupType === "sponsor" 
                    ? " Gain brand visibility and access to top tech talent." 
                    : " Grow your community and collaborate on impactful projects."
                  }
                </p>

                {/* SPONSOR POPUP */}
                {popupType === "sponsor" && (
                  <div className="popup-actions">
                    <a href="/Welcome Sponsors.pdf" target="_blank" rel="noopener noreferrer">
                      📋 Welcome Kit
                    </a>
                    <a href="/Sponsors Proposal.pdf" target="_blank" rel="noopener noreferrer">
                      📄 Detailed Proposal
                    </a>
                    <a
                      href="https://forms.gle/gAQ9vHFUxRWi7r7w6"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📝 Apply Now
                    </a>
                  </div>
                )}

                {/* PARTNER POPUP */}
                {popupType === "partner" && (
                  <div className="popup-actions">
                    <a href="/Welcome Community Partners.pdf" target="_blank" rel="noopener noreferrer">
                      📋 Welcome Kit
                    </a>
                    <a href="/Community Partners Proposal.pdf" target="_blank" rel="noopener noreferrer">
                      📄 Detailed Proposal
                    </a>
                    <a
                      href="https://forms.gle/zjhsxp2xrFvj8MkT8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📝 Apply Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Epic;