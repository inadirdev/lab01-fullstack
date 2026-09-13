# Nadir Hussain — Professional Portfolio

A modern, responsive personal portfolio website built for **Lab 01 — Web Foundations & Version Control** (Full Stack Web Development, CS301) at **Air University Islamabad**.

---

## Student Information

| Field | Details |
|-------|---------|
| **Name** | Nadir Hussain |
| **Registration No** | 242754 |
| **Class** | BSCSev-F-24-A-1064 |
| **Semester** | 5th |
| **Course** | Full Stack Web Development (CS301) |
| **University** | Air University, Islamabad |
| **Email** | nadirdev9@gmail.com |

---

## About This Project

This portfolio showcases my real skills, projects, education, and achievements as a BS Computer Science student (4th Semester) aspiring to become a Full-Stack & Cloud Developer. It meets all Lab 01 requirements while delivering a production-ready, professional developer portfolio.

---

## Live Demo

> Deploy on GitHub Pages, Vercel, or Netlify and add your live URL here.

```bash
# GitHub Pages: Settings → Pages → Deploy from main branch
# Vercel: vercel deploy
# Netlify: netlify deploy --prod
```

---

## Project Structure

```
lab01-fullstack/
├── index.html              # Main portfolio page (semantic HTML5)
├── style.css               # External CSS with dark mode support
├── script.js               # Interactive features (ES6+)
├── bootstrap-demo.html     # Bootstrap 5 components showcase
├── README.md               # Project documentation
└── assets/
    └── Nadir_Hussain_CV.docx   # Downloadable CV (add your file here)
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, typing effect tagline, CTA buttons, social links |
| **About** | Professional summary, contact info, CV download |
| **Skills** | 6 categorized skill cards with technology badges |
| **Projects** | 3 real projects with images and tech tags |
| **Education** | Vertical timeline (Air University + Govt. Degree College) |
| **Certifications** | 4 certification cards |
| **Achievements** | UN Millennium Fellow highlight + AWS Cloud Club |
| **Contact** | Validated contact form + contact details |
| **Footer** | Copyright and social links |

---

## Features

### Lab 01 Requirements
- Semantic HTML5 structure (`header`, `nav`, `section`, `footer`)
- External CSS stylesheet (`style.css`)
- Bootstrap 5 grid system and components (navbar, cards, buttons)
- Git & GitHub ready

### Professional Enhancements
- **Dark / Light mode toggle** with localStorage persistence
- **Typing effect** on hero section tagline
- **Scroll progress bar** at the top of the page
- **Active nav link highlight** on scroll
- **Back to top button**
- **Contact form validation** (name, email, message)
- **Scroll reveal animations** (fade-in on scroll)
- **Download CV button** linking to CV file
- **Responsive design** with breakpoints: 576px, 768px, 992px, 1200px
- **Accessibility**: alt text, aria labels, reduced motion support

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Markup** | HTML5 (Semantic Elements) |
| **Styling** | CSS3 (Custom Properties, Flexbox, Animations, Transitions) |
| **Framework** | Bootstrap 5.3.3 (Grid, Navbar, Cards, Buttons, Forms) |
| **Scripting** | JavaScript ES6+ (Intersection Observer, localStorage) |
| **Icons** | Font Awesome 6.5.0 |
| **Fonts** | Google Fonts — Poppins (headings), Inter (body) |
| **Version Control** | Git & GitHub |

---

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Maroon | `#800020` |
| Secondary | Dark Navy | `#1a1a2e` |
| Accent | Gold | `#ffc107` |
| Background (Light) | Off White | `#f8f9fa` |
| Background (Dark) | Deep Navy | `#0f0f1a` |
| Text (Light) | Dark Gray | `#212529` |
| Text (Dark) | Light Gray | `#e0e0e0` |

---

## How to Run

### Option 1: Open Directly
1. Clone or download this repository
2. Place your CV file at `assets/Nadir_Hussain_CV.docx`
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge)

### Option 2: Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. The site opens at `http://127.0.0.1:5500`

### Option 3: Local HTTP Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Then open http://localhost:8000
```

---

## Git & GitHub Setup

```bash
# Initialize repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: professional portfolio upgrade with dark mode and animations"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR-USERNAME/lab01-fullstack.git
git branch -M main
git push -u origin main
```

---

## Deployment

### GitHub Pages
1. Push code to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Your site will be live at `https://YOUR-USERNAME.github.io/lab01-fullstack/`

### Vercel / Netlify
- Connect your GitHub repository
- Deploy with default settings (static site)

---

## Customization

1. **Profile Photo**: Replace the avatar URL in `index.html` with your photo in `assets/profile.jpg`
2. **Project Images**: Add images to `assets/` and update `src` attributes
3. **Social Links**: Update GitHub and LinkedIn URLs in hero and footer sections
4. **CV File**: Place `Nadir_Hussain_CV.docx` in the `assets/` folder

---

## Viva Questions (Lab Manual)

### HTML5
1. **What are semantic HTML5 elements? Give examples.**
   - Semantic elements clearly describe their meaning (`header`, `nav`, `section`, `article`, `footer`). Used throughout this portfolio.

2. **What is the difference between `<div>` and `<section>`?**
   - `<section>` is semantic and represents a thematic grouping of content; `<div>` is a generic container with no semantic meaning.

3. **What is the purpose of the `<meta viewport>` tag?**
   - Makes the page responsive on mobile devices by setting the viewport width to the device width.

### CSS3
4. **What is the difference between internal, inline, and external CSS?**
   - External CSS is in a separate file (`style.css`), linked via `<link>`. This project uses external CSS as required.

5. **What are CSS transitions and animations?**
   - Transitions smoothly change property values over time (e.g., hover effects). Animations use `@keyframes` for complex sequences (fade-in, typing cursor blink).

6. **What is CSS Flexbox?**
   - A layout model for arranging items in rows or columns. Used in hero section, contact items, and skill tags.

7. **What are CSS Custom Properties (variables)?**
   - Variables defined in `:root` (e.g., `--color-primary: #800020`) used for theming and dark mode support.

### Bootstrap 5
8. **What is the Bootstrap grid system?**
   - A 12-column responsive grid using `.container`, `.row`, and `.col-*` classes for layout.

9. **Name three Bootstrap components used in this project.**
   - Navbar, Cards, Buttons (also Forms, Grid system).

10. **What is the difference between `.container` and `.container-fluid`?**
    - `.container` has fixed max-widths at breakpoints; `.container-fluid` spans full viewport width.

### Git & GitHub
11. **What is the difference between `git add`, `git commit`, and `git push`?**
    - `git add` stages changes; `git commit` saves a snapshot locally; `git push` uploads commits to remote repository.

12. **What is a README.md file and why is it important?**
    - Documentation file describing the project, how to run it, and its purpose. Essential for collaboration and GitHub visibility.

13. **What is the purpose of `.gitignore`?**
    - Specifies files Git should ignore (e.g., `.env`, `node_modules/`) to prevent committing sensitive or unnecessary files.

### JavaScript (Professional Features)
14. **How does the dark/light mode toggle work?**
    - Toggles `data-theme` attribute on `<html>`, swaps CSS custom properties, and saves preference in `localStorage`.

15. **What is the Intersection Observer API?**
    - Observes when elements enter/exit the viewport, used here for scroll reveal fade-in animations.

---

## License

This project is created for academic purposes as part of the Full Stack Web Development course at Air University Islamabad.

---

**Nadir Hussain** · BSCS Student · Air University Islamabad  
nadirdev9@gmail.com · [GitHub](https://github.com/) · [LinkedIn](https://linkedin.com/)
