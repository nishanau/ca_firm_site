'use client';

import Image from 'next/image';
import { getTeamMembers } from '@/config/settingsUtils';
import type { TeamMember as TeamMemberType } from '@/config/types';

interface TeamMemberCardProps {
  member: TeamMemberType;
  detailed?: boolean;
}

export function TeamMemberCard({ member, detailed = false }: TeamMemberCardProps) {
  return (
    <div className="team-member">
      <div className="photo-container">
        <Image 
          src={member.photo} 
          alt={member.name} 
          width={300} 
          height={300} 
          className="photo"
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
              
              <div className="info-item">
                <span className="label">Specialization</span>
                <span className="value">{member.specialization}</span>
              </div>
            </div>
            
            <div className="bio">
              <h4>Biography</h4>
              <p>{member.bio}</p>
            </div>
            
            {member.linkedin && (
              <div className="social-links">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="linkedin-link"
                >
                  Connect on LinkedIn
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
          height: ${detailed ? '400px' : '280px'};
          position: relative;
          overflow: hidden;
        }
        
        .photo {
          object-fit: cover;
          width: 100%;
          height: 100%;
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
        
        .label {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }
        
        .value {
          font-weight: 500;
        }
        
        .bio {
          margin-top: 1.5rem;
        }
        
        .bio h4 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--brand);
        }
        
        .bio p {
          line-height: 1.6;
        }
        
        .social-links {
          margin-top: 1.5rem;
        }
        
        .linkedin-link {
          display: inline-flex;
          align-items: center;
          color: #0077b5; /* LinkedIn blue */
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          background: rgba(0, 119, 181, 0.1);
          transition: background 0.2s;
        }
        
        .linkedin-link:hover {
          background: rgba(0, 119, 181, 0.2);
        }
      `}</style>
    </div>
  );
}

export default function TeamMembers({ detailed = false }: { detailed?: boolean }) {
  const teamMembers = getTeamMembers();
  
  return (
    <div className="team-grid">
      {teamMembers.map((member) => (
        <TeamMemberCard 
          key={member.name} 
          member={member} 
          detailed={detailed} 
        />
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
