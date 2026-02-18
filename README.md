# SkillSwap 🚀

**A futuristic, neon-themed skill exchange platform** - Exchange skills, not money!

![SkillSwap](https://github.com/user-attachments/assets/6101a34a-9007-441e-b939-6711b394aedd)

## 🌟 Features

### 🎨 Ultra-Modern Neon UI/UX
- **Neon color palette**: Cyan (#00ffff), Magenta (#ff00ff), Yellow (#ffdd00)
- **3D animated logo** with Three.js
- **Glowing effects** on buttons, cards, and inputs
- **Smooth animations** with Framer Motion
- **Interactive 3D hover effects** on cards
- **Dark theme** by default with neon accents

### 📱 Fully Responsive
- Mobile-first design
- Tablet and desktop optimized
- Responsive navigation with mobile menu

### 🎯 Pages Included

1. **Landing Page**
   - Hero section with 3D animated logo
   - Features showcase
   - How it works (3 steps)
   - Testimonials section
   - Neon-themed footer

2. **Authentication**
   - Login page with glowing inputs
   - Signup page with validation
   - Social login options (Google, GitHub)

3. **Dashboard**
   - Skill cards with 3D hover effects
   - Search and filter functionality
   - Category filtering
   - "Request Swap" buttons

4. **Profile Page**
   - User info card with avatar
   - Skills offered/wanted sections
   - Reviews with star ratings
   - Edit profile button

5. **Messages/Chat**
   - Conversations list
   - Real-time chat interface
   - Neon chat bubbles
   - Message input with animations

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Fonts**: Orbitron (display) + Poppins (body)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/hamza-ai-cloud/SkillSwap.git

# Navigate to the project directory
cd SkillSwap

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
SkillSwap/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── NeonButton.tsx
│   │   ├── NeonCard.tsx
│   │   ├── NeonInput.tsx
│   │   ├── Logo3D.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── auth/             # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/        # Dashboard page
│   ├── profile/          # Profile page
│   ├── messages/         # Messages/chat page
│   ├── data/            # Dummy data
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── public/              # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🎨 Design Features

### Neon Glow Effects
Custom CSS classes for neon effects:
- `.neon-text-cyan`, `.neon-text-magenta`, `.neon-text-yellow`
- `.neon-glow-cyan`, `.neon-glow-magenta`, `.neon-glow-yellow`
- `.neon-border-cyan`, `.neon-border-magenta`

### Custom Scrollbar
Gradient neon scrollbar with smooth transitions

### 3D Hover Tilt
Cards and interactive elements feature 3D perspective transforms on hover

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hamza-ai-cloud/SkillSwap)

Or manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Dummy Data

The application uses dummy data for demonstration:
- 8 sample skills across various categories
- 3 user reviews
- Sample user profile
- Mock messages/conversations

**Note**: No backend is required - this is a frontend-only showcase project.

## 🎯 Key Components

### NeonButton
Customizable button with neon glow effects and hover animations.

### NeonCard
3D card component with hover tilt effects and neon borders.

### Logo3D
Animated 3D logo using Three.js with floating animation.

### LoadingSkeleton
Animated loading placeholders for content.

## 🔮 Future Enhancements

- Backend integration with authentication
- Real-time messaging with WebSocket
- User matching algorithm
- Skill verification system
- Rating and review system
- Notification system
- Advanced search and filters
- Skill swap scheduling
- Video call integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TailwindCSS, and Framer Motion**
