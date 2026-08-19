function Dashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-section">

        {/* Dashboard Header */}
        <div className="dashboard-header">
          <span className="dashboard-label">
            YOUR ACTIVITY
          </span>

          <h1>My Dashboard</h1>

          <p>
            Track your saved jobs, applications, and job safety checks.
          </p>
        </div>


        {/* Dashboard Stats */}
        <div className="dashboard-stats">

          {/* Saved Jobs */}
          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              💼
            </div>

            <div>
              <span>Saved Jobs</span>

              <strong>4</strong>

              <p>
                Jobs you saved for later
              </p>
            </div>

          </div>


          {/* Applications */}
          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              📄
            </div>

            <div>
              <span>Applications</span>

              <strong>3</strong>

              <p>
                Applications submitted
              </p>
            </div>

          </div>


          {/* Safety Checks */}
          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              🛡️
            </div>

            <div>
              <span>Safety Checks</span>

              <strong>8</strong>

              <p>
                Jobs checked by AI
              </p>
            </div>

          </div>

        </div>


        {/* Recent Activity */}
        <div className="activity-card">

          <div className="activity-header">

            <div>
              <span className="dashboard-label">
                RECENT ACTIVITY
              </span>

              <h2>Recent Activity</h2>
            </div>

            <span className="activity-count">
              3 activities
            </span>

          </div>


          <div className="activity-list">

            {/* Activity 1 */}
            <div className="activity-item">

              <div className="activity-icon success">
                ✓
              </div>

              <div className="activity-content">

                <h3>
                  Frontend Developer
                </h3>

                <p>
                  Safety check completed
                </p>

              </div>

              <span className="activity-status safe">
                Safe
              </span>

            </div>


            {/* Activity 2 */}
            <div className="activity-item">

              <div className="activity-icon saved">
                🔖
              </div>

              <div className="activity-content">

                <h3>
                  MERN Stack Developer
                </h3>

                <p>
                  Job saved
                </p>

              </div>

              <span className="activity-status saved-status">
                Saved
              </span>

            </div>


            {/* Activity 3 */}
            <div className="activity-item">

              <div className="activity-icon applied">
                ✓
              </div>

              <div className="activity-content">

                <h3>
                  Junior Software Developer
                </h3>

                <p>
                  Application submitted
                </p>

              </div>

              <span className="activity-status applied-status">
                Applied
              </span>

            </div>

          </div>

        </div>

      </section>
    </main>
  )
}

export default Dashboard