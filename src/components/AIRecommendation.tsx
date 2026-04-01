import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Code2, Database, Palette, Brain, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const interests = [
  { id: "frontend", label: "Frontend Development", icon: Globe },
  { id: "backend", label: "Backend Development", icon: Server },
  { id: "database", label: "Database & SQL", icon: Database },
  { id: "ai", label: "AI & Machine Learning", icon: Brain },
  { id: "design", label: "Creative Design", icon: Palette },
  { id: "fullstack", label: "Full-Stack Apps", icon: Code2 },
];

const recommendations: Record<string, { skills: string[]; projects: string[]; tip: string }> = {
  frontend: {
    skills: ["React.js", "HTML/CSS/JavaScript", "UI/UX Design"],
    projects: ["Village Water System", "To-Do List Application"],
    tip: "Based on your interest in frontend, I recommend exploring my React-based projects and UI design work!",
  },
  backend: {
    skills: ["Java", "Spring Boot", "Node.js", "REST API"],
    projects: ["Gym Management System", "Student Registration System"],
    tip: "You'd love my backend projects built with Java and Spring Boot — check out the management systems!",
  },
  database: {
    skills: ["MySQL", "Oracle SQL", "PL/SQL"],
    projects: ["Coffee Roastery Management", "SQL Analytics Project", "Library Management System"],
    tip: "My PL/SQL capstone and SQL analytics projects showcase advanced database techniques!",
  },
  ai: {
    skills: ["Python", "Machine Learning", "Data Science", "Generative AI"],
    projects: ["Real Estate Analysis", "SQL Analytics Project"],
    tip: "Explore my ML-powered projects and data science work using Python and Scikit-learn!",
  },
  design: {
    skills: ["Adobe Photoshop", "Illustrator", "UI/UX Design", "Generative AI (Midjourney)"],
    projects: ["Village Water System", "Coffee Roastery Management"],
    tip: "My creative design experience spans branding, photo editing, and AI-generated artwork!",
  },
  fullstack: {
    skills: ["React.js", "Django", "Java", "MySQL", "REST API"],
    projects: ["Village Water System", "Gym Management System", "To-Do List Application"],
    tip: "Check out my full-stack projects combining modern frontends with robust backends!",
  },
};

const AIRecommendation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<string | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [result, setResult] = useState<typeof recommendations.frontend | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    setResult(null);
    setIsThinking(true);
    // Simulate AI thinking
    setTimeout(() => {
      setResult(recommendations[id]);
      setIsThinking(false);
    }, 1200);
  };

  return (
    <section id="ai-recommendation" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase flex items-center justify-center gap-2">
            <Sparkles size={16} />
            AI-Powered Feature
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Smart Recommendations
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Select your area of interest and get personalized skill and project recommendations powered by AI.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Interest selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <Button
                  key={interest.id}
                  variant={selected === interest.id ? "default" : "outline"}
                  className={`h-auto py-4 flex flex-col items-center gap-2 ${
                    selected === interest.id ? "" : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleSelect(interest.id)}
                >
                  <Icon size={20} />
                  <span className="text-xs">{interest.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Thinking animation */}
          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-primary">
                <Sparkles size={20} className="animate-spin" />
                <span className="font-medium">AI is analyzing your interests...</span>
              </div>
            </motion.div>
          )}

          {/* Result */}
          {result && !isThinking && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-xl p-6 space-y-5"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="text-primary mt-1 shrink-0" size={20} />
                <p className="text-foreground">{result.tip}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Recommended Skills to Explore
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Suggested Projects
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.projects.map((project) => (
                    <span
                      key={project}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIRecommendation;
