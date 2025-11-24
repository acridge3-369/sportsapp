import { useState } from 'react'
import { Upload as UploadIcon, Video, X, Check } from 'lucide-react'
import './Upload.css'

function Upload({ user }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [sport, setSport] = useState('')
  const [skill, setSkill] = useState('')
  const [description, setDescription] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)

  const sports = ['Basketball', 'Soccer', 'Tennis', 'Baseball', 'Volleyball', 'Swimming', 'Track & Field']

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!selectedFile || !sport || !skill) {
      alert('Please fill in all required fields')
      return
    }

    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setIsUploaded(true)
      setTimeout(() => {
        setSelectedFile(null)
        setSport('')
        setSkill('')
        setDescription('')
        setIsUploaded(false)
      }, 2000)
    }, 2000)
  }

  return (
    <div className="upload">
      <div className="upload-header">
        <h1>Upload Your Practice</h1>
        <p>Record yourself practicing a skill and get feedback from coaches</p>
      </div>

      <form className="upload-form" onSubmit={handleUpload}>
        <div className="upload-section">
          <label className="upload-label">
            <span>Video</span>
            <span className="required">*</span>
          </label>
          <div className="file-upload-area">
            {selectedFile ? (
              <div className="file-preview">
                <Video size={48} />
                <div className="file-info">
                  <p className="file-name">{selectedFile.name}</p>
                  <p className="file-size">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  type="button"
                  className="remove-file"
                  onClick={() => setSelectedFile(null)}
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="upload-dropzone">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="file-input"
                />
                <UploadIcon size={48} />
                <p>Click to upload or drag and drop</p>
                <span>MP4, MOV, AVI up to 100MB</span>
              </label>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="upload-label">
              <span>Sport</span>
              <span className="required">*</span>
            </label>
            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select a sport</option>
              {sports.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="upload-label">
              <span>Skill</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="e.g., Free Throw, Penalty Kick"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="upload-label">
            <span>Description (Optional)</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us about your practice session..."
            className="form-textarea"
            rows="4"
          />
        </div>

        <div className="upload-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setSelectedFile(null)
              setSport('')
              setSkill('')
              setDescription('')
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={isUploading || isUploaded}
          >
            {isUploading ? (
              <>Uploading...</>
            ) : isUploaded ? (
              <>
                <Check size={18} />
                Uploaded!
              </>
            ) : (
              <>
                <UploadIcon size={18} />
                Upload Video
              </>
            )}
          </button>
        </div>
      </form>

      <div className="upload-info">
        <h3>Tips for Better Feedback</h3>
        <ul>
          <li>Record in good lighting</li>
          <li>Keep the camera steady</li>
          <li>Show the full movement</li>
          <li>Record from multiple angles if possible</li>
        </ul>
        {user.isSubscribed ? (
          <div className="feedback-notice success">
            <Check size={18} />
            <span>You'll receive coach feedback within 24-48 hours</span>
          </div>
        ) : (
          <div className="feedback-notice">
            <span>Upgrade to receive feedback from certified coaches</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Upload

