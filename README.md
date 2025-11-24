# SkillUp Sports - Social Media App for Sports Skills Development

A clean, modern social media platform designed for kids to develop their sports skills through tutorials, practice videos, and coach feedback.

## Features

- **Home Feed**: Browse practice videos from other athletes
- **Tutorials**: Learn skills from influencer-led tutorials (premium feature)
- **Video Upload**: Record and upload practice sessions
- **Coach Feedback**: Receive detailed feedback from certified coaches (premium feature)
- **Profile**: Track your progress and achievements
- **Subscription Model**: Free tier for viewing/posting, Premium for tutorials and feedback
- **Parental Controls**: Safety features for child accounts
- **Content Moderation**: Heavily moderated, sports-only content

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Lucide React** - Icons
- **CSS3** - Styling with modern design system

## Project Structure

```
src/
├── components/     # Reusable components (Navbar)
├── pages/         # Page components
│   ├── Home.jsx
│   ├── Tutorials.jsx
│   ├── Upload.jsx
│   ├── Profile.jsx
│   ├── CoachFeedback.jsx
│   └── Settings.jsx
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## Key Features Explained

### Subscription Model
- **Free**: View and post videos only
- **Premium ($9.99/month)**: Access to tutorials and coach feedback

### Safety Features
- Parental controls for content filtering, time limits, and messaging
- Heavy content moderation (sports-related only)
- Verified coaches only

### Coach System
- University/college level coaches
- Quota-based reward system
- Scouting opportunities

## Design Philosophy

- Clean, modern UI with smooth animations
- Mobile-responsive design
- Intuitive navigation
- Safety-first approach for children
- Engaging visual design to keep kids motivated

