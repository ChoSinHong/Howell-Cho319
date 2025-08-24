# HowellCho Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fhowell-cho319.github.io)](https://howell-cho319.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Professional portfolio website for Howell Cho - Software Engineer & AI Researcher

## 🚀 Live Demo

Visit the live website: **[https://howell-cho319.github.io](https://howell-cho319.github.io)**

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

This is the professional portfolio website of **Howell Cho (Cho Sin Hong)**, a passionate Software Engineering student and AI Researcher. The website showcases skills, projects, experience, and provides a way to connect professionally.

### Key Highlights:
- 🎓 **Education**: BSc (Hons) Software Engineering (APU/DMU double degree program)
- 💼 **Current Role**: Full-time AI Researcher at Top 30 prestigious university
- 🌟 **Specialization**: AI-powered solutions, Computer Vision, Cloud Computing
- 📍 **Location**: Bukit Jalil, Malaysia
- 🎯 **Graduation**: June 2025

## ✨ Features

### 🎨 Design & UX
- **Modern Glass Morphism Design** with dark theme
- **Fully Responsive** - works on all devices and screen sizes
- **Smooth Animations** and hover effects
- **Accessibility Compliant** (WCAG 2.1 guidelines)
- **Cross-browser Compatible** (Chrome, Firefox, Safari, Edge)

### 🧭 Navigation
- **Fixed Navigation Bar** with smooth scrolling
- **Active Section Highlighting** based on scroll position
- **Mobile-friendly Menu** with touch support
- **Keyboard Navigation** support

### 📱 Content Sections
- **Hero Section** - Welcome message with profile photo
- **About Me** - Detailed professional background
- **Skills** - Interactive skill showcase with icons
- **Projects** - Portfolio of key projects and achievements
- **Experience** - Professional work history
- **Contact** - Multiple ways to get in touch

### ⚡ Performance
- **Optimized Loading** with lazy loading and preloading
- **Minified Assets** for faster loading times
- **SEO Optimized** with proper meta tags and structured data
- **Progressive Web App** ready
- **Core Web Vitals** optimized

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with custom properties and grid/flexbox
- **Vanilla JavaScript** - ES6+ features with modular architecture
- **Font Awesome** - Icon library for consistent iconography

### Development Tools
- **Node.js & npm** - Package management and build tools
- **ESLint** - JavaScript linting
- **Stylelint** - CSS linting
- **HTML Validator** - HTML validation
- **Live Server** - Development server with hot reload

### Deployment
- **GitHub Pages** - Static site hosting
- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline (optional)

## 📁 Project Structure

```
howell-cho319.github.io/
├── 📁 assets/                 # Static assets
│   ├── 📁 css/               # Stylesheets (Modular Architecture)
│   │   ├── 📄 main.css       # Main entry point with imports
│   │   ├── 📄 variables.css  # CSS custom properties and design tokens
│   │   ├── 📄 base.css       # Reset, base styles, and typography
│   │   ├── 📄 navigation.css # Navigation and header components
│   │   ├── 📄 components.css # Reusable UI components
│   │   ├── 📄 home.css       # Home page specific styles
│   │   ├── 📄 pages.css      # Other pages styles
│   │   └── 📄 responsive.css # Media queries and responsive design
│   ├── 📁 js/                # JavaScript files
│   │   └── 📄 main.js        # Main application logic
│   ├── 📁 images/            # Image assets
│   │   ├── 📁 profile/       # Profile photos
│   │   ├── 📁 projects/      # Project screenshots
│   │   ├── 📁 icons/         # Custom icons
│   │   └── 📁 optimized/     # Optimized images
│   └── 📁 fonts/             # Custom fonts (if any)
├── 📁 docs/                  # Documentation
│   ├── 📄 DEVELOPMENT.md     # Development guidelines
│   └── 📄 DEPLOYMENT.md      # Deployment instructions
├── 📄 index.html             # Main HTML file
├── 📄 package.json           # Node.js dependencies and scripts
├── 📄 .gitignore            # Git ignore rules
└── 📄 README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Git**
- Modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Howell-Cho319/howell-cho319.github.io.git
   cd howell-cho319.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Quick Start Scripts

```bash
# Development server with live reload
npm run dev

# Production server
npm start

# Build optimized version
npm run build

# Run tests and linting
npm test

# Deploy to GitHub Pages
npm run deploy
```

## 💻 Development

### Code Organization
The project follows professional web development standards:

- **Separation of Concerns**: HTML, CSS, and JavaScript are in separate files
- **Modular Architecture**: JavaScript is organized into modules
- **CSS Custom Properties**: Centralized design tokens
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 compliant

### Development Workflow
1. Make changes to source files
2. Test in development server (`npm run dev`)
3. Run linting and validation (`npm test`)
4. Build optimized version (`npm run build`)
5. Deploy to production

For detailed development guidelines, see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## 🚀 Deployment

### GitHub Pages (Recommended)
The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
1. Build the project: `npm run build`
2. Upload files to your web server
3. Ensure proper server configuration

For detailed deployment instructions, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## ⚡ Performance

### Optimization Features
- **Lazy Loading** for images and non-critical resources
- **Preloading** of critical resources
- **Minification** of CSS and JavaScript
- **Compression** support (gzip/brotli)
- **Caching** strategies for static assets

### Performance Metrics
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All metrics in green
- **Page Load Time**: < 2 seconds on 3G connection
- **First Contentful Paint**: < 1.5 seconds

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Test on multiple browsers and devices
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Howell Cho (Cho Sin Hong)**

- 🌐 **Website**: [https://howell-cho319.github.io](https://howell-cho319.github.io)
- 📧 **Email**: [howell.cho319@gmail.com](mailto:howell.cho319@gmail.com)
- 💼 **LinkedIn**: [cho-sin-hong-9139a3378](https://linkedin.com/in/cho-sin-hong-9139a3378)
- 🐱 **GitHub**: [Howell-Cho319](https://github.com/Howell-Cho319)
- 📸 **Instagram**: [howellcho](https://instagram.com/howellcho)

---

<div align="center">
  <p><strong>Built with ❤️ by Howell Cho</strong></p>
  <p><em>Passionate about AI, Software Engineering, and Innovation</em></p>
</div>
