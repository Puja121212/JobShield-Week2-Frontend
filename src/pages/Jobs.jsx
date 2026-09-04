import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch('http://localhost:5000/api/jobs')

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch jobs')
      }

      setJobs(data.jobs || [])
    } catch (error) {
      console.error('Fetch Jobs Error:', error)
      setError(error.message || 'Unable to load jobs')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main>
        <section className="jobs-section">
          <div className="section-heading">
            <span>JOB OPPORTUNITIES</span>

            <h2>Find Safe Jobs</h2>

            <p>Loading available jobs...</p>
          </div>
        </section>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <section className="jobs-section">
          <div className="section-heading">
            <span>JOB OPPORTUNITIES</span>

            <h2>Find Safe Jobs</h2>

            <p style={{ color: '#dc2626', marginTop: '15px' }}>
              {error}
            </p>

            <button
              onClick={fetchJobs}
              className="signup-btn"
              style={{
                border: 'none',
                marginTop: '20px',
                padding: '12px 24px',
                cursor: 'pointer',
              }}
            >
              Try Again
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="jobs-section">
        <div className="section-heading">
          <span>JOB OPPORTUNITIES</span>

          <h2>Find Safe Jobs</h2>

          <p>
            Explore verified job opportunities and check their safety
            before applying.
          </p>
        </div>

        {jobs.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '50px 20px',
              background: 'white',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
            }}
          >
            <h3>No jobs available</h3>

            <p
              style={{
                marginTop: '10px',
                color: '#64748b',
              }}
            >
              There are currently no job opportunities available.
            </p>
          </div>
        ) : (
          <div className="job-grid">
            {jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <div className="company-logo">
                  {job.company?.charAt(0)?.toUpperCase()}
                </div>

                <div>
                  <h3>{job.title}</h3>

                  <p>{job.company}</p>

                  <small>
                    {job.location} • {job.jobType}
                  </small>

                  <p
                    style={{
                      marginTop: '12px',
                    }}
                  >
                    {job.description}
                  </p>

                  <Link
                    to={`/job-details?id=${job._id}`}
                    className="signup-btn"
                    style={{
                      display: 'inline-block',
                      marginTop: '15px',
                      textDecoration: 'none',
                    }}
                  >
                    View Details
                  </Link>
                </div>

                <span className="safe-badge">
                  Verified
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Jobs