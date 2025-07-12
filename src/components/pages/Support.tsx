import { businessContent } from '../../data/businessContent';

export default function Support() {
  const { support } = businessContent;

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">{support.title}</span>
        <span className="terminal-status">● ONLINE</span>
      </div>
      
      <div className="terminal-content">
        <div className="terminal-line">
          <span className="prompt">support@soonertech:~$</span>
          <span className="command">get_contact_info</span>
        </div>
        
        <div className="terminal-output">
          <p>{support.description}</p>
          <br />
          
          <div className="contact-section">
            <h3 className="section-title">EMERGENCY CONTACT</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span className="contact-value">{support.contact.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <span className="contact-value">{support.contact.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Emergency:</span>
                <span className="contact-value emergency">{support.contact.emergency}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Hours:</span>
                <span className="contact-value">{support.contact.hours}</span>
              </div>
            </div>
          </div>
          
          <br />
          
          <div className="locations-section">
            <h3 className="section-title">OFFICE LOCATIONS</h3>
            {support.locations.map((location, index) => (
              <div key={index} className="location-block">
                <div className="location-header">
                  <span className="location-city">[{location.city.toUpperCase()}]</span>
                </div>
                <div className="location-details">
                  <div className="location-line">
                    <span className="location-label">Address:</span>
                    <span className="location-value">{location.address}</span>
                  </div>
                  <div className="location-line">
                    <span className="location-label">Phone:</span>
                    <span className="location-value">{location.phone}</span>
                  </div>
                </div>
                <br />
              </div>
            ))}
          </div>
          
          <div className="support-actions">
            <h3 className="section-title">QUICK ACTIONS</h3>
            <div className="action-menu">
              <div className="action-item">
                <span className="action-key">[T]</span>
                <span className="action-text">Submit Support Ticket</span>
              </div>
              <div className="action-item">
                <span className="action-key">[R]</span>
                <span className="action-text">Request Remote Assistance</span>
              </div>
              <div className="action-item">
                <span className="action-key">[S]</span>
                <span className="action-text">Check System Status</span>
              </div>
              <div className="action-item">
                <span className="action-key">[E]</span>
                <span className="action-text">Emergency Escalation</span>
              </div>
            </div>
          </div>
          
          <div className="terminal-prompt">
            <span className="prompt">support@soonertech:~$</span>
            <span className="blinking-cursor">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
