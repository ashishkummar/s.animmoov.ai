
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './About'
import Solutions from './Solutions'
import Blog from './Blog';
// brainLogo import is now handled by BrainCanvas.jsx
import BrainCanvas from './BrainCanvas'; // Import the new component
import headerLogo from './images/anim-new-logo-trans.png'; // Import the new header logo

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
                <img src={headerLogo} alt="ProV9 Neural Logo" className="header-logo-img" />
              </div>
              <div className="logo-text">
                <span className="logo-title">ProV9 Neural</span>
                <span className="logo-subtitle">by Animmoov</span>
              </div>
            </Link>
            
            <nav className="nav">
              <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>About</NavLink>
              <NavLink to="/solutions" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Solutions</NavLink>
              <NavLink to="/blog" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>Blog</NavLink>
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
                      <BrainCanvas />
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
              <img src={headerLogo} alt="ProV9 Neural Logo" className="modal-logo-img" />
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
