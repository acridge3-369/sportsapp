import { Link, useLocation } from 'react-router-dom'
import { Home, PlayCircle, PlusCircle, User, Settings as SettingsIcon, Crown } from 'lucide-react'
import './Navbar.css'

function Navbar({ user }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">⚽</div>
          <span className="brand-text">SkillUp Sports</span>
        </Link>

        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/tutorials" className={`nav-link ${isActive('/tutorials') ? 'active' : ''}`}>
            <PlayCircle size={20} />
            <span>Tutorials</span>
          </Link>
          <Link to="/upload" className={`nav-link ${isActive('/upload') ? 'active' : ''}`}>
            <PlusCircle size={20} />
            <span>Upload</span>
          </Link>
          <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link to="/settings" className={`nav-link ${isActive('/settings') ? 'active' : ''}`}>
            <SettingsIcon size={20} />
            <span>Settings</span>
          </Link>
        </div>

        <div className="navbar-user">
          {!user.isSubscribed && (
            <Link to="/settings" className="subscribe-badge">
              <Crown size={16} />
              <span>Upgrade</span>
            </Link>
          )}
          <div className="user-avatar">{user.avatar}</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

