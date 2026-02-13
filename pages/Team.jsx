import React, { useEffect, useRef, useState } from "react";
import "./Team.css";

import img1 from "../images/151.jpg";
import img2 from "../images/153.jpeg";
import img3 from "../images/154.jpeg";
import img4 from "../images/155.jpg";
import img5 from "../images/156.jpeg";
import img7 from "../images/158.jpeg";
import img8 from "../images/157.jpeg";
import img100 from "../images/159.jpeg";
import img101 from "../images/160.jpeg";
import img102 from "../images/161.jpeg";
import img103 from "../images/162.jpeg";
import img104 from "../images/163.jpeg";
import img105 from "../images/164.jpeg";

const teamData = [
  { id: 1, name: "Kunal", role: "Organizer", image: img1, linkedin: "https://linkedin.com/in/kunal-biserwal-b2a70528a/" },
  { id: 2, name: "Ayush Chahar", role: "Marketing Lead", image: img2, linkedin: "https://linkedin.com/in/ayush-kumar-chahar-a76175329/" },
  { id: 3, name: "Manya Kanojia", role: "Marketing Lead", image: img3, linkedin: "https://linkedin.com/in/manya-kanojia-7a0334290/" },
  { id: 4, name: "Devansh Singh", role: "Organizer", image: img5, linkedin: "https://linkedin.com/in/amphitter/" },
  { id: 5, name: "Mohit", role: "Web & Creative", image: img4, linkedin: "https://linkedin.com/in/mohit-grover-99b799336/" },
  { id: 6, name: "Hritik Singh", role: "Web Manager", image: img8, linkedin: "https://linkedin.com/in/hritik-kumar-singh-85a721291/" },
  { id: 7, name: "Pritika", role: "Media Lead", image: img7, linkedin: "https://linkedin.com/in/pritika0908/" },
  { id: 8, name: "Tamanna", role: "Media Lead", image: img100, linkedin: "#" },
  { id: 9, name: "Ansh", role: "Tech Lead", image: img101, linkedin: "https://linkedin.com/in/ansh-kumar-95a84a28a/" },
  { id: 10, name: "Divya", role: "Media Lead", image: img102, linkedin: "https://linkedin.com/in/divya-801387297/" },
  { id: 11, name: "Vishnu", role: "Tech Lead", image: img103, linkedin: "https://linkedin.com/in/kumarvishnu2912/" },
  { id: 12, name: "Sahil", role: "Media Lead", image: img104, linkedin: "#" },
  { id: 13, name: "Luv", role: "Tech Lead", image: img105, linkedin: "https://www.linkedin.com/in/luv-kumar-26570b28a/" },
];

function Team() {
  const [visible, setVisible] = useState([]);
  const ref = useRef(null);

  // ─── Group members by role, merging web roles into "Web Team" ───
  const groupedByRole = teamData.reduce((acc, member) => {
    let roleKey = member.role;
    if (roleKey === "Web & Creative" || roleKey === "Web Manager") {
      roleKey = "Web Team";
    }
    if (!acc[roleKey]) acc[roleKey] = [];
    acc[roleKey].push(member);
    return acc;
  }, {});

  // ─── Pyramid order: top → bottom, member count increases ───
  const roleOrder = ["Organizer", "Marketing Lead", "Web Team", "Tech Lead", "Media Lead"];

  // ─── Intersection Observer for fade‑in animation ───
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = Number(e.target.dataset.id);
            setVisible((prev) => (prev.includes(id) ? prev : [...prev, id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = ref.current?.querySelectorAll(".team-card");
    cards?.forEach((c) => observer.observe(c));

    return () => cards?.forEach((c) => observer.unobserve(c));
  }, []);

  // ─── Global index for staggered animation delay ───
  let globalIndex = 0;

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        {/* Header */}
        <div className="team-header">
          <h2>CORE TEAM</h2>
          <p>MEET THE ARCHITECTS</p>
        </div>

        {/* Pyramid Layout */}
        <div className="team-pyramid" ref={ref}>
          {roleOrder.map((role) => {
            const members = groupedByRole[role];
            if (!members) return null;

            return (
              <div className="team-row" key={role}>
                <h3 className="team-role-title">{role}</h3>
                <div className="team-row-cards">
                  {members.map((member) => {
                    const delay = globalIndex * 0.08;
                    globalIndex++;
                    return (
                      <div
                        key={member.id}
                        data-id={member.id}
                        className={`team-card ${
                          visible.includes(member.id) ? "show" : ""
                        }`}
                        style={{ animationDelay: `${delay}s` }}
                      >
                        <div className="team-img-box">
                          <img src={member.image} alt={member.name} />
                        </div>
                        <div className="team-info">
                          <h3>{member.name}</h3>
                          <span>{member.role}</span>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View Profile →
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;