import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Front.css';
import Timeline from './Timeline';
import Profile from './Profile';
import About from './About';
import Epic from './Epic';
import Location from './Location';
import AnnouncementPopup from '../src/components/Announcementpopup';
import img200 from '../images/200.png';
import img201 from '../images/201.png';
import img510 from '../images/2.png';


// ===== COUNTDOWN TIMER =====
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">

      <div className="countdown-box">
        <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="time-label">DAYS</div>
      </div>

      <div className="countdown-box">
        <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="time-label">HOURS</div>
      </div>

      <div className="countdown-box">
        <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="time-label">MINUTES</div>
      </div>

      <div className="countdown-box">
        <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="time-label">SECONDS</div>
      </div>

    </div>
  );
}

function Front() {
  return (
    <div id='home' className="front-wrapper">

      {/* Announcement Popup */}
      <AnnouncementPopup />

      <div className="front-container">

        {/* Background */}
        <motion.div className="bg-image-left">
          <img src={img200} alt="Background Left" />
        </motion.div>

        <motion.div className="bg-image-right">
          <img src={img201} alt="Background Right" />
        </motion.div>


        {/* Main Content */}
        <div className="main-content">

          <div className="content-wrapper">

            <div className="event-logo">
              <img src={img510} alt="Event Logo" className="main-logo-img" />
            </div>
            
            <div className="event-tagline">
              LEARN IT | CRACK IT | HACK IT!
            </div>
            
            <div className="event-date">
              28th-29th MARCH 2026
            </div>

            {/* ===== ACTION BUTTONS ABOVE TIMELINE ===== */}
            <div className="action-buttons-section">

              <a
                href="https://unstop.com/o/sHkeOP0?lb=K9UelnkJ&utm_medium=Share&utm_source=gitmgur42672&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="box-btn"
              >
                Register Now
              </a>

              <a
                href="/Hackcraft 3.0 Welcome Participants.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="box-btn"
              >
                Welcome Kit
              </a>

              <a
                href="https://chat.whatsapp.com/CV9PIzg73AM09ElbeUdvkg"
                target="_blank"
                rel="noopener noreferrer"
                className="box-btn whatsapp-btn"
              >
                <i className="fa fa-whatsapp"></i> WhatsApp Updates
              </a>

            </div>

            <CountdownTimer targetDate="2026-03-28T00:00:00" />

          </div>

        </div>


        <section id="profile">
          <Profile />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="epic">
          <Epic />
        </section>

        <section id="location">
          <Location />
        </section>

      </div>
    </div>
  );
}

export default Front;