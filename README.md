# 🌐 Alain Mugabo — Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, blog, and professional journey as a Software Engineering student at AUCA.

🔗 **Live Site**: [alainmugabo-portfolio.netlify.app](https://alainmugabo-portfolio.netlify.app/)  
🔗 **GitHub Repo**: [github.com/Alain296/alainmugabo-portfolio](https://github.com/Alain296/alainmugabo-portfolio)

---

## 📸 Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| Modern dark theme with cyan accents | Clean light theme for readability |

---

## 🚀 Features

### Core Sections
- **Hero Section** — Full-screen intro with name, title, tagline, profile image, CTA buttons, and social links
- **About Section** — Professional biography, key highlights, and skill overview
- **Skills Section** — Visual progress bars with icons, grouped by category (Frontend, Backend, AI, Design, etc.)
- **Experience Timeline** — Career journey with roles, durations, and key achievements
- **Projects Showcase** — 9 projects displayed in grid/card layout with images, descriptions, tech tags, and GitHub links
- **Education** — Academic background with key coursework
- **Testimonials** — Client and peer recommendations with star ratings
- **Contact Section** — Contact form with validation + email, phone, and social media links
- **Blog Page** — List of articles with category filter and full post view with rich content

### Interactive & UX Features
- ✅ **Dark/Light Mode Toggle** — Persistent theme switching
- ✅ **Project Category Filter** — Filter projects by Frontend, Backend, Database, Data Science
- ✅ **Blog Category Filter** — Filter blog posts by Web Development, Database, AI & Design
- ✅ **Hover Effects & Animations** — Framer Motion animations throughout
- ✅ **Modal/Detail Views** — Dedicated project detail pages with image galleries
- ✅ **Responsive Design** — Mobile-first, works on all screen sizes
- ✅ **AI-Powered Recommendation** — Smart skill & project suggestions based on user interests

### Performance & SEO
- ✅ Optimized images with lazy loading
- ✅ Semantic HTML structure with proper heading hierarchy
- ✅ Meta tags (title, description, Open Graph, Twitter cards)
- ✅ Proper `alt` text on all images
- ✅ SPA routing with Netlify `_redirects`

---

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend Framework** | React 18, TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3, CSS Variables, Glassmorphism effects |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Routing** | React Router DOM v6 |
| **State Management** | React Context API, React Hooks |
| **Data Fetching** | TanStack React Query |
| **Form Handling** | React Hook Form + Zod validation |
| **Deployment** | Netlify (CI/CD via GitHub) |

---

## 📁 Project Structure

```
src/
├── assets/              # Images (profile, project screenshots)
├── components/          # Reusable UI components
│   ├── About.tsx        # About me section
│   ├── AIRecommendation.tsx  # AI-powered recommendations
│   ├── Contact.tsx      # Contact form & info
│   ├── Education.tsx    # Academic background
│   ├── Experience.tsx   # Work experience timeline
│   ├── Footer.tsx       # Site footer with social links
│   ├── Hero.tsx         # Hero/landing section
│   ├── Navbar.tsx       # Navigation bar with theme toggle
│   ├── Projects.tsx     # Project showcase with filters
│   ├── Skills.tsx       # Skills with progress bars
│   ├── Testimonials.tsx # Testimonials/recommendations
│   ├── ThemeToggle.tsx  # Dark/light mode toggle button
│   └── ui/              # shadcn/ui component library
├── data/
│   └── blogPosts.ts     # Blog post data
├── hooks/
│   ├── use-theme.tsx    # Theme context provider
│   └── use-toast.ts     # Toast notifications
├── pages/
│   ├── Index.tsx        # Home page (all sections)
│   ├── Blog.tsx         # Blog listing page
│   ├── BlogPost.tsx     # Individual blog post page
│   ├── ProjectDetail.tsx # Project detail page
│   └── NotFound.tsx     # 404 page
├── utils/
│   └── generateCV.ts   # Dynamic CV/PDF generation
├── App.tsx              # App routes & providers
├── main.tsx             # Entry point
└── index.css            # Global styles & design tokens
```

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Alain296/alainmugabo-portfolio.git

# Navigate to the project
cd alainmugabo-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 👤 Author

**Alain Mugabo**  
Final Year Software Engineering Student — AUCA (Adventist University of Central Africa)

- 📧 Email: mugaboalain58@gmail.com
- 📱 Phone: +250 782 499 569
- 🔗 LinkedIn: [alain-mugabo-308021325](https://www.linkedin.com/in/alain-mugabo-308021325/)
- 🐙 GitHub: [Alain296](https://github.com/Alain296)
- 📷 Instagram: [_____alain7](https://www.instagram.com/_____alain7/)

---

## 📄 License

This project is open source and available for educational purposes.
