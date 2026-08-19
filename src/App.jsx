import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Dashboard from './pages/Dashboard'
import JobDetails from './pages/JobDetails'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'

import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="app">

        {/* Navbar */}
        <header className="navbar">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">🛡️</span>
            <span>JobShield</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/jobs">Find Jobs</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/about">About</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="nav-actions desktop-actions">
            <Link to="/dashboard" className="login-btn">
              Log In
            </Link>

            <Link to="/dashboard" className="signup-btn">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="mobile-menu">

              <Link to="/" onClick={closeMenu}>
                Home
              </Link>

              <Link to="/jobs" onClick={closeMenu}>
                Find Jobs
              </Link>

              <Link to="/dashboard" onClick={closeMenu}>
                Dashboard
              </Link>

              <Link to="/how-it-works" onClick={closeMenu}>
                How It Works
              </Link>

              <Link to="/about" onClick={closeMenu}>
                About
              </Link>

              <div className="mobile-menu-actions">
                <Link
                  to="/dashboard"
                  className="login-btn"
                  onClick={closeMenu}
                >
                  Log In
                </Link>

                <Link
                  to="/dashboard"
                  className="signup-btn"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>

            </div>
          )}
        </header>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer id="about">
          <div className="logo">
            <span className="logo-icon">🛡️</span>
            <span>JobShield</span>
          </div>

          <p>Helping job seekers find opportunities safely.</p>
          <p>© 2026 JobShield. All rights reserved.</p>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App