import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, MessageCircle, Heart, Share2, Shield, Crown } from 'lucide-react'
import './Home.css'

function Home({ user }) {
  const [posts] = useState([
    {
      id: 1,
      user: { name: 'Sarah M.', username: '@sarahm', avatar: '👧' },
      sport: 'Basketball',
      skill: 'Free Throw Technique',
      videoUrl: '/Recording 2025-11-24 105234.mp4',
      isVideo: true,
      likes: 42,
      comments: 8,
      hasFeedback: true,
      coach: 'Coach Williams',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      user: { name: 'Mike T.', username: '@miket', avatar: '👦' },
      sport: 'Soccer',
      skill: 'Penalty Kick',
      videoUrl: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Soccer+Practice',
      likes: 67,
      comments: 12,
      hasFeedback: false,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      user: { name: 'Emma L.', username: '@emmal', avatar: '👧' },
      sport: 'Tennis',
      skill: 'Forehand Swing',
      videoUrl: 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Tennis+Practice',
      likes: 89,
      comments: 15,
      hasFeedback: true,
      coach: 'Coach Martinez',
      timestamp: '1 day ago'
    }
  ])

  return (
    <div className="home">
      <div className="app-title">
        <h1>Playbook</h1>
      </div>
      <div className="home-header">
        <h2>Your Feed</h2>
        <p>Watch and learn from other athletes</p>
      </div>

      {!user.isSubscribed && (
        <div className="upgrade-banner">
          <Crown size={20} />
          <div>
            <strong>Unlock Premium Features</strong>
            <p>Access tutorials and get coach feedback</p>
          </div>
          <Link to="/settings" className="upgrade-btn">Upgrade</Link>
        </div>
      )}

      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-user">
                <div className="post-avatar">{post.user.avatar}</div>
                <div>
                  <div className="post-name">{post.user.name}</div>
                  <div className="post-username">{post.user.username}</div>
                </div>
              </div>
              <div className="post-sport-badge">{post.sport}</div>
            </div>

            <div className="post-content">
              <div className="post-video">
                {post.isVideo ? (
                  <video 
                    src={post.videoUrl} 
                    controls 
                    className="video-player"
                    poster="https://via.placeholder.com/600x400/2563eb/ffffff?text=Free+Throw+Practice"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <>
                    <img src={post.videoUrl} alt={post.skill} />
                    <div className="play-overlay">
                      <Play size={48} fill="white" />
                    </div>
                  </>
                )}
              </div>
              <div className="post-info">
                <h3>{post.skill}</h3>
                <span className="post-time">{post.timestamp}</span>
              </div>
            </div>

            {post.hasFeedback && user.isSubscribed && (
              <Link to={`/feedback/${post.id}`} className="coach-feedback-badge">
                <Shield size={24} />
                <div className="feedback-content">
                  <strong>Coach Feedback Available</strong>
                  <span>From {post.coach}</span>
                </div>
                <span className="view-arrow">View →</span>
              </Link>
            )}

            {post.hasFeedback && !user.isSubscribed && (
              <Link to="/settings?tab=subscription" className="coach-feedback-locked">
                <Crown size={24} />
                <div className="locked-content">
                  <strong>Premium Coach Feedback Available</strong>
                  <span>Get expert analysis from certified coaches</span>
                </div>
                <span className="upgrade-arrow">→</span>
              </Link>
            )}

            <div className="post-actions">
              <button className="action-btn">
                <Heart size={20} />
                <span>{post.likes}</span>
              </button>
              <button className="action-btn">
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </button>
              <button className="action-btn">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {!user.isSubscribed && (
        <Link to="/settings?tab=subscription" className="floating-premium-btn">
          <Crown size={20} />
          <span>Go Premium</span>
        </Link>
      )}
    </div>
  )
}

export default Home

