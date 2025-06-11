
export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-title">About ProV9 Neural</h1>
          <p className="about-subtitle">
            Revolutionary AI technology for creating intelligent web content and visual banners
          </p>
        </section>

        {/* Main Content */}
        <section className="about-content">
          <div className="content-grid">
            <div className="content-section">
              <h2>What is ProV9 Neural?</h2>
              <p>
                ProV9 Neural is a cutting-edge artificial intelligence model specifically designed 
                and fine-tuned for generating high-quality web HTML content and stunning image banners. 
                Our advanced neural network combines the power of natural language processing with 
                visual design intelligence to create compelling digital experiences.
              </p>
            </div>

            <div className="content-section">
              <h2>Core Capabilities</h2>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="capability-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4ade80" strokeWidth="2"/>
                      <polyline points="14,2 14,8 20,8" stroke="#4ade80" strokeWidth="2"/>
                      <line x1="16" y1="13" x2="8" y2="13" stroke="#4ade80" strokeWidth="2"/>
                      <line x1="16" y1="17" x2="8" y2="17" stroke="#4ade80" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>HTML Generation</h3>
                  <p>Creates semantic, responsive HTML structures with modern web standards and accessibility features.</p>
                </div>

                <div className="capability-card">
                  <div className="capability-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#06b6d4" strokeWidth="2"/>
                      <circle cx="9" cy="9" r="2" stroke="#06b6d4" strokeWidth="2"/>
                      <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="#06b6d4" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Banner Design</h3>
                  <p>Generates eye-catching image banners with optimal typography, color schemes, and composition.</p>
                </div>

                <div className="capability-card">
                  <div className="capability-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#4ade80" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>AI Optimization</h3>
                  <p>Continuously learns and adapts to create more effective content based on performance metrics.</p>
                </div>

                <div className="capability-card">
                  <div className="capability-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#06b6d4" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="#06b6d4" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#06b6d4" strokeWidth="2"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#06b6d4" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3>Personalization</h3>
                  <p>Tailors content and designs to specific audiences, industries, and brand requirements.</p>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Technical Architecture</h2>
              <p>
                Built on a transformer-based architecture with specialized training on millions of web designs 
                and banner advertisements, ProV9 Neural understands both the technical requirements of web 
                development and the aesthetic principles of effective visual communication.
              </p>
              
              <div className="tech-features">
                <div className="tech-feature">
                  <span className="feature-label">Training Data:</span>
                  <span>10M+ web pages and banner designs</span>
                </div>
                <div className="tech-feature">
                  <span className="feature-label">Model Size:</span>
                  <span>175B parameters optimized for creative tasks</span>
                </div>
                <div className="tech-feature">
                  <span className="feature-label">Response Time:</span>
                  <span>Sub-second generation for most requests</span>
                </div>
                <div className="tech-feature">
                  <span className="feature-label">Accuracy:</span>
                  <span>98% code validity with modern web standards</span>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Use Cases</h2>
              <div className="use-cases">
                <div className="use-case">
                  <h4>Marketing Agencies</h4>
                  <p>Rapidly prototype and generate campaign materials for multiple clients with consistent quality.</p>
                </div>
                <div className="use-case">
                  <h4>E-commerce Platforms</h4>
                  <p>Create product page layouts and promotional banners that drive conversions.</p>
                </div>
                <div className="use-case">
                  <h4>Content Creators</h4>
                  <p>Generate professional-looking web content without extensive design or coding knowledge.</p>
                </div>
                <div className="use-case">
                  <h4>Developers</h4>
                  <p>Accelerate prototyping and generate boilerplate code with intelligent suggestions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Experience ProV9 Neural?</h2>
          <p>Join thousands of creators already using our AI to build better web experiences.</p>
          <div className="cta-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">View Documentation</button>
          </div>
        </section>
      </div>
    </div>
  )
}
