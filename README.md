# Hasib Hasan - Personal Portfolio Website

A modern, responsive personal portfolio website for Hasib Hasan, a Python Django Developer. This portfolio showcases backend engineering skills, projects, and provides a contact form for potential opportunities.

## 🌟 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light color schemes
- **Interactive Elements**: 
  - Custom cursor with trail effect
  - Scroll-triggered animations
  - Typewriter effect for role display
  - Terminal-style code preview
  - Tech stack orbital display
- **Sections**:
  - Hero section with introduction
  - About section with profile and social links
  - Skills section with tech stack visualization
  - Projects/portfolio showcase
  - Contact form with validation
- **Performance**: Optimized loading with CDN-hosted libraries
- **Accessibility**: Semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with Tailwind CSS
- **JavaScript**: Vanilla JavaScript for interactivity
- **Libraries**:
  - Tailwind CSS (via CDN)
  - Font Awesome 6 (icons)
  - Devicon (tech stack icons)
  - Google Fonts (Sora, JetBrains Mono)

## 📁 Project Structure

```
hasib-hasan/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── main.js             # JavaScript functionality
├── hasib-hasan.png     # Profile image
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Setup

1. **Clone or download the repository**

2. **Open the website**
   - Simply open `index.html` in your web browser
   - For development, use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access the website**
   - Navigate to `http://localhost:8000` (or your chosen port)

## 🎨 Customization

### Personal Information

Edit the following in `index.html` and `main.js`:

- **Name and Title**: Update in the hero section (line 219-222)
- **Profile Image**: Replace `hasib-hasan.png` with your image
- **Social Links**: Update in `main.js` (search for social link configurations)
- **Contact Information**: Update in the contact section
- **Resume Link**: Update the Google Drive link (line 104, 184)

### Color Scheme

Modify the Tailwind config in `index.html` (lines 28-45):

```javascript
colors: {
  primary: "#0EA5E9",      // Primary blue
  primaryDark: "#0284C7",  // Darker blue
  accent: "#6366F1",       // Accent indigo
  softWhite: "#F0F9FF",    // Light background
  softDark: "#0F172A",     // Dark background
}
```

### Skills and Projects

Update the data in `main.js`:
- **Skills**: Modify the `skillsBriefCards` and `techStackGroups` arrays
- **Projects**: Update the `projectCards` array with your project information

### Contact Form

The contact form currently uses client-side validation. To make it functional:
1. Set up a backend service (Formspree, EmailJS, etc.)
2. Update the form action in `index.html` (line 520)
3. Modify the form submission handler in `main.js`

## 🌐 Deployment

### Static Hosting

This website can be deployed to any static hosting service:

- **GitHub Pages**: Free hosting for GitHub repositories
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Zero-config deployment
- **AWS S3**: Static website hosting

### Deployment Steps (GitHub Pages)

1. Push the code to a GitHub repository
2. Go to repository Settings → Pages
3. Select the main branch as source
4. Your site will be available at `https://username.github.io/repository-name`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Hasib Hasan**
- Python Django Developer
- Backend Engineer
- [GitHub](https://github.com/hasib9963)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons by Font Awesome and Devicon
- Fonts by Google Fonts
- Styling framework by Tailwind CSS

## 📞 Contact

For inquiries or collaboration opportunities:
- Use the contact form on the website
- Connect via social media links in the footer

---

**Note**: This is a static website. All dynamic content is rendered client-side using JavaScript. For a production contact form, integrate with a backend service or use a form handling service like Formspree.