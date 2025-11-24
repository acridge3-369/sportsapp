import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Upload from './pages/Upload'
import Profile from './pages/Profile'
import CoachFeedback from './pages/CoachFeedback'
import Settings from './pages/Settings'
import './App.css'

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'Alex Johnson',
    username: '@alexj',
    avatar: '👤',
    isSubscribed: false,
    isParent: false,
    age: 12
  })

  return (
    <Router>
      <div className="app">
        <Navbar user={user} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/tutorials" element={<Tutorials user={user} />} />
            <Route path="/upload" element={<Upload user={user} />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/feedback/:postId" element={<CoachFeedback user={user} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

