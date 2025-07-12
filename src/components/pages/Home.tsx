import { businessContent } from '../../data/businessContent';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { welcome, company, navigation } = businessContent;

  const handleMenuClick = (path: string) => {
    onNavigate(path);
  };

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-title">{welcome.title}</span>
        <span className="terminal-status">● ONLINE</span>
      </div>
      
      <div className="terminal-content">
        <div className="terminal-line">
          <span className="prompt">user@soonertech:~$</span>
          <span className="command">connect_to_msp_services</span>
        </div>
        
        <div className="terminal-output">
          <div className="welcome-header">
            <h2 className="company-name">{company.name}</h2>
            <p className="company-subtitle">{welcome.subtitle}</p>
          </div>
          
          <br />
          
          {welcome.intro.map((line, index) => (
            <p key={index} className="intro-line">{line}</p>
          ))}
          
          <br />
          
          <div className="service-preview">
            <p>Available Services:</p>
            <div className="service-list">
              <span className="service-tag">[MANAGED_IT]</span>
              <span className="service-tag">[CYBERSECURITY]</span>
              <span className="service-tag">[CLOUD_SERVICES]</span>
              <span className="service-tag">[SUPPORT_24/7]</span>
            </div>
          </div>
          
          <br />
          
          <p className="connection-status">Connection established. Welcome to the system.</p>
        </div>

        <div className="terminal-menu">
          {navigation.main.map((item, index) => (
            <div 
              key={item.id} 
              className="menu-item"
              onClick={() => handleMenuClick(item.path)}
            >
              <span className="menu-key">[{index + 1}]</span>
              <span className="menu-text">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="terminal-footer-info">
          <p>Oklahoma's Premier Managed Service Provider</p>
          <p>Serving businesses from OKC to Tulsa and beyond</p>
        </div>
      </div>
    </div>
  );
}
