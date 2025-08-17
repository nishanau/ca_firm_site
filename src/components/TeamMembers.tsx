"use client";

import Image from "next/image";
import { useState } from "react";
import { getTeamMembers } from "@/config/settingsUtils";
import type { TeamMember as TeamMemberType } from "@/config/types";

interface TeamMemberCardProps {
  member: TeamMemberType;
  detailed?: boolean;
}

export function TeamMemberCard({
  member,
  detailed = false,
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-member"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="photo-container">
        <Image
          src={member.photo}
          alt={member.name}
          width={300}
          height={300}
          className="photo"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="details">
        <h3>{member.name}</h3>
        <p className="title">{member.title}</p>

        {detailed ? (
          <>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Qualifications</span>
                <span className="value">{member.qualifications}</span>
              </div>

              <div className="info-item">
                <span className="label">Experience</span>
                <span className="value">{member.experience}</span>
              </div>

              <div className="info-item full-width">
                <span className="label">Specialization</span>
                <span className="value">{member.specialization}</span>
              </div>
            </div>

            {/* Bio info button with popup */}
            <div className="bio-container">
              <button
                className="bio-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsHovered(!isHovered);
                }}
              >
                <span>Read more..</span>
              </button>

              {isHovered && (
                <div className="bio-popup">
                  <h4>Biography</h4>
                  <p>{member.bio}</p>
                </div>
              )}
            </div>

            {member.linkedin && (
              <div className="social-links">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <p>Connect on </p>
                  <span>
                    <Image
                      src="/ca_firm_site/social-media/linkedin.svg"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </span>
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="specialization">{member.specialization}</div>
        )}
      </div>

      <style jsx>{`
        .team-member {
          background: linear-gradient(180deg, var(--panel), var(--panelAlt));
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .photo-container {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .photo {
          width: auto;
          height: auto;
          max-width: 100%;
          display: block;
        }

        .details {
          padding: 1.5rem;
        }

        h3 {
          font-size: 1.5rem;
          margin: 0 0 0.5rem;
          color: var(--text);
        }

        .title {
          color: var(--brand);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .specialization {
          color: var(--muted);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .info-item {
          display: flex;
          flex-direction: column;
        }

        .info-item.full-width {
          grid-column: 1 / -1;
          margin-top: 0.5rem;
        }

        .label {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }

        .value {
          font-weight: 500;
        }

        .bio-container {
          margin-top: 1.5rem;
          position: relative;
        }

        .bio-button {
          background: linear-gradient(90deg, var(--brand), var(--brandAlt));
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          width: 100%;
          text-align: center;
        }

        .bio-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .bio-popup {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          width: 400px;
          max-width: 90vw;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          animation: fadeIn 0.3s ease-out;
        }

        .bio-popup:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 10px;
          border-style: solid;
          border-color: var(--bg) transparent transparent transparent;
        }

        .bio-popup h4 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--brand);
          border-bottom: 1px solid var(--border);
          padding-bottom: 0.5rem;
        }

        .bio-popup p {
          line-height: 1.6;
          font-size: 0.9rem;
          max-height: 150px;
          overflow-y: auto;
          margin: 0;
          padding-right: 0.5rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .social-links {
          margin-top: 1.5rem;
        }

        .linkedin-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #0077b5; /* LinkedIn blue */
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          background: rgba(0, 119, 181, 0.1);
          transition: background 0.2s;
          width: 100%;
        }

        .linkedin-link:hover {
          background: rgba(0, 119, 181, 0.2);
        }
        
        .linkedin-link p {
          margin: 0;
        }
        
        .linkedin-link span {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default function TeamMembers({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  const teamMembers = getTeamMembers();

  return (
    <div className="team-grid">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.name} member={member} detailed={detailed} />
      ))}

      <style jsx>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
