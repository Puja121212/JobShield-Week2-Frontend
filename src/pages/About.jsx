function About() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">🛡️ ABOUT JOBSHIELD</span>

          <h1>
            Helping job seekers
            <span>search more safely.</span>
          </h1>

          <p>
            JobShield is a front-end web application concept designed to
            help job seekers identify potentially suspicious job postings
            and make safer decisions during their job search.
          </p>

          <p>
            Our platform combines job discovery with safety-focused
            information such as verification status, safety scores and
            scam-warning indicators.
          </p>
        </div>

        <div className="hero-card">
          <div className="shield">🛡️</div>

          <h3>Our Mission</h3>

          <p>
            Make online job searching more transparent, informed and
            safety-conscious.
          </p>

          <div className="check-item">
            ✓ Safer job discovery
          </div>

          <div className="check-item">
            ✓ Scam awareness
          </div>

          <div className="check-item">
            ✓ Better-informed applications
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>WHAT WE FOCUS ON</span>

          <h2>Built around job seeker safety</h2>

          <p>
            The platform focuses on three important areas.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>

            <h3>Transparency</h3>

            <p>
              Present useful job information clearly so users can evaluate
              opportunities before applying.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>

            <h3>Safety</h3>

            <p>
              Highlight suspicious patterns and provide safety indicators
              that can help users recognize potential scams.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>

            <h3>Awareness</h3>

            <p>
              Help job seekers become more aware of common warning signs
              associated with fraudulent job postings.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About