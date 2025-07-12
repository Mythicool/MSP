import { useState } from 'react'
import Dither from './components/Dither'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Support from './components/pages/Support'
import About from './components/pages/About'
import { businessContent } from './data/businessContent'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  console.log('App component rendering, currentPage:', currentPage);

  const handleNavigate = (path: string) => {
    const page = path.replace('/', '') || 'home';
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'support':
        return <Support />;
      case 'about':
        return <About />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {/* Fullscreen Dither Background */}
      <div className="dither-background">
        <Dither
          waveColor={[0.3, 0.3, 0.3]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.4}
          colorNum={4}
          waveAmplitude={0.4}
          waveFrequency={2}
          waveSpeed={0.03}
          pixelSize={2}
        />
      </div>

      {/* Terminal-styled Content Overlay */}
      <div className="terminal-overlay" style={{ minHeight: '100vh', zIndex: 10 }}>
        {renderCurrentPage()}

        {/* Navigation Footer */}
        <div className="terminal-footer">
          <div className="footer-content">
            <span className="footer-info">
              {businessContent.company.name} | {businessContent.company.tagline}
            </span>
            {currentPage !== 'home' && (
              <button
                className="back-button"
                onClick={handleBackToHome}
              >
                [ESC] Back to Main
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
