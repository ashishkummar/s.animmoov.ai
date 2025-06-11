
export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Generated Web Content",
      date: "December 15, 2024",
      author: "ProV9 Team",
      excerpt: "Exploring how artificial intelligence is revolutionizing web development and content creation in 2024.",
      readTime: "5 min read",
      category: "AI Technology"
    },
    {
      id: 2,
      title: "Best Practices for AI-Generated HTML",
      date: "December 10, 2024",
      author: "Sarah Chen",
      excerpt: "Learn how to optimize and customize HTML output from AI models for production-ready websites.",
      readTime: "8 min read",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Creating Effective Banner Designs with AI",
      date: "December 5, 2024",
      author: "Mike Rodriguez",
      excerpt: "Discover the secrets behind creating compelling marketing banners using AI-powered design tools.",
      readTime: "6 min read",
      category: "Design"
    },
    {
      id: 4,
      title: "ProV9 Neural vs Traditional Web Development",
      date: "November 28, 2024",
      author: "Alex Thompson",
      excerpt: "A comprehensive comparison of AI-assisted development versus traditional coding methods.",
      readTime: "10 min read",
      category: "Industry Analysis"
    },
    {
      id: 5,
      title: "Integrating AI into Your Marketing Workflow",
      date: "November 20, 2024",
      author: "Emma Wilson",
      excerpt: "Step-by-step guide to incorporating AI-generated content into your existing marketing processes.",
      readTime: "7 min read",
      category: "Marketing"
    },
    {
      id: 6,
      title: "The Science Behind Neural Network Content Generation",
      date: "November 15, 2024",
      author: "Dr. James Liu",
      excerpt: "Deep dive into the technical aspects of how neural networks generate human-like content.",
      readTime: "12 min read",
      category: "Technical"
    }
  ];

  const categories = ["All", "AI Technology", "Web Development", "Design", "Marketing", "Industry Analysis", "Technical"];

  return (
    <div className="blog-page">
      <div className="container">
        {/* Hero Section */}
        <section className="blog-hero">
          <h1 className="blog-title">ProV9 Neural Blog</h1>
          <p className="blog-subtitle">
            Insights, tutorials, and updates from the world of AI-powered web development
          </p>
        </section>

        {/* Categories Filter */}
        <section className="categories-section">
          <div className="categories-filter">
            {categories.map((category) => (
              <button key={category} className="category-btn">
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="featured-post">
          <div className="featured-card">
            <div className="featured-content">
              <span className="featured-badge">Featured</span>
              <h2>The Future of AI-Generated Web Content</h2>
              <p>
                As artificial intelligence continues to evolve, we're witnessing a fundamental shift 
                in how web content is created. ProV9 Neural represents the next generation of AI 
                models specifically designed for web development and creative content generation.
              </p>
              <div className="post-meta">
                <span>December 15, 2024</span>
                <span>•</span>
                <span>5 min read</span>
                <span>•</span>
                <span>AI Technology</span>
              </div>
              <button className="read-more-btn">Read Full Article</button>
            </div>
            <div className="featured-image">
              <div className="placeholder-image">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M2 17L12 22L22 17" stroke="#4ade80" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="#4ade80" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="blog-posts">
          <h2>Latest Articles</h2>
          <div className="posts-grid">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <div className="placeholder-image">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#06b6d4" strokeWidth="2"/>
                      <circle cx="9" cy="9" r="2" stroke="#06b6d4" strokeWidth="2"/>
                      <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" stroke="#06b6d4" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <div className="post-content">
                  <span className="post-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <h2>Stay Updated</h2>
            <p>Get the latest insights on AI-powered web development delivered to your inbox.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
