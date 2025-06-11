
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './About'
import Solutions from './Solutions'
import Blog from './Blog'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="container">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-title">ProV9 Neural</span>
                <span className="logo-subtitle">by Animmoov</span>
              </div>
            </Link>
            
            <nav className="nav">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/solutions" className="nav-link">Solutions</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
            </nav>
            
            <button className="demo-btn" onClick={openModal}>Get a Demo</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="hero">
              <div className="container">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1 className="hero-title">
                      The creative brain<br />
                      behind every<br />
                      intelligent ad.
                    </h1>
                    <p className="hero-description">
                      ProV9 Neural is a fine-tuned AI model<br />
                      custom-built for generating, optimizing,<br />
                      and personalizing dynamic ad creatives.
                    </p>
                    <button className="get-started-btn">Get Started</button>
                  </div>
                  
                  <div className="hero-graphic">
                    <div className="brain-container">
                      <svg className="brain-svg" viewBox="0 0 400 300" fill="none">
                        {/* Left brain (green) */}
                        <path
                          d="M50 150 Q50 80 120 80 Q160 60 180 100 Q190 130 170 160 Q150 200 120 200 Q80 220 50 180 Z"
                          stroke="#4ade80"
                          strokeWidth="3"
                          fill="none"
                        />
                        
                        {/* Right brain (cyan) */}
                        <path
                          d="M220 100 Q240 60 280 80 Q350 80 350 150 Q350 180 320 200 Q280 220 250 200 Q230 160 240 130 Q220 100 220 100 Z"
                          stroke="#06b6d4"
                          strokeWidth="3"
                          fill="none"
                        />
                        
                        {/* Neural connections - left side (green) */}
                        <circle cx="80" cy="120" r="6" fill="#4ade80" />
                        <circle cx="120" cy="140" r="6" fill="#4ade80" />
                        <circle cx="90" cy="160" r="6" fill="#4ade80" />
                        <circle cx="140" cy="180" r="6" fill="#4ade80" />
                        
                        <line x1="80" y1="120" x2="120" y2="140" stroke="#4ade80" strokeWidth="2" />
                        <line x1="90" y1="160" x2="140" y2="180" stroke="#4ade80" strokeWidth="2" />
                        <line x1="120" y1="140" x2="90" y2="160" stroke="#4ade80" strokeWidth="2" />
                        
                        {/* Neural connections - right side (cyan) */}
                        <circle cx="260" cy="120" r="6" fill="#06b6d4" />
                        <circle cx="300" cy="140" r="6" fill="#06b6d4" />
                        <circle cx="280" cy="160" r="6" fill="#06b6d4" />
                        <circle cx="320" cy="180" r="6" fill="#06b6d4" />
                        <circle cx="340" cy="130" r="6" fill="#06b6d4" />
                        
                        <line x1="260" y1="120" x2="300" y2="140" stroke="#06b6d4" strokeWidth="2" />
                        <line x1="300" y1="140" x2="280" y2="160" stroke="#06b6d4" strokeWidth="2" />
                        <line x1="280" y1="160" x2="320" y2="180" stroke="#06b6d4" strokeWidth="2" />
                        <line x1="300" y1="140" x2="340" y2="130" stroke="#06b6d4" strokeWidth="2" />
                        
                        {/* Additional connecting lines */}
                        <line x1="340" y1="130" x2="360" y2="110" stroke="#06b6d4" strokeWidth="2" />
                        <circle cx="360" cy="110" r="4" fill="#06b6d4" />
                        
                        <line x1="320" y1="180" x2="340" y2="200" stroke="#06b6d4" strokeWidth="2" />
                        <circle cx="340" cy="200" r="4" fill="#06b6d4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* Demo Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="modal-header">
                <h2>Get a Demo</h2>
                <p>See how ProV9 Neural can transform your web development workflow</p>
              </div>
              
              <form className="demo-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="use-case">Primary Use Case</label>
                  <select id="use-case" name="use-case" required>
                    <option value="">Select your primary interest</option>
                    <option value="web-development">Automated Web Development</option>
                    <option value="banner-generation">Banner & Graphics Generation</option>
                    <option value="content-optimization">Content Optimization</option>
                    <option value="enterprise-integration">Enterprise Integration</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea id="message" name="message" rows="4" placeholder="Describe how you'd like to use ProV9 Neural..."></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-btn">Schedule Demo</button>
                  <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  )
}
