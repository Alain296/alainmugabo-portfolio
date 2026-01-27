import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Student Registration Management System",
    description: "A comprehensive system for managing student enrollment, course registration, and academic records using object-oriented design principles.",
    technologies: ["Java", "OOP", "MySQL"],
    github: "https://github.com/alainmugabo/student-registration",
  },
  {
    title: "To-Do List Web Application",
    description: "A full-stack web application for task management with features like creating, editing, deleting, and marking tasks as complete.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/alainmugabo/todo-app",
  },
  {
    title: "Library Management System",
    description: "Database-driven system for managing library operations including book inventory, member management, and borrowing transactions.",
    technologies: ["Oracle SQL", "PL/SQL"],
    github: "https://github.com/alainmugabo/library-management",
  },
  {
    title: "Real Estate Market Analysis System",
    description: "Machine learning application that analyzes real estate market trends and predicts property values based on various features.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/alainmugabo/real-estate-analysis",
  },
  {
    title: "Construction Management System",
    description: "Application for managing construction projects, tracking progress, resources, and generating reports for project stakeholders.",
    technologies: ["Java", "OOP", "MySQL"],
    github: "https://github.com/alainmugabo/construction-management",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Featured Work
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={32} />
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

                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
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
                  variant="ghost"
                  size="sm"
                  className="w-full hover:bg-primary/10 hover:text-primary"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
