import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

function JobDetails() {
  const [searchParams] = useSearchParams()
  const [applied, setApplied] = useState(false)

  const jobId = Number(searchParams.get('id'))

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova Solutions',
      location: 'Remote',
      type: 'Full-time',
      safety: '92%',
      description:
        'Build responsive and user-friendly web interfaces using modern frontend technologies.',
      skills: 'React.js • JavaScript • HTML5 • CSS3 • Git • REST APIs',
    },
    {
      id: 2,
      title: 'MERN Stack Developer',
      company: 'Alpha Digital Labs',
      location: 'Bangalore',
      type: 'Full-time',
      safety: '96%',
      description:
        'Develop full-stack web applications using MongoDB, Express, React and Node.js.',
      skills: 'MongoDB • Express.js • React.js • Node.js • JavaScript • Git',
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'NextGen Technologies',
      location: 'Remote',
      type: 'Internship',
      safety: '89%',
      description:
        'Work with the development team to build, test and improve web applications.',
      skills: 'JavaScript • React • HTML • CSS • Git • REST APIs',
    },
  ]

  const job = jobs.find((item) => item.id === jobId) || jobs[0]

  const handleApply = () => {
    setApplied(true)
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
          {/* Back to Jobs */}
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
                  {job.company.charAt(0)}
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
                  📍 {job.location} &nbsp; • &nbsp; 💼 {job.type}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="safe-badge">
                  {job.safety} Safe
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

            {/* Apply */}
            <div style={{ marginTop: '30px' }}>
              {!applied ? (
                <button
                  className="signup-btn"
                  onClick={handleApply}
                  style={{
                    border: 'none',
                    padding: '13px 28px',
                    borderRadius: '9px',
                  }}
                >
                  Apply Now
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
                  ✓ Application submitted successfully!
                </div>
              )}
            </div>
          </div>

          {/* Safety Analysis */}
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
              Safety indicators help you review important information
              before applying.
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

          {/* Description */}
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

            <p
              style={{
                marginTop: '12px',
                color: '#475569',
                lineHeight: '1.8',
              }}
            >
              {job.skills}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default JobDetails