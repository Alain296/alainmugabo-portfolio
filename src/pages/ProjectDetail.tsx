import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Code2, Database, Server, Layout, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import featured project images
import gymImage from "@/assets/gym-management.jpg";
import waterImage from "@/assets/village-water.jpg";
import coffeeImage from "@/assets/coffee-roastery.jpg";

// Import gallery images
import waterDashboard from "@/assets/projects/water-dashboard.jpg";
import waterCommunity from "@/assets/projects/water-community.jpg";
import waterBilling from "@/assets/projects/water-billing.jpg";

import gymTraining from "@/assets/projects/gym-training.jpg";
import gymMembership from "@/assets/projects/gym-membership.jpg";
import gymSchedule from "@/assets/projects/gym-schedule.jpg";

import coffeeRoasting from "@/assets/projects/coffee-roasting.jpg";
import coffeeQuality from "@/assets/projects/coffee-quality.jpg";
import coffeeInventory from "@/assets/projects/coffee-inventory.jpg";

import realestateAnalytics from "@/assets/projects/realestate-analytics.jpg";
import realestateHomes from "@/assets/projects/realestate-homes.jpg";
import realestateMl from "@/assets/projects/realestate-ml.jpg";

import constructionSite from "@/assets/projects/construction-site.jpg";
import constructionPlanning from "@/assets/projects/construction-planning.jpg";
import constructionMaterials from "@/assets/projects/construction-materials.jpg";

import personalFinance from "@/assets/projects/personal-finance.jpg";
import studyRoom from "@/assets/projects/study-room.jpg";
import airbnbClone from "@/assets/projects/airbnb-clone.jpg";
import umuhinziCredit from "@/assets/projects/umuhinzi-credit.jpg";
import orkestraApp from "@/assets/projects/orkestra.jpg";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: { name: string; icon: typeof Code2 }[];
  features: string[];
  github: string;
  image: string;
  gallery: string[];
  category: string;
}

const projects: Record<string, Project> = {
  "village-water-system": {
    id: "village-water-system",
    title: "Village Water System",
    shortDescription: "Full-stack web application for water usage tracking and billing",
    fullDescription: "A comprehensive full-stack web application designed to automate water usage tracking and billing for village communities. This system enables water utility managers to efficiently monitor consumption patterns, generate accurate bills, and manage customer accounts. The platform features real-time data visualization through interactive charts, JWT-based authentication for secure access, and a responsive modern UI built with React.js.",
    technologies: [
      { name: "React.js 18", icon: Layout },
      { name: "Django 4.2", icon: Server },
      { name: "Django REST Framework", icon: Code2 },
      { name: "MySQL 8.0", icon: Database },
      { name: "JWT Authentication", icon: Code2 },
      { name: "Chart.js", icon: Layout },
    ],
    features: [
      "Real-time water consumption monitoring",
      "Automated billing and invoice generation",
      "Customer account management",
      "Interactive data visualization dashboards",
      "Secure JWT-based authentication",
      "Responsive modern UI design",
    ],
    github: "https://github.com/Alain296/VillageWaterSystem",
    image: waterImage,
    gallery: [waterDashboard, waterCommunity, waterBilling],
    category: "Full-Stack Web Application",
  },
  "gym-management-system": {
    id: "gym-management-system",
    title: "Gym Management System",
    shortDescription: "Complete gym membership and training management solution",
    fullDescription: "A robust gym management system designed to streamline fitness center operations. This application handles member registration, subscription management, trainer assignments, and workout tracking. The system provides gym owners with tools to manage their business efficiently while offering members an intuitive interface to track their fitness journey.",
    technologies: [
      { name: "Java", icon: Code2 },
      { name: "Spring Boot", icon: Server },
      { name: "MySQL", icon: Database },
      { name: "HTML/CSS", icon: Layout },
      { name: "JavaScript", icon: Code2 },
    ],
    features: [
      "Member registration and profile management",
      "Subscription and payment tracking",
      "Trainer and class scheduling",
      "Workout progress monitoring",
      "Equipment inventory management",
      "Reporting and analytics dashboard",
    ],
    github: "https://github.com/Muneza006/Gym-Management-System",
    image: gymImage,
    gallery: [gymTraining, gymMembership, gymSchedule],
    category: "Management System",
  },
  "coffee-roastery-system": {
    id: "coffee-roastery-system",
    title: "Artisanal Coffee Roastery Management System",
    shortDescription: "PL/SQL database solution for specialty coffee operations",
    fullDescription: "A sophisticated PL/SQL-based database solution designed to streamline operations for specialty coffee producers. This system addresses common challenges such as order tracking, inventory management, and quality control that often lead to stock discrepancies and inconsistent roast profiles. It leverages PL/SQL's automation capabilities, transactional integrity, and real-time analytics to optimize coffee production workflows.",
    technologies: [
      { name: "PL/SQL", icon: Code2 },
      { name: "Oracle Database", icon: Database },
      { name: "Stored Procedures", icon: Server },
      { name: "Triggers", icon: Code2 },
      { name: "Materialized Views", icon: Database },
    ],
    features: [
      "Automated order fulfillment workflows",
      "Real-time inventory synchronization",
      "Quality control for roasting logs",
      "Supplier performance tracking",
      "Customer trend analytics",
      "Batch consistency management",
    ],
    github: "https://github.com/Alain296/PLSQL-Capstone-Project-AUCA-2025-GrpA_26450_Mugabo_Artisanal-Coffee-Roastery-Management-System_DB",
    image: coffeeImage,
    gallery: [coffeeRoasting, coffeeQuality, coffeeInventory],
    category: "Database Solution",
  },
  "personal-finance-app": {
    id: "personal-finance-app",
    title: "Personal Finance App",
    shortDescription: "Track income, expenses, budgets and savings goals",
    fullDescription: "A modern personal finance tracker that helps users take control of their money. It captures income and expenses, categorizes transactions, sets monthly budgets, and visualizes spending patterns through interactive charts. Built with a React front end and a Node.js/Prisma/PostgreSQL back end, it provides a fast, secure, and intuitive experience for daily money management.",
    technologies: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma ORM", icon: Database },
    ],
    features: [
      "Income and expense tracking",
      "Category-based budgeting",
      "Savings goals with progress indicators",
      "Interactive charts and analytics",
      "Secure authentication (JWT)",
      "Responsive mobile-friendly UI",
    ],
    github: "https://github.com/Alain296/personal-finance-app",
    image: personalFinance,
    gallery: [personalFinance, personalFinance, personalFinance],
    category: "Full-Stack Web Application",
  },
  "study-room-booking": {
    id: "study-room-booking",
    title: "Study Room Booking System",
    shortDescription: "Reserve university study rooms in real time",
    fullDescription: "A web platform that lets university students book study rooms in real time. Students can view live room availability on a calendar, reserve a slot, and receive instant confirmation. Administrators manage rooms, approve special bookings, and access usage reports. Designed to remove the friction of manual room reservations on campus.",
    technologies: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "JWT Auth", icon: Code2 },
    ],
    features: [
      "Real-time room availability calendar",
      "One-click booking and cancellation",
      "Role-based access (student/admin)",
      "Email notifications for confirmations",
      "Booking history per student",
      "Admin dashboard with usage reports",
    ],
    github: "https://github.com/Alain296/study_room_booking_system",
    image: studyRoom,
    gallery: [studyRoom, studyRoom, studyRoom],
    category: "Web Application",
  },
  "airbnb-system": {
    id: "airbnb-system",
    title: "Airbnb Booking System",
    shortDescription: "Full-stack vacation rental booking platform",
    fullDescription: "An Airbnb-inspired booking platform where hosts list properties and travelers search, filter, and book stays. The system includes secure authentication, host dashboards, listing management, image galleries, and a complete reservation workflow. The backend exposes a RESTful API that powers both the web client and future mobile integrations.",
    technologies: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Code2 },
      { name: "MongoDB", icon: Database },
      { name: "REST API", icon: Code2 },
    ],
    features: [
      "Property listings with image galleries",
      "Search and filter by location, price, dates",
      "Secure booking and reservation management",
      "Host dashboards and listing controls",
      "User reviews and ratings",
      "RESTful API tested with Postman and Swagger",
    ],
    github: "https://github.com/Alain296/Airbnb-",
    image: airbnbClone,
    gallery: [airbnbClone, airbnbClone, airbnbClone],
    category: "Full-Stack Web Application",
  },
  "umuhinzi-credit-app": {
    id: "umuhinzi-credit-app",
    title: "Umuhinzi Credit App",
    shortDescription: "Micro-credit platform built for Rwandan farmers",
    fullDescription: "A mobile-first credit application platform built for Rwandan farmers (umuhinzi means farmer in Kinyarwanda). It enables farmers to apply for loans tailored to their agricultural cycle, track repayments, and access financial education content. The platform connects farmers with micro-finance providers and reduces the paperwork and travel typically required to access credit.",
    technologies: [
      { name: "React Native", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Code2 },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Database },
    ],
    features: [
      "Loan application workflow",
      "Repayment tracking and reminders",
      "Crop-cycle aligned payment plans",
      "Farmer profile and credit history",
      "SMS and email notifications",
      "Admin panel for credit officers",
    ],
    github: "https://github.com/Alain296",
    image: umuhinziCredit,
    gallery: [umuhinziCredit, umuhinziCredit, umuhinziCredit],
    category: "FinTech / Agriculture",
  },
  "orkestra-app": {
    id: "orkestra-app",
    title: "Orkestra App",
    shortDescription: "Collaborative workspace orchestrator for teams",
    fullDescription: "Orkestra brings tasks, schedules, and team activity into one streamlined dashboard. Teams can create projects, assign work, comment on tasks, and see real-time updates as members make progress. The app is designed for small product teams that need a clean, fast alternative to heavy enterprise tools.",
    technologies: [
      { name: "React", icon: Layout },
      { name: "TypeScript", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "WebSockets", icon: Code2 },
    ],
    features: [
      "Project and task management",
      "Real-time activity updates",
      "Team scheduling and calendar view",
      "Comments and mentions on tasks",
      "Role-based permissions",
      "Clean, productivity-focused UI",
    ],
    github: "https://github.com/Alain296",
    image: orkestraApp,
    gallery: [orkestraApp, orkestraApp, orkestraApp],
    category: "Productivity / SaaS",
  },
  "real-estate-analysis": {
    id: "real-estate-analysis",
    title: "Real Estate Market Analysis",
    shortDescription: "Machine learning application for property value prediction",
    fullDescription: "A machine learning application analyzing real estate market trends and predicting property values based on various features. This data science project uses advanced analytics to help buyers and sellers make informed decisions about property investments.",
    technologies: [
      { name: "Python", icon: Code2 },
      { name: "Machine Learning", icon: Server },
      { name: "Pandas", icon: Database },
      { name: "Scikit-learn", icon: Code2 },
    ],
    features: [
      "Property value prediction",
      "Market trend analysis",
      "Feature importance ranking",
      "Data visualization",
      "Model comparison",
      "Interactive reports",
    ],
    github: "https://github.com/alainmugabo/real-estate-analysis",
    image: realestateAnalytics,
    gallery: [realestateAnalytics, realestateHomes, realestateMl],
    category: "Data Science",
  },
  "construction-management": {
    id: "construction-management",
    title: "Construction Management",
    shortDescription: "Application for managing construction projects",
    fullDescription: "An application for managing construction projects, tracking progress, resources, and generating reports. This system helps construction companies manage their projects efficiently from planning to completion.",
    technologies: [
      { name: "Java", icon: Code2 },
      { name: "Object-Oriented Programming", icon: Layout },
      { name: "MySQL", icon: Database },
    ],
    features: [
      "Project timeline management",
      "Resource allocation",
      "Progress tracking",
      "Budget management",
      "Report generation",
      "Team coordination",
    ],
    github: "https://github.com/alainmugabo/construction-management",
    image: constructionSite,
    gallery: [constructionSite, constructionPlanning, constructionMaterials],
    category: "Management System",
  },
};

const ImageGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card py-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">
            AM
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/#projects">
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>

      <main className="container py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Main Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Project Overview */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-6">Project Gallery</h2>
              <ImageGallery images={project.gallery} title={project.title} />
            </div>

            {/* Key Features */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Technologies */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="space-y-3">
                {project.technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50"
                    >
                      <IconComponent size={18} className="text-primary" />
                      <span className="text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-12">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alain Mugabo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
