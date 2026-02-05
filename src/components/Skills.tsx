import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Layers,
  BrainCircuit,
  Network,
  Plug,
  Sparkles,
  Palette,
  Image,
  Wand2,
  PenTool
} from "lucide-react";

const skills = [
  { name: "Python", level: 85, icon: Code2, color: "text-yellow-500" },
  { name: "AI & Machine Learning", level: 80, icon: Sparkles, color: "text-violet-500" },
  { name: "Generative AI (ChatGPT, Midjourney)", level: 85, icon: Wand2, color: "text-pink-500" },
  { name: "Photo Editing & Design", level: 80, icon: Image, color: "text-rose-500" },
  { name: "Adobe Photoshop & Illustrator", level: 75, icon: Palette, color: "text-blue-400" },
  { name: "UI/UX Design", level: 75, icon: PenTool, color: "text-cyan-400" },
  { name: "Data Science & Analytics", level: 80, icon: BrainCircuit, color: "text-emerald-500" },
  { name: "Java", level: 90, icon: Code2, color: "text-orange-500" },
  { name: "React", level: 75, icon: Globe, color: "text-sky-400" },
  { name: "MySQL", level: 85, icon: Database, color: "text-blue-500" },
  { name: "Object-Oriented Programming", level: 90, icon: Layers, color: "text-cyan-500" },
  { name: "Git & GitHub", level: 80, icon: GitBranch, color: "text-red-500" },
  { name: "HTML, CSS, JavaScript", level: 80, icon: Globe, color: "text-amber-500" },
  { name: "Node.js", level: 70, icon: Network, color: "text-green-500" },
  { name: "REST API", level: 80, icon: Plug, color: "text-pink-500" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Technical Expertise
          </h2>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-secondary/50 ${skill.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent size={20} />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
