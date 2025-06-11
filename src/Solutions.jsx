
export default function Solutions() {
  return (
    <div className="solutions-page">
      <div className="container">
        {/* Hero Section */}
        <section className="solutions-hero">
          <h1 className="solutions-title">ProV9 Neural API Solutions</h1>
          <p className="solutions-subtitle">
            Powerful AI endpoints for generating HTML content and image banners
          </p>
        </section>

        {/* API Overview */}
        <section className="api-overview">
          <h2>API Endpoints</h2>
          <div className="endpoints-grid">
            <div className="endpoint-card">
              <div className="endpoint-header">
                <span className="http-method post">POST</span>
                <code className="endpoint-url">/api/v1/generate/html</code>
              </div>
              <h3>HTML Generation</h3>
              <p>Generate semantic, responsive HTML structures based on your requirements.</p>
              
              <div className="code-example">
                <h4>Request Example:</h4>
                <pre><code>{`{
  "prompt": "Create a landing page for a fitness app",
  "style": "modern",
  "framework": "vanilla",
  "responsive": true
}`}</code></pre>
              </div>

              <div className="code-example">
                <h4>Response:</h4>
                <pre><code>{`{
  "status": "success",
  "html": "<div class='hero-section'>...</div>",
  "css": ".hero-section { display: flex; ... }",
  "metadata": {
    "tokens_used": 1250,
    "generation_time": "0.8s"
  }
}`}</code></pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div className="endpoint-header">
                <span className="http-method post">POST</span>
                <code className="endpoint-url">/api/v1/generate/banner</code>
              </div>
              <h3>Banner Generation</h3>
              <p>Create stunning image banners with AI-optimized designs and typography.</p>
              
              <div className="code-example">
                <h4>Request Example:</h4>
                <pre><code>{`{
  "text": "Summer Sale - 50% Off",
  "dimensions": "1200x400",
  "style": "vibrant",
  "brand_colors": ["#FF6B6B", "#4ECDC4"],
  "format": "png"
}`}</code></pre>
              </div>

              <div className="code-example">
                <h4>Response:</h4>
                <pre><code>{`{
  "status": "success",
  "image_url": "https://api.prov9.ai/images/banner_123.png",
  "download_url": "https://api.prov9.ai/download/123",
  "metadata": {
    "size": "1200x400",
    "format": "PNG",
    "file_size": "245KB"
  }
}`}</code></pre>
              </div>
            </div>

            <div className="endpoint-card">
              <div className="endpoint-header">
                <span className="http-method post">POST</span>
                <code className="endpoint-url">/api/v1/optimize</code>
              </div>
              <h3>Content Optimization</h3>
              <p>Analyze and optimize existing content for better performance and engagement.</p>
              
              <div className="code-example">
                <h4>Request Example:</h4>
                <pre><code>{`{
  "content_type": "html",
  "content": "<div>Your existing HTML</div>",
  "optimization_goals": ["seo", "performance", "accessibility"]
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="auth-section">
          <h2>Authentication</h2>
          <div className="auth-info">
            <p>All API requests require authentication using an API key in the request header:</p>
            <div className="code-example">
              <pre><code>{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</code></pre>
            </div>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="limits-section">
          <h2>Rate Limits & Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free Tier</h3>
              <div className="price">$0/month</div>
              <ul>
                <li>100 HTML generations/month</li>
                <li>50 banner generations/month</li>
                <li>Basic optimization</li>
                <li>Community support</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <h3>Pro</h3>
              <div className="price">$29/month</div>
              <ul>
                <li>5,000 HTML generations/month</li>
                <li>2,000 banner generations/month</li>
                <li>Advanced optimization</li>
                <li>Priority support</li>
                <li>Custom branding</li>
              </ul>
              <button className="pricing-btn">Start Trial</button>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul>
                <li>Unlimited generations</li>
                <li>Custom model training</li>
                <li>Dedicated support</li>
                <li>SLA guarantee</li>
                <li>On-premise deployment</li>
              </ul>
              <button className="pricing-btn">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="sdks-section">
          <h2>SDKs & Integration</h2>
          <div className="sdks-grid">
            <div className="sdk-card">
              <h3>JavaScript/Node.js</h3>
              <div className="code-example">
                <pre><code>{`npm install @prov9/neural-api

import { ProV9Client } from '@prov9/neural-api';

const client = new ProV9Client('your-api-key');

const result = await client.generateHTML({
  prompt: 'Modern portfolio website',
  style: 'minimalist'
});`}</code></pre>
              </div>
            </div>

            <div className="sdk-card">
              <h3>Python</h3>
              <div className="code-example">
                <pre><code>{`pip install prov9-neural

from prov9_neural import ProV9Client

client = ProV9Client(api_key='your-api-key')

result = client.generate_banner(
    text='Limited Time Offer',
    style='corporate',
    dimensions='1920x1080'
)`}</code></pre>
              </div>
            </div>

            <div className="sdk-card">
              <h3>cURL</h3>
              <div className="code-example">
                <pre><code>{`curl -X POST https://api.prov9.ai/v1/generate/html \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "E-commerce product page",
    "framework": "react"
  }'`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="use-cases-section">
          <h2>AI Solution Use Cases</h2>
          <div className="use-cases-grid">
            <div className="use-case-card">
              <div className="use-case-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="#4ade80" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Automated Web Development</h3>
              <p>Generate complete web pages from simple descriptions. Perfect for rapid prototyping and MVP development.</p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="#06b6d4" strokeWidth="2"/>
                  <path d="M8 12h8M8 16h8M8 8h8" stroke="#06b6d4" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Dynamic Marketing Materials</h3>
              <p>Create personalized banners and promotional content at scale for different audiences and campaigns.</p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4ade80" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="#4ade80" strokeWidth="2"/>
                </svg>
              </div>
              <h3>A/B Testing Automation</h3>
              <p>Generate multiple variations of content automatically to optimize conversion rates and user engagement.</p>
            </div>

            <div className="use-case-card">
              <div className="use-case-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#06b6d4" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Content Personalization</h3>
              <p>Adapt content in real-time based on user behavior, preferences, and demographic data.</p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="getting-started">
          <h2>Get Started in Minutes</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your free account and get your API key instantly.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Make Your First Call</h3>
              <p>Use our API to generate your first HTML page or banner.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Integrate & Scale</h3>
              <p>Integrate ProV9 Neural into your workflow and scale your content creation.</p>
            </div>
          </div>
          
          <div className="cta-section">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">View Full Documentation</button>
          </div>
        </section>
      </div>
    </div>
  )
}
