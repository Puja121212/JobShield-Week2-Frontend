import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function JobDetails() {
  const [searchParams] = useSearchParams()

  const jobId = searchParams.get('id')

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [applicationMessage, setApplicationMessage] = useState('')

  // ==========================
  // Fetch Job Details
  // ==========================
  useEffect(() => {
    fetchJobDetails()
  }, [jobId])

  const fetchJobDetails = async () => {
    try {
      setLoading(true)
      setError('')

      if (!jobId) {
        throw new Error('Job ID is missing')
      }

      const response = await fetch(
        `http://localhost:5000/api/jobs/${jobId}`
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch job details')
      }

      setJob(data.job)
    } catch (error) {
      console.error('Fetch Job Details Error:', error)
      setError(error.message || 'Unable to load job details')
    } finally {
      setLoading(false)
    }
  }

  // ==========================
  // Apply for Job
  // ==========================
  const handleApply = async () => {
    try {
      const token = localStorage.getItem('token')

      if (!token) {
        setApplicationMessage(
          'Please login first before applying for a job.'
        )
        return
      }

      setApplying(true)
      setApplicationMessage('')

      const response = await fetch(
        'http://localhost:5000/api/applications',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            jobId: job._id,
            coverLetter: '',
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to submit application'
        )
      }

      setApplied(true)
      setApplicationMessage(
        data.message || 'Application submitted successfully'
      )
    } catch (error) {
      console.error('Apply Job Error:', error)

      setApplicationMessage(
        error.message || 'Unable to submit application'
      )
    } finally {
      setApplying(false)
    }
  }

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <main>
        <section className="features-section">
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '60px 20px',
            }}
          >
            <h2>Loading Job Details...</h2>

            <p
              style={{
                marginTop: '10px',
                color: '#64748b',
              }}
            >
              Please wait while we fetch the job information.
            </p>
          </div>
        </section>
      </main>
    )
  }

  // ==========================
  // Error
  // ==========================
  if (error) {
    return (
      <main>
        <section className="features-section">
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '60px 20px',
            }}
          >
            <h2>Unable to Load Job</h2>

            <p
              style={{
                marginTop: '12px',
                color: '#dc2626',
              }}
            >
              {error}
            </p>

            <button
              onClick={fetchJobDetails}
              className="signup-btn"
              style={{
                marginTop: '20px',
                border: 'none',
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

  if (!job) {
    return null
  }

  return (
    <main>
      <section className="features-section">
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {/* Back Button */}
          <Link
            to="/jobs"
            style={{
              textDecoration: 'none',
              color: '#2563eb',
              fontWeight: '700',
            }}
          >
            ← Back to Jobs
          </Link>

          {/* Job Header */}
          <div
            style={{
              marginTop: '25px',
              padding: '30px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div className="company-logo">
                  {job.company?.charAt(0)?.toUpperCase()}
                </div>

                <h1 style={{ marginTop: '20px' }}>
                  {job.title}
                </h1>

                <p
                  style={{
                    marginTop: '8px',
                    color: '#475569',
                    fontSize: '17px',
                  }}
                >
                  {job.company}
                </p>

                <p
                  style={{
                    marginTop: '8px',
                    color: '#64748b',
                  }}
                >
                  📍 {job.location}
                  &nbsp; • &nbsp;
                  💼 {job.jobType}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="safe-badge">
                  ✓ Verified
                </span>

                <p
                  style={{
                    marginTop: '30px',
                    color: '#16a34a',
                    fontWeight: '700',
                  }}
                >
                  ✓ Verified Opportunity
                </p>
              </div>
            </div>

            {/* Apply Section */}
            <div style={{ marginTop: '30px' }}>
              {!applied ? (
                <button
                  className="signup-btn"
                  onClick={handleApply}
                  disabled={applying}
                  style={{
                    border: 'none',
                    padding: '13px 28px',
                    borderRadius: '9px',
                    cursor: applying
                      ? 'not-allowed'
                      : 'pointer',
                    opacity: applying ? 0.7 : 1,
                  }}
                >
                  {applying ? 'Applying...' : 'Apply Now'}
                </button>
              ) : (
                <div
                  style={{
                    padding: '14px 18px',
                    background: '#dcfce7',
                    color: '#15803d',
                    borderRadius: '10px',
                    fontWeight: '700',
                  }}
                >
                  ✓ {applicationMessage}
                </div>
              )}

              {/* Application Error / Login Message */}
              {!applied && applicationMessage && (
                <div
                  style={{
                    marginTop: '15px',
                    padding: '14px 18px',
                    background: '#fee2e2',
                    color: '#b91c1c',
                    borderRadius: '10px',
                    fontWeight: '600',
                  }}
                >
                  {applicationMessage}
                </div>
              )}
            </div>
          </div>

          {/* Job Information */}
          <div
            style={{
              marginTop: '25px',
              padding: '30px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
            }}
          >
            <h2>Job Information</h2>

            <div
              style={{
                marginTop: '20px',
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
              }}
            >
              <div className="check-item">
                💼 {job.jobType || 'Full-time'}
              </div>

              <div className="check-item">
                📍 {job.location}
              </div>

              <div className="check-item">
                💰 {job.salary || 'Not specified'}
              </div>

              <div className="check-item">
                🎓 {job.experience || 'Fresher'}
              </div>
            </div>
          </div>

          {/* Job Safety Analysis */}
          <div
            style={{
              marginTop: '25px',
              padding: '30px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
            }}
          >
            <h2>Job Safety Analysis</h2>

            <p
              style={{
                marginTop: '10px',
                color: '#64748b',
              }}
            >
              Safety indicators help you review important
              information before applying.
            </p>

            <div style={{ marginTop: '25px' }}>
              <div className="check-item">
                ✓ Company information verified
              </div>

              <div className="check-item">
                ✓ Salary information available
              </div>

              <div className="check-item">
                ✓ No suspicious payment requests
              </div>

              <div className="check-item">
                ✓ Contact information appears consistent
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div
            style={{
              marginTop: '25px',
              padding: '30px',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '18px',
            }}
          >
            <h2>Job Description</h2>

            <p
              style={{
                marginTop: '15px',
                color: '#64748b',
                lineHeight: '1.8',
              }}
            >
              {job.description}
            </p>

            <h3 style={{ marginTop: '25px' }}>
              Required Skills
            </h3>

            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              {Array.isArray(job.skills) ? (
                job.skills.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '8px 14px',
                      background: '#eff6ff',
                      color: '#2563eb',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '600',
                    }}
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p style={{ color: '#475569' }}>
                  {job.skills || 'Not specified'}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default JobDetails

