import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Droplets, Dumbbell, Coffee, Building2, TrendingUp, FolderKanban, Cpu, Calendar, Users, Wallet, CalendarCheck, Home, Sprout, Music, Server, Database, FileCode, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import project images
import gymImage from "@/assets/gym-management.jpg";
import waterImage from "@/assets/village-water.jpg";
import coffeeImage from "@/assets/coffee-roastery.jpg";

// Import other project images
import realestateAnalytics from "@/assets/projects/realestate-analytics.jpg";
import constructionSite from "@/assets/projects/construction-site.jpg";
import personalFinance from "@/assets/projects/personal-finance.jpg";
import studyRoom from "@/assets/projects/study-room.jpg";
import airbnbClone from "@/assets/projects/airbnb-clone.jpg";
import umuhinziCredit from "@/assets/projects/umuhinzi-credit.jpg";
import orkestraApp from "@/assets/projects/orkestra.jpg";
import sqlCode from "@/assets/projects/sql-code.jpg";
import studentRecords from "@/assets/projects/student-records.jpg";
import studentCourses from "@/assets/projects/student-courses.jpg";
import todoWorkflow from "@/assets/projects/todo-workflow.jpg";

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
  { icon: FolderKanban, value: 10, label: "PROJECTS DELIVERED", suffix: "" },
  { icon: Cpu, value: 15, label: "TECHNOLOGIES", suffix: "+" },
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
    id: "personal-finance-app",
    title: "Personal Finance App",
    description: "Personal finance tracker for managing income, expenses, budgets, and savings goals with insightful charts and category-based analytics.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/Alain296/personal-finance-app",
    icon: Wallet,
    image: personalFinance,
    featured: true,
  },
  {
    id: "study-room-booking",
    title: "Study Room Booking System",
    description: "Web platform allowing university students to reserve study rooms in real time, with availability calendar, role-based admin approvals, and email notifications.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    github: "https://github.com/Alain296/study_room_booking_system",
    icon: CalendarCheck,
    image: studyRoom,
    featured: false,
  },
  {
    id: "airbnb-system",
    title: "Airbnb Booking System",
    description: "Full-stack vacation rental platform with property listings, search filters, secure bookings, host dashboards, and a RESTful API powering the experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Alain296/Airbnb-",
    icon: Home,
    image: airbnbClone,
    featured: false,
  },
  {
    id: "umuhinzi-credit-app",
    title: "Umuhinzi Credit App",
    description: "Mobile-first credit application platform for Rwandan farmers, enabling loan requests, repayment tracking, and access to micro-financing tailored to agriculture cycles.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Prisma", "REST API"],
    github: "https://github.com/Alain296",
    icon: Sprout,
    image: umuhinziCredit,
    featured: false,
  },
  {
    id: "orkestra-app",
    title: "Orkestra App",
    description: "Collaborative workspace orchestrator that brings tasks, schedules, and team activity into one streamlined dashboard with real-time updates.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    github: "https://github.com/Alain296",
    icon: Music,
    image: orkestraApp,
    featured: false,
  },
  {
    id: "airbnb-api",
    title: "Airbnb REST API",
    description: "Backend REST API service powering the Airbnb clone: authentication, property listings, bookings, and host management, documented with Swagger and tested with Postman.",
    technologies: ["Node.js", "Express", "TypeScript", "MongoDB", "Swagger"],
    github: "https://github.com/Alain296/Airbnb-api",
    icon: Server,
    image: airbnbClone,
    featured: false,
  },
  {
    id: "java-midterm-group",
    title: "Java Midterm Group Project",
    description: "Collaborative Java application built with Group E for the AUCA midterm: object-oriented design, modular classes, and console-driven workflows.",
    technologies: ["Java", "OOP", "Git", "Collaboration"],
    github: "https://github.com/Alain296/midterm_26450_group-E",
    icon: Code2,
    image: studentRecords,
    featured: false,
  },
  {
    id: "java-oop-portfolio",
    title: "Java OOP Portfolio (MugaboAlain_26450)",
    description: "Personal Java portfolio of object-oriented programming exercises and assignments covering inheritance, polymorphism, collections, and file handling.",
    technologies: ["Java", "OOP", "JDK", "Data Structures"],
    github: "https://github.com/Alain296/MugaboAlain_26450",
    icon: FileCode,
    image: studentCourses,
    featured: false,
  },
  {
    id: "windowfunctions-sql",
    title: "SQL Window Functions Project",
    description: "The WindowWizards SQL project exploring advanced window functions (RANK, DENSE_RANK, ROW_NUMBER, running aggregates) applied to real analytical queries.",
    technologies: ["SQL", "Oracle", "Window Functions", "Analytics"],
    github: "https://github.com/Alain296/The-WindowWizards-SQL-Project",
    icon: Database,
    image: sqlCode,
    featured: false,
  },
  {
    id: "cpp-files",
    title: "C++ File Handling",
    description: "C++ project focused on file I/O, streams and data persistence — reading, writing and manipulating structured records on disk.",
    technologies: ["C++", "File I/O", "STL"],
    github: "https://github.com/Alain296/Files",
    icon: FileCode,
    image: todoWorkflow,
    featured: false,
  },


const Projects = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const getCategory = (techs: string[]) => {
    const categories: string[] = [];
    techs.forEach(t => {
      if (["React.js", "HTML", "CSS", "JavaScript"].some(x => t.includes(x))) categories.push("Frontend");
      if (["Java", "Spring Boot", "Django", "PHP", "Node.js"].some(x => t.includes(x))) categories.push("Backend");
      if (["MySQL", "Oracle", "PL/SQL", "SQL"].some(x => t.includes(x))) categories.push("Database");
      if (["Python", "ML", "Pandas", "Scikit-learn"].some(x => t.includes(x))) categories.push("Data Science");
    });
    return categories;
  };

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => getCategory(p.technologies).includes(activeFilter));

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", "Frontend", "Backend", "Database", "Data Science"].map((cat) => (
            <Button
              key={cat}
              variant={activeFilter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(cat)}
              className={activeFilter === cat ? "" : "border-border hover:border-primary/50"}
            >
              {cat}
            </Button>
          ))}
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
