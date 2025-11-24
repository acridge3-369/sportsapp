import { useParams } from 'react-router-dom'
import { Shield, Star, CheckCircle, AlertCircle, Crown } from 'lucide-react'
import './CoachFeedback.css'

function CoachFeedback({ user }) {
  const { postId } = useParams()

  // Mock feedback data
  const feedback = {
    coach: {
      name: 'Coach Williams',
      title: 'University Basketball Coach',
      avatar: '👨‍🏫',
      rating: 4.9
    },
    post: {
      skill: 'Free Throw Technique',
      sport: 'Basketball'
    },
    feedback: {
      overall: 4,
      strengths: [
        'Good follow-through on your shot',
        'Consistent shooting form',
        'Strong wrist snap'
      ],
      improvements: [
        'Bend your knees more for better power',
        'Keep your elbow aligned with the basket',
        'Practice your breathing rhythm'
      ],
      comments: 'Great improvement from your last video! Your form is getting much better. Focus on the knee bend and you\'ll see your accuracy improve significantly. Keep practicing!',
      timestamp: '2 hours ago'
    }
  }

  if (!user.isSubscribed) {
    return (
      <div className="feedback-locked">
        <div className="locked-content">
          <Crown size={64} />
          <h2>Premium Feature</h2>
          <p>Upgrade to access coach feedback and detailed analysis</p>
          <button className="upgrade-button">Upgrade Now</button>
        </div>
      </div>
    )
  }

  return (
    <div className="coach-feedback">
      <div className="feedback-header">
        <div className="coach-info">
          <div className="coach-avatar">{feedback.coach.avatar}</div>
          <div>
            <h2>{feedback.coach.name}</h2>
            <p>{feedback.coach.title}</p>
            <div className="coach-rating">
              <Star size={16} fill="var(--accent)" color="var(--accent)" />
              <span>{feedback.coach.rating}</span>
            </div>
          </div>
        </div>
        <div className="verified-badge">
          <Shield size={20} />
          <span>Verified Coach</span>
        </div>
      </div>

      <div className="feedback-content">
        <div className="post-context">
          <h3>Feedback for: {feedback.post.skill}</h3>
          <span className="sport-badge">{feedback.post.sport}</span>
        </div>

        <div className="overall-rating">
          <div className="rating-circle">
            <span className="rating-value">{feedback.feedback.overall}</span>
            <span className="rating-out-of">/5</span>
          </div>
          <div>
            <h4>Overall Performance</h4>
            <p>Based on technique, form, and execution</p>
          </div>
        </div>

        <div className="feedback-sections">
          <div className="strengths-section">
            <div className="section-header">
              <CheckCircle size={20} color="var(--success)" />
              <h3>Strengths</h3>
            </div>
            <ul className="feedback-list">
              {feedback.feedback.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className="improvements-section">
            <div className="section-header">
              <AlertCircle size={20} color="var(--warning)" />
              <h3>Areas for Improvement</h3>
            </div>
            <ul className="feedback-list">
              {feedback.feedback.improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="coach-comments">
          <h3>Coach's Comments</h3>
          <p>{feedback.feedback.comments}</p>
        </div>

        <div className="feedback-footer">
          <span className="feedback-time">Feedback provided {feedback.feedback.timestamp}</span>
        </div>
      </div>
    </div>
  )
}

export default CoachFeedback

