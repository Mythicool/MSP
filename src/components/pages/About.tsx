import { businessContent } from '../../data/businessContent';

export default function About() {
  const { about, company } = businessContent;

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">{about.title}</span>
        <span className="terminal-status">● LOADED</span>
      </div>
      
      <div className="terminal-content">
        <div className="terminal-line">
          <span className="prompt">info@soonertech:~$</span>
          <span className="command">cat company_profile.txt</span>
        </div>
        
        <div className="terminal-output">
          <div className="company-header">
            <h2 className="company-name">{company.name}</h2>
            <p className="company-tagline">"{company.tagline}"</p>
            <p className="company-meta">
              Est. {company.established} | {company.location}
            </p>
          </div>
          
          <br />
          
          <div className="company-story">
            {about.story.map((line, index) => (
              <p key={index} className="story-line">{line}</p>
            ))}
          </div>
          
          <br />
          
          <div className="stats-section">
            <h3 className="section-title">PERFORMANCE METRICS</h3>
            <div className="stats-grid">
              {about.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <br />
          
          <div className="certifications-section">
            <h3 className="section-title">CERTIFICATIONS & PARTNERSHIPS</h3>
            <div className="cert-list">
              {about.certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span className="cert-bullet">✓</span>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <br />
          
          <div className="team-section">
            <h3 className="section-title">TEAM EXPERTISE</h3>
            <div className="expertise-list">
              <div className="expertise-item">
                <span className="expertise-area">Network Infrastructure</span>
                <span className="expertise-level">████████████ 100%</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-area">Cybersecurity</span>
                <span className="expertise-level">███████████░ 95%</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-area">Cloud Solutions</span>
                <span className="expertise-level">██████████░░ 90%</span>
              </div>
              <div className="expertise-item">
                <span className="expertise-area">Customer Service</span>
                <span className="expertise-level">████████████ 100%</span>
              </div>
            </div>
          </div>
          
          <div className="terminal-prompt">
            <span className="prompt">info@soonertech:~$</span>
            <span className="blinking-cursor">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
