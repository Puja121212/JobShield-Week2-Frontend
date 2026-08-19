import { Link } from 'react-router-dom'

function Jobs() {
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
    },
  ]

  return (
    <main>
      <section className="jobs-section">
        <div className="section-heading">
          <span>JOB OPPORTUNITIES</span>

          <h2>Find Safe Jobs</h2>

          <p>
            Explore verified job opportunities and check their safety scores
            before applying.
          </p>
        </div>

        <div className="job-grid">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="company-logo">
                {job.company.charAt(0)}
              </div>

              <div>
                <h3>{job.title}</h3>

                <p>{job.company}</p>

                <small>
                  {job.location} • {job.type}
                </small>

                <p style={{ marginTop: '12px' }}>
                  {job.description}
                </p>

                <Link
                  to={`/job-details?id=${job.id}`}
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
                {job.safety} Safe
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Jobs