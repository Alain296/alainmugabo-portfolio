import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code2, Database, Server, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import gymImage from "@/assets/gym-management.jpg";
import waterImage from "@/assets/village-water.jpg";
import coffeeImage from "@/assets/coffee-roastery.jpg";
import sqlImage from "@/assets/sql-analytics.jpg";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: { name: string; icon: typeof Code2 }[];
  features: string[];
  github: string;
  image: string;
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
    category: "Data Analytics",
  },
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

        {/* Project Image */}
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
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-xl p-6 md:p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

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

            {/* Actions */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">View Project</h3>
              <Button asChild className="w-full" size="lg">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </a>
              </Button>
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
