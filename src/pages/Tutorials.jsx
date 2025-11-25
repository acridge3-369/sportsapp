import { useState } from 'react'
import { Play, Crown, Lock, Star, Users, X } from 'lucide-react'
import './Tutorials.css'

function Tutorials({ user }) {
  const [selectedSport, setSelectedSport] = useState('All')
  const [playingVideo, setPlayingVideo] = useState(null)

  const sports = ['All', 'Basketball', 'Soccer', 'Tennis', 'Baseball', 'Volleyball']

  const tutorials = [
    {
      id: 1,
      title: 'Perfect Free Throw Form',
      influencer: 'Coach Mike',
      sport: 'Basketball',
      duration: '8:32',
      views: '12.5K',
      rating: 4.9,
      thumbnail: 'https://via.placeholder.com/400x225/2563eb/ffffff?text=Free+Throw+Tutorial',
      isPremium: false
    },
    {
      id: 2,
      title: 'Master the Penalty Kick',
      influencer: 'Pro Player Sarah',
      sport: 'Soccer',
      duration: '12:15',
      views: '18.2K',
      rating: 4.8,
      thumbnail: 'https://via.placeholder.com/400x225/10b981/ffffff?text=Penalty+Kick+Tutorial',
      isPremium: true,
      youtubeId: '-ZhP77I3ftk'
    },
    {
      id: 3,
      title: 'Forehand Power Shot',
      influencer: 'Tennis Pro Emma',
      sport: 'Tennis',
      duration: '10:45',
      views: '9.8K',
      rating: 4.9,
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Forehand+Tutorial',
      isPremium: true
    },
    {
      id: 4,
      title: 'Three-Point Shooting Basics',
      influencer: 'Coach Mike',
      sport: 'Basketball',
      duration: '15:20',
      views: '22.1K',
      rating: 4.7,
      thumbnail: 'https://via.placeholder.com/400x225/2563eb/ffffff?text=Three+Point+Tutorial',
      isPremium: false
    },
    {
      id: 5,
      title: 'Dribbling Mastery',
      influencer: 'Pro Player Sarah',
      sport: 'Soccer',
      duration: '14:30',
      views: '15.6K',
      rating: 4.9,
      thumbnail: 'https://via.placeholder.com/400x225/10b981/ffffff?text=Dribbling+Tutorial',
      isPremium: true
    },
    {
      id: 6,
      title: 'Serving Technique',
      influencer: 'Tennis Pro Emma',
      sport: 'Tennis',
      duration: '9:18',
      views: '7.3K',
      rating: 4.8,
      thumbnail: 'https://via.placeholder.com/400x225/f59e0b/ffffff?text=Serving+Tutorial',
      isPremium: true
    }
  ]

  const filteredTutorials = selectedSport === 'All' 
    ? tutorials 
    : tutorials.filter(t => t.sport === selectedSport)

  return (
    <div className="tutorials">
      <div className="tutorials-header">
        <div>
          <h1>Skill Tutorials</h1>
          <p>Learn from top influencers and coaches</p>
        </div>
        {!user.isSubscribed && (
          <div className="premium-notice">
            <Crown size={18} />
            <span>Upgrade to access premium tutorials</span>
          </div>
        )}
      </div>

      <div className="sport-filters">
        {sports.map(sport => (
          <button
            key={sport}
            className={`sport-filter ${selectedSport === sport ? 'active' : ''}`}
            onClick={() => setSelectedSport(sport)}
          >
            {sport}
          </button>
        ))}
      </div>

      <div className="tutorials-grid">
        {filteredTutorials.map(tutorial => (
          <div key={tutorial.id} className="tutorial-card">
            {tutorial.isPremium && !user.isSubscribed && (
              <div className="premium-overlay">
                <Lock size={32} />
                <span>Premium</span>
              </div>
            )}
            <div 
              className={`tutorial-thumbnail ${tutorial.isPremium && !user.isSubscribed ? 'locked' : ''}`}
              onClick={() => {
                if (tutorial.isPremium && !user.isSubscribed) return
                if (tutorial.youtubeId) {
                  setPlayingVideo(tutorial.youtubeId)
                }
              }}
            >
              <img src={tutorial.thumbnail} alt={tutorial.title} />
              <div className="play-button">
                <Play size={32} fill="white" />
              </div>
              <div className="duration-badge">{tutorial.duration}</div>
            </div>
            <div className="tutorial-info">
              <h3>{tutorial.title}</h3>
              <div className="tutorial-meta">
                <div className="influencer">
                  <Users size={14} />
                  <span>{tutorial.influencer}</span>
                </div>
                <div className="tutorial-stats">
                  <div className="stat">
                    <Star size={14} fill="var(--accent)" color="var(--accent)" />
                    <span>{tutorial.rating}</span>
                  </div>
                  <div className="stat">
                    <span>{tutorial.views} views</span>
                  </div>
                </div>
              </div>
              <div className="sport-tag">{tutorial.sport}</div>
            </div>
          </div>
        ))}
      </div>

      {playingVideo && (
        <div className="video-modal" onClick={() => setPlayingVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-video-btn" onClick={() => setPlayingVideo(null)}>
              <X size={24} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default Tutorials

