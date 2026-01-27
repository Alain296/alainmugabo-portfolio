import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Droplets, Dumbbell, Coffee, BarChart3, Code2, GraduationCap, Building2, TrendingUp, Database, ListTodo, BookOpen, FolderKanban, Cpu, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import gymImage from "@/assets/gym-management.jpg";
import waterImage from "@/assets/village-water.jpg";
import coffeeImage from "@/assets/coffee-roastery.jpg";
import sqlImage from "@/assets/sql-analytics.jpg";

// Import other project images
import studentRegistration from "@/assets/projects/student-registration.jpg";
import todoApp from "@/assets/projects/todo-app.jpg";
import libraryInterior from "@/assets/projects/library-interior.jpg";
import realestateAnalytics from "@/assets/projects/realestate-analytics.jpg";
import constructionSite from "@/assets/projects/construction-site.jpg";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const stats = [
  { icon: FolderKanban, value: 9, label: "PROJECTS DELIVERED", suffix: "" },
  { icon: Cpu, value: 12, label: "TECHNOLOGIES", suffix: "+" },
  { icon: Calendar, value: 4, label: "YEARS EXPERIENCE", suffix: "" },
  { icon: Users, value: 500, label: "USERS IMPACTED", suffix: "+" },
];

const projects = [
  {
    id: "village-water-system",
    title: "Village Water System",
    description: "Full-stack web application for automated water usage tracking and billing with React.js frontend, Django backend, and MySQL database.",
    technologies: ["React.js", "Django", "MySQL", "JWT", "Chart.js"],
    github: "https://github.com/Alain296/VillageWaterSystem",
    icon: Droplets,
    image: waterImage,
    featured: true,
  },
  {
    id: "gym-management-system",
    title: "Gym Management System",
    description: "Complete gym membership and training management solution for fitness centers with member registration and workout tracking.",
    technologies: ["Java", "Spring Boot", "MySQL", "JavaScript"],
    github: "https://github.com/Muneza006/Gym-Management-System",
    icon: Dumbbell,
    image: gymImage,
    featured: true,
  },
  {
    id: "coffee-roastery-system",
    title: "Coffee Roastery Management",
    description: "PL/SQL database solution for specialty coffee producers with automated order fulfillment and inventory tracking.",
    technologies: ["PL/SQL", "Oracle", "Triggers", "Stored Procedures"],
    github: "https://github.com/Alain296/PLSQL-Capstone-Project-AUCA-2025-GrpA_26450_Mugabo_Artisanal-Coffee-Roastery-Management-System_DB",
    icon: Coffee,
    image: coffeeImage,
    featured: true,
  },
  {
    id: "sql-analytics-project",
    title: "SQL Analytics Project",
    description: "Advanced SQL analytics using window functions on e-commerce data for trend analysis and category ranking.",
    technologies: ["SQL", "Oracle", "Window Functions", "Analytics"],
    github: "https://github.com/Alain296/The-WindowWizards-SQL-Project",
    icon: BarChart3,
    image: sqlImage,
    featured: true,
  },
  {
    id: "student-registration-system",
    title: "Student Registration System",
    description: "A comprehensive system for managing student enrollment, course registration, and academic records using object-oriented design principles.",
    technologies: ["Java", "OOP", "MySQL"],
    github: "https://github.com/alainmugabo/student-registration",
    icon: GraduationCap,
    image: studentRegistration,
    featured: false,
  },
  {
    id: "todo-app",
    title: "To-Do List Application",
    description: "Full-stack web application for task management with creating, editing, deleting, and marking tasks as complete.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/alainmugabo/todo-app",
    icon: ListTodo,
    image: todoApp,
    featured: false,
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    description: "Database-driven system for library operations including book inventory, member management, and borrowing transactions.",
    technologies: ["Oracle SQL", "PL/SQL"],
    github: "https://github.com/alainmugabo/library-management",
    icon: BookOpen,
    image: libraryInterior,
    featured: false,
  },
  {
    id: "real-estate-analysis",
    title: "Real Estate Analysis",
    description: "Machine learning application analyzing real estate market trends and predicting property values based on various features.",
    technologies: ["Python", "ML", "Pandas", "Scikit-learn"],
    github: "https://github.com/alainmugabo/real-estate-analysis",
    icon: TrendingUp,
    image: realestateAnalytics,
    featured: false,
  },
  {
    id: "construction-management",
    title: "Construction Management",
    description: "Application for managing construction projects, tracking progress, resources, and generating reports.",
    technologies: ["Java", "OOP", "MySQL"],
    github: "https://github.com/alainmugabo/construction-management",
    icon: Building2,
    image: constructionSite,
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Header with gradient text */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-balance">
            Explore my comprehensive portfolio of innovative software solutions spanning web applications, 
            data analytics systems, and database management. Each project demonstrates technical expertise, 
            creative problem-solving, and real-world impact.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className="text-primary/60 group-hover:text-primary transition-colors" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Projects with Images */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="flex-1"
                    >
                      <Link to={`/project/${project.id}`}>
                        <ExternalLink size={16} className="mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-muted-foreground">
            Other Projects
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                      <IconComponent className="text-primary" size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="w-full"
                  >
                    <Link to={`/project/${project.id}`}>
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
