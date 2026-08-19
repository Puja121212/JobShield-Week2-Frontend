import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="badge">🛡️ AI-POWERED JOB SAFETY</span>

          <h1>
            Find Your Next Job.
            <span>Stay Safe While You Do.</span>
          </h1>

          <p>
            Discover verified job opportunities and use AI-powered scam
            detection to protect yourself from fraudulent job postings.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search jobs, skills, or companies..."
            />

            <input
              type="text"
              placeholder="Location"
            />

            <Link
              to="/jobs"
              className="signup-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
            >
              Search Jobs
            </Link>
          </div>

          <div className="trust-row">
            <span>✓ Verified job listings</span>
            <span>✓ AI scam detection</span>
            <span>✓ Safe job search</span>
          </div>
        </div>

        {/* Safety Card */}
        <div className="hero-card">
          <div className="shield">🛡️</div>

          <h3>Job Safety Score</h3>

          <div className="score">
            92<span>/100</span>
          </div>

          <p>
            High confidence — This job appears safe.
          </p>

          <div className="check-item">
            ✓ Company verified
          </div>

          <div className="check-item">
            ✓ Salary information checked
          </div>

          <div className="check-item">
            ✓ No suspicious requests
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div>
          <strong>10K+</strong>
          <span>Jobs Analyzed</span>
        </div>

        <div>
          <strong>95%</strong>
          <span>Scam Detection Accuracy</span>
        </div>

        <div>
          <strong>5K+</strong>
          <span>Job Seekers Protected</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>AI Protection</span>
        </div>
      </section>

      {/* Features */}
      <section className="features-section" id="how-it-works">
        <div className="section-heading">
          <span>WHY JOBSHIELD?</span>

          <h2>Search smarter. Apply safer.</h2>

          <p>
            Everything you need to find genuine opportunities and avoid
            fraudulent job postings.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>

            <h3>AI Scam Detection</h3>

            <p>
              Analyze job postings and identify suspicious patterns before
              you apply.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>Verified Jobs</h3>

            <p>
              Find opportunities from trusted companies and verified sources.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>

            <h3>Safety Alerts</h3>

            <p>
              Get warnings when a job contains potential scam indicators.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="jobs-section">
        <div className="section-heading">
          <span>FEATURED OPPORTUNITIES</span>

          <h2>Explore safer job opportunities</h2>

          <p>
            Start your job search with opportunities that have been checked
            for common scam indicators.
          </p>
        </div>

        <div className="job-grid">
          <div className="job-card">
            <div className="company-logo">T</div>

            <div>
              <h3>Frontend Developer</h3>
              <p>TechNova Solutions</p>
              <small>Remote • Full-time</small>
            </div>

            <span className="safe-badge">92% Safe</span>
          </div>

          <div className="job-card">
            <div className="company-logo">A</div>

            <div>
              <h3>MERN Stack Developer</h3>
              <p>Alpha Digital Labs</p>
              <small>Bangalore • Full-time</small>
            </div>

            <span className="safe-badge">96% Safe</span>
          </div>

          <div className="job-card">
            <div className="company-logo">N</div>

            <div>
              <h3>Junior Software Developer</h3>
              <p>NextGen Technologies</p>
              <small>Remote • Internship</small>
            </div>

            <span className="safe-badge">89% Safe</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <Link
            to="/jobs"
            className="signup-btn"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            View All Jobs
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home