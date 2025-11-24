import { useState } from 'react'
import { Edit, Trophy, Video, Heart, MessageCircle, Crown } from 'lucide-react'
import './Profile.css'

function Profile({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(user.name)
  const [editUsername, setEditUsername] = useState(user.username)

  const stats = {
    posts: 12,
    likes: 234,
    comments: 45,
    achievements: 3
  }

  const recentPosts = [
    { id: 1, skill: 'Free Throw', sport: 'Basketball', likes: 42, comments: 8 },
    { id: 2, skill: 'Layup', sport: 'Basketball', likes: 38, comments: 5 },
    { id: 3, skill: 'Three Pointer', sport: 'Basketball', likes: 56, comments: 12 }
  ]

  const handleSave = () => {
    setUser({
      ...user,
      name: editName,
      username: editUsername
    })
    setIsEditing(false)
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-avatar-large">{user.avatar}</div>
        </div>
        <div className="profile-info">
          <div className="profile-name-section">
            {isEditing ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="edit-input"
                />
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  className="edit-input"
                />
                <div className="edit-actions">
                  <button onClick={handleSave} className="save-btn">Save</button>
                  <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <h1>{user.name}</h1>
                <p className="profile-username">{user.username}</p>
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  <Edit size={16} />
                  Edit Profile
                </button>
              </>
            )}
          </div>
          {!user.isSubscribed && (
            <div className="upgrade-prompt">
              <Crown size={18} />
              <div>
                <strong>Unlock Premium</strong>
                <p>Get access to tutorials and coach feedback</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <Video size={24} />
          <div>
            <div className="stat-value">{stats.posts}</div>
            <div className="stat-label">Posts</div>
          </div>
        </div>
        <div className="stat-card">
          <Heart size={24} />
          <div>
            <div className="stat-value">{stats.likes}</div>
            <div className="stat-label">Likes</div>
          </div>
        </div>
        <div className="stat-card">
          <MessageCircle size={24} />
          <div>
            <div className="stat-value">{stats.comments}</div>
            <div className="stat-label">Comments</div>
          </div>
        </div>
        <div className="stat-card">
          <Trophy size={24} />
          <div>
            <div className="stat-value">{stats.achievements}</div>
            <div className="stat-label">Achievements</div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <h2>Recent Posts</h2>
        <div className="posts-grid">
          {recentPosts.map(post => (
            <div key={post.id} className="post-mini">
              <div className="post-mini-thumbnail">
                <div className="post-mini-placeholder">{post.sport}</div>
              </div>
              <div className="post-mini-info">
                <h4>{post.skill}</h4>
                <div className="post-mini-stats">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile

