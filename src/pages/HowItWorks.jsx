function HowItWorks() {
  return (
    <main>
      <section className="features-section">
        <div className="section-heading">
          <span>HOW JOBSHIELD WORKS</span>

          <h2>Find jobs. Check safety. Apply with confidence.</h2>

          <p>
            JobShield helps job seekers identify potentially fraudulent
            opportunities before they apply.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🔎</div>

            <h3>1. Search for Jobs</h3>

            <p>
              Search for job opportunities using job titles, skills,
              companies, and locations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>

            <h3>2. Check Job Safety</h3>

            <p>
              JobShield analyzes important job information and highlights
              possible scam indicators.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>3. Apply Safely</h3>

            <p>
              Review the safety information and make a more informed
              decision before applying.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div>
          <strong>10K+</strong>
          <span>Jobs Analyzed</span>
        </div>

        <div>
          <strong>95%</strong>
          <span>Detection Accuracy</span>
        </div>

        <div>
          <strong>5K+</strong>
          <span>Users Protected</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Safety Support</span>
        </div>
      </section>
    </main>
  )
}

export default HowItWorks