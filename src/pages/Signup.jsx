import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const { name, email, password, confirmPassword } = formData

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    // Check password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Check password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    try {
      setLoading(true)

      const response = await fetch(
        'http://localhost:5000/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      )

      // Get response as text first
      const responseText = await response.text()

      let data = {}

      // Try to convert response into JSON
      try {
        data = JSON.parse(responseText)
      } catch {
        throw new Error(
          'Server returned an invalid response. Please make sure the backend is running on port 5000.'
        )
      }

      if (!response.ok) {
        throw new Error(
          data.message || 'Registration failed.'
        )
      }

      alert('Registration successful!')

      navigate('/login')
    } catch (error) {
      console.error('Signup Error:', error)
      setError(error.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">
          <span className="logo-icon">🛡️</span>
          <h1>JobShield</h1>
        </div>

        <h2>Create Your Account</h2>

        <p className="auth-subtitle">
          Create an account and find jobs safely.
        </p>

        {/* Error */}
        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading
              ? 'Creating Account...'
              : 'Create Account'}
          </button>

        </form>

        {/* Login Link */}
        <p className="auth-switch">
          Already have an account?{' '}
          <Link to="/login">
            Log In
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup

