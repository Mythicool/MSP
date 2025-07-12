import { businessContent } from '../../data/businessContent';

export default function Services() {
  const { services } = businessContent;

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">{services.title}</span>
        <span className="terminal-status">● ACTIVE</span>
      </div>
      
      <div className="terminal-content">
        <div className="terminal-line">
          <span className="prompt">admin@soonertech:~$</span>
          <span className="command">list_services --all</span>
        </div>
        
        <div className="terminal-output">
          <p>{services.description}</p>
          <br />
          
          {services.offerings.map((service, index) => (
            <div key={service.id} className="service-block">
              <div className="service-header">
                <span className="service-id">[{index + 1}]</span>
                <span className="service-name">{service.name}</span>
              </div>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                {service.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="detail-line">
                    <span className="detail-bullet">→</span>
                    <span className="detail-text">{detail}</span>
                  </div>
                ))}
              </div>
              <br />
            </div>
          ))}
          
          <div className="terminal-prompt">
            <span className="prompt">admin@soonertech:~$</span>
            <span className="blinking-cursor">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
