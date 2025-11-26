import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Crown, Shield, Lock, Bell, User, CreditCard, Check } from 'lucide-react'
import './Settings.css'

function Settings({ user, setUser }) {
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('subscription')

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab) {
      setActiveTab(tab)
    }
  }, [searchParams])
  const [parentalControls, setParentalControls] = useState({
    contentFiltering: true,
    timeLimits: false,
    friendRequests: true,
    directMessages: false
  })

  const handleSubscribe = () => {
    setUser({ ...user, isSubscribed: true })
    alert('Subscription activated! You now have access to all premium features.')
  }

  const handleUnsubscribe = () => {
    setUser({ ...user, isSubscribed: false })
    alert('Subscription cancelled. You can resubscribe anytime.')
  }

  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account and preferences</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <button
            className={`sidebar-item ${activeTab === 'subscription' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscription')}
          >
            <Crown size={18} />
            <span>Subscription</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'parental' ? 'active' : ''}`}
            onClick={() => setActiveTab('parental')}
          >
            <Shield size={18} />
            <span>Parental Controls</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => setActiveTab('privacy')}
          >
            <Lock size={18} />
            <span>Privacy & Safety</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>
          <button
            className={`sidebar-item ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            <User size={18} />
            <span>Account</span>
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'subscription' && (
            <div className="settings-section">
              <h2>Subscription</h2>
              {user.isSubscribed ? (
                <div className="subscription-active">
                  <div className="subscription-header">
                    <Crown size={32} color="var(--accent)" />
                    <div>
                      <h3>Premium Active</h3>
                      <p>You have access to all premium features</p>
                    </div>
                  </div>
                  <div className="premium-features">
                    <div className="feature-item">
                      <Check size={20} color="var(--success)" />
                      <span>Access to all tutorials</span>
                    </div>
                    <div className="feature-item">
                      <Check size={20} color="var(--success)" />
                      <span>Coach feedback on your posts</span>
                    </div>
                    <div className="feature-item">
                      <Check size={20} color="var(--success)" />
                      <span>Priority support</span>
                    </div>
                    <div className="feature-item">
                      <Check size={20} color="var(--success)" />
                      <span>No ads</span>
                    </div>
                  </div>
                  <button className="cancel-subscription-btn" onClick={handleUnsubscribe}>
                    Cancel Subscription
                  </button>
                </div>
              ) : (
                <div className="subscription-upgrade">
                  <div className="upgrade-card">
                    <Crown size={48} color="var(--accent)" />
                    <h3>Upgrade to Premium</h3>
                    <p className="price">$9.99<span>/month</span></p>
                    <div className="premium-features">
                      <div className="feature-item">
                        <Check size={20} color="var(--success)" />
                        <span>Unlimited access to tutorials</span>
                      </div>
                      <div className="feature-item">
                        <Check size={20} color="var(--success)" />
                        <span>Get feedback from certified coaches</span>
                      </div>
                      <div className="feature-item">
                        <Check size={20} color="var(--success)" />
                        <span>Priority support</span>
                      </div>
                      <div className="feature-item">
                        <Check size={20} color="var(--success)" />
                        <span>Ad-free experience</span>
                      </div>
                    </div>
                    <button className="subscribe-btn" onClick={handleSubscribe}>
                      <CreditCard size={18} />
                      Subscribe Now
                    </button>
                    <p className="subscription-note">
                      Cancel anytime. No commitment required.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'parental' && (
            <div className="settings-section">
              <h2>Parental Controls</h2>
              <p className="section-description">
                Manage safety settings for your child's account
              </p>
              <div className="controls-list">
                <div className="control-item">
                  <div>
                    <h4>Content Filtering</h4>
                    <p>Automatically filter inappropriate content</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={parentalControls.contentFiltering}
                      onChange={(e) =>
                        setParentalControls({
                          ...parentalControls,
                          contentFiltering: e.target.checked
                        })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="control-item">
                  <div>
                    <h4>Time Limits</h4>
                    <p>Set daily usage limits</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={parentalControls.timeLimits}
                      onChange={(e) =>
                        setParentalControls({
                          ...parentalControls,
                          timeLimits: e.target.checked
                        })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="control-item">
                  <div>
                    <h4>Friend Requests</h4>
                    <p>Require approval for friend requests</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={parentalControls.friendRequests}
                      onChange={(e) =>
                        setParentalControls({
                          ...parentalControls,
                          friendRequests: e.target.checked
                        })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="control-item">
                  <div>
                    <h4>Direct Messages</h4>
                    <p>Allow direct messaging from other users</p>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={parentalControls.directMessages}
                      onChange={(e) =>
                        setParentalControls({
                          ...parentalControls,
                          directMessages: e.target.checked
                        })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="settings-section">
              <h2>Privacy & Safety</h2>
              <div className="info-box">
                <Shield size={24} color="var(--primary)" />
                <div>
                  <h4>Content Moderation</h4>
                  <p>
                    All content on ClipCoach is heavily moderated to ensure a safe
                    environment for children. Our team reviews all posts, comments, and
                    interactions to maintain sports-related content only.
                  </p>
                </div>
              </div>
              <div className="info-box">
                <Lock size={24} color="var(--primary)" />
                <div>
                  <h4>Data Protection</h4>
                  <p>
                    We take your privacy seriously. All user data is encrypted and stored
                    securely. We never share personal information with third parties.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notifications</h2>
              <p className="section-description">Manage how you receive updates</p>
              <div className="controls-list">
                <div className="control-item">
                  <div>
                    <h4>New Comments</h4>
                    <p>Get notified when someone comments on your posts</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="control-item">
                  <div>
                    <h4>Coach Feedback</h4>
                    <p>Notifications when coaches provide feedback</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="control-item">
                  <div>
                    <h4>New Tutorials</h4>
                    <p>Updates about new tutorial releases</p>
                  </div>
                  <label className="toggle">
                    <input type="checkbox" defaultChecked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div className="settings-section">
              <h2>Account</h2>
              <div className="account-info">
                <div className="info-row">
                  <span className="info-label">Name</span>
                  <span className="info-value">{user.name}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Username</span>
                  <span className="info-value">{user.username}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Age</span>
                  <span className="info-value">{user.age} years old</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Account Type</span>
                  <span className="info-value">
                    {user.isSubscribed ? 'Premium' : 'Free'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings

