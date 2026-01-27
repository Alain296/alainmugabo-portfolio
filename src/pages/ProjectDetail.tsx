import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Code2, Database, Server, Layout, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Import featured project images
import gymImage from "@/assets/gym-management.jpg";
import waterImage from "@/assets/village-water.jpg";
import coffeeImage from "@/assets/coffee-roastery.jpg";
import sqlImage from "@/assets/sql-analytics.jpg";

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

import sqlDashboard from "@/assets/projects/sql-dashboard.jpg";
import sqlCode from "@/assets/projects/sql-code.jpg";
import sqlRanking from "@/assets/projects/sql-ranking.jpg";

import studentRegistration from "@/assets/projects/student-registration.jpg";
import studentCourses from "@/assets/projects/student-courses.jpg";
import studentRecords from "@/assets/projects/student-records.jpg";

import todoApp from "@/assets/projects/todo-app.jpg";
import todoWorkflow from "@/assets/projects/todo-workflow.jpg";
import todoComplete from "@/assets/projects/todo-complete.jpg";

import libraryInterior from "@/assets/projects/library-interior.jpg";
import libraryCatalog from "@/assets/projects/library-catalog.jpg";
import libraryBorrow from "@/assets/projects/library-borrow.jpg";

import realestateAnalytics from "@/assets/projects/realestate-analytics.jpg";
import realestateHomes from "@/assets/projects/realestate-homes.jpg";
import realestateMl from "@/assets/projects/realestate-ml.jpg";

import constructionSite from "@/assets/projects/construction-site.jpg";
import constructionPlanning from "@/assets/projects/construction-planning.jpg";
import constructionMaterials from "@/assets/projects/construction-materials.jpg";

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
  "sql-analytics-project": {
    id: "sql-analytics-project",
    title: "WindowWizards SQL Analytics Project",
    shortDescription: "Advanced SQL analytics using window functions on e-commerce data",
    fullDescription: "An analytical project exploring advanced SQL capabilities using an e-commerce dataset. This project demonstrates mastery of SQL Window Functions for sophisticated data analysis, including trend analysis, category ranking, and identifying top-performing records. The project showcases how modern SQL techniques can transform raw data into actionable business insights.",
    technologies: [
      { name: "SQL", icon: Code2 },
      { name: "Oracle Database", icon: Database },
      { name: "Window Functions", icon: Code2 },
      { name: "LAG/LEAD", icon: Server },
      { name: "RANK/DENSE_RANK", icon: Database },
    ],
    features: [
      "Transaction trend analysis with LAG/LEAD",
      "Product ranking within categories",
      "Top 3 best-sellers per region identification",
      "Earliest transaction tracking",
      "Advanced window function implementations",
      "E-commerce data insights",
    ],
    github: "https://github.com/Alain296/The-WindowWizards-SQL-Project",
    image: sqlImage,
    gallery: [sqlDashboard, sqlCode, sqlRanking],
    category: "Data Analytics",
  },
  "student-registration-system": {
    id: "student-registration-system",
    title: "Student Registration System",
    shortDescription: "Comprehensive system for managing student enrollment and academic records",
    fullDescription: "A comprehensive system for managing student enrollment, course registration, and academic records using object-oriented design principles. This application streamlines the administrative process of student management in educational institutions, providing tools for registration, course management, and record keeping.",
    technologies: [
      { name: "Java", icon: Code2 },
      { name: "Object-Oriented Programming", icon: Layout },
      { name: "MySQL", icon: Database },
    ],
    features: [
      "Student enrollment management",
      "Course registration workflow",
      "Academic records tracking",
      "Grade management system",
      "Report generation",
      "User authentication",
    ],
    github: "https://github.com/alainmugabo/student-registration",
    image: studentRegistration,
    gallery: [studentRegistration, studentCourses, studentRecords],
    category: "Management System",
  },
  "todo-app": {
    id: "todo-app",
    title: "To-Do List Application",
    shortDescription: "Full-stack web application for task management",
    fullDescription: "A full-stack web application for task management with features for creating, editing, deleting, and marking tasks as complete. This productivity tool helps users organize their daily tasks and track their progress efficiently.",
    technologies: [
      { name: "PHP", icon: Code2 },
      { name: "MySQL", icon: Database },
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Layout },
      { name: "JavaScript", icon: Code2 },
    ],
    features: [
      "Create new tasks",
      "Edit existing tasks",
      "Delete completed tasks",
      "Mark tasks as complete",
      "Task categorization",
      "Responsive design",
    ],
    github: "https://github.com/alainmugabo/todo-app",
    image: todoApp,
    gallery: [todoApp, todoWorkflow, todoComplete],
    category: "Web Application",
  },
  "library-management-system": {
    id: "library-management-system",
    title: "Library Management System",
    shortDescription: "Database-driven system for library operations",
    fullDescription: "A database-driven system for library operations including book inventory, member management, and borrowing transactions. This system helps librarians manage their collections efficiently and provides members with easy access to library resources.",
    technologies: [
      { name: "Oracle SQL", icon: Database },
      { name: "PL/SQL", icon: Code2 },
    ],
    features: [
      "Book inventory management",
      "Member registration",
      "Borrowing transactions",
      "Return tracking",
      "Fine calculation",
      "Report generation",
    ],
    github: "https://github.com/alainmugabo/library-management",
    image: libraryInterior,
    gallery: [libraryInterior, libraryCatalog, libraryBorrow],
    category: "Database Solution",
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
