# SoonerTech Solutions - MSP Website

A professional Oklahoma Managed Service Provider website featuring a unique 90s terminal aesthetic with interactive dithered background effects.

## 🚀 Features

### **Terminal Interface Design**
- **90s Terminal Aesthetic**: Classic phosphor green text with monospace fonts
- **Interactive Dither Background**: Custom Three.js shaders with mouse interaction
- **Retro Visual Effects**: Scanlines, glitch effects, and terminal-style animations
- **Responsive Design**: Works seamlessly across desktop and mobile devices

### **Business Functionality**
- **Professional MSP Content**: Locally-focused Oklahoma business content
- **Service Navigation**: Functional menu system with three main sections
- **Company Information**: Complete about section with stats and certifications
- **Contact Integration**: Support portal with multiple contact methods

### **Technical Implementation**
- **React + TypeScript**: Modern development stack with type safety
- **Custom Routing**: State-based navigation without external router dependencies
- **Three.js Integration**: Real-time 3D background effects
- **Performance Optimized**: Efficient rendering and smooth animations

## 🏢 Business Content

**SoonerTech Solutions** - "Securing Oklahoma's Digital Future"

### Services Offered:
1. **Managed IT Services** - Complete infrastructure management
2. **Cybersecurity Solutions** - Advanced threat protection
3. **Cloud Services** - Scalable cloud infrastructure
4. **Business Continuity** - Disaster recovery and backup

### Local Market Focus:
- Oklahoma City and Tulsa service areas
- Local business understanding
- 24/7/365 support coverage
- Oklahoma-native team

## 🎮 Navigation

The terminal interface includes three main sections accessible via clickable menu items:

- **[1] Services & Solutions** (`/services`) - Detailed service offerings
- **[2] Support Portal** (`/support`) - Contact information and support options
- **[3] About Us** (`/about`) - Company information, stats, and team details

## 🛠️ Development

### Prerequisites
```bash
Node.js 18+
npm or yarn
```

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Visit `http://localhost:5173/` to view the site.

### Build for Production
```bash
npm run build
```

## 🌐 Deployment to Netlify

This project is optimized for Netlify deployment with the following configurations:

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to Netlify**:
   ```bash
   # For first-time deployment
   netlify deploy --prod --dir=dist

   # Or login and link to existing site
   netlify login
   netlify link
   netlify deploy --prod
   ```

### Option 2: Git-based Deployment

1. **Push to GitHub/GitLab**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Use these build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `18`

### Option 3: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to Netlify's manual deploy interface

### Deployment Configuration

The project includes:
- `netlify.toml` - Build and redirect configuration
- `public/_redirects` - SPA routing support
- Optimized Vite configuration for better chunking
- Security headers and caching rules

### Environment Variables (if needed)

If you need to add environment variables:
1. In Netlify dashboard: Site settings → Environment variables
2. Add variables with `VITE_` prefix for client-side access

## 🎨 Customization

### Dither Background Settings
The background effect can be customized in `src/App.tsx`:

```tsx
<Dither
  waveColor={[0.3, 0.3, 0.3]}  // RGB values (0-1)
  waveAmplitude={0.4}          // Wave intensity
  waveFrequency={2}            // Wave frequency
  waveSpeed={0.03}             // Animation speed
  mouseRadius={0.4}            // Mouse interaction radius
  colorNum={4}                 // Dither color levels
  pixelSize={2}                // Pixel size for retro effect
/>
```

### Business Content
Update company information in `src/data/businessContent.ts`:

- Company name and tagline
- Service offerings and descriptions
- Contact information
- About section content
- Statistics and certifications

### Terminal Styling
Modify the terminal aesthetic in `src/App.css`:

- Color schemes (phosphor green theme)
- Typography (monospace fonts)
- Animation effects
- Layout and spacing

## 📁 Project Structure

```
src/
├── components/
│   ├── Dither.tsx              # Three.js background component
│   └── pages/
│       ├── Home.tsx            # Landing page
│       ├── Services.tsx        # Services section
│       ├── Support.tsx         # Support/contact page
│       └── About.tsx           # About company page
├── data/
│   └── businessContent.ts      # Business content and copy
├── App.tsx                     # Main application component
├── App.css                     # Terminal styling and layout
└── main.tsx                    # Application entry point
```

## 🔧 Technical Stack

- **Frontend**: React 19 + TypeScript
- **3D Graphics**: Three.js + @react-three/fiber
- **Postprocessing**: @react-three/postprocessing
- **Build Tool**: Vite
- **Styling**: CSS with custom terminal theme
- **State Management**: React useState (no external router needed)

## 🎯 Design Philosophy

This website combines professional business functionality with a unique retro-tech aesthetic that helps SoonerTech Solutions stand out in the competitive MSP market. The terminal interface appeals to tech-savvy clients while maintaining full accessibility and professional credibility.

The dithered background effect provides visual interest without interfering with content readability, and the modular component structure allows for easy customization and expansion.
#   T e c h M S P 
 
 