import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MyApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      setLoading(true)
      setError('')

      const token = localStorage.getItem('token')

      if (!token) {
        setError('Please login first to view your applications.')
        return
      }

      const response = await fetch(
        'http://localhost:5000/api/applications/my',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Failed to fetch applications'
        )
      }

      setApplications(data.applications || [])
    } catch (error) {
      console.error('Fetch Applications Error:', error)

      setError(
        error.message || 'Unable to load your applications'
      )
    } finally {
      setLoading(false)
    }
  }

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
            <h2>Loading Applications...</h2>

            <p
              style={{
                marginTop: '10px',
                color: '#64748b',
              }}
            >
              Please wait while we fetch your applications.
            </p>
          </div>
        </section>
      </main>
    )
  }

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
            <h2>My Applications</h2>

            <p
              style={{
                marginTop: '15px',
                color: '#dc2626',
              }}
            >
              {error}
            </p>

            <button
              onClick={fetchApplications}
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

  return (
    <main>
      <section className="features-section">
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div className="section-heading">
            <span>APPLICATIONS</span>

            <h2>My Applications</h2>

            <p>
              Track the jobs you have applied for and check
              your application status.
            </p>
          </div>

          {applications.length === 0 ? (
            <div
              style={{
                marginTop: '30px',
                padding: '50px 20px',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                textAlign: 'center',
              }}
            >
              <h3>No Applications Yet</h3>

              <p
                style={{
                  marginTop: '10px',
                  color: '#64748b',
                }}
              >
                You have not applied for any jobs yet.
              </p>

              <Link
                to="/jobs"
                className="signup-btn"
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  textDecoration: 'none',
                }}
              >
                Browse Jobs
              </Link>
            </div>
          ) : (
            <div
              style={{
                marginTop: '30px',
                display: 'grid',
                gap: '20px',
              }}
            >
              {applications.map((application) => (
                <div
                  key={application._id}
                  style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '25px',
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
                      <h3>
                        {application.job?.title ||
                          'Job Title'}
                      </h3>

                      <p
                        style={{
                          marginTop: '8px',
                          color: '#475569',
                          fontWeight: '600',
                        }}
                      >
                        {application.job?.company ||
                          'Company'}
                      </p>

                      <p
                        style={{
                          marginTop: '8px',
                          color: '#64748b',
                        }}
                      >
                        📍 {application.job?.location ||
                          'Location'}
                      </p>
                    </div>

                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '8px 14px',
                          background:
                            application.status ===
                            'Selected'
                              ? '#dcfce7'
                              : application.status ===
                                'Rejected'
                              ? '#fee2e2'
                              : '#dbeafe',
                          color:
                            application.status ===
                            'Selected'
                              ? '#15803d'
                              : application.status ===
                                'Rejected'
                              ? '#b91c1c'
                              : '#1d4ed8',
                          borderRadius: '20px',
                          fontWeight: '700',
                          fontSize: '14px',
                        }}
                      >
                        {application.status || 'Applied'}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '15px',
                      borderTop: '1px solid #e2e8f0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '15px',
                      flexWrap: 'wrap',
                      color: '#64748b',
                    }}
                  >
                    <span>
                      💰 {application.job?.salary ||
                        'Not specified'}
                    </span>

                    <span>
                      💼 {application.job?.jobType ||
                        'Full-time'}
                    </span>

                    <span>
                      📅 Applied:{' '}
                      {application.createdAt
                        ? new Date(
                            application.createdAt
                          ).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default MyApplications

