import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java", level: 90, icon: "☕" },
  { name: "C#", level: 85, icon: "#" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "MySQL", level: 85, icon: "🗄️" },
  { name: "Object-Oriented Programming", level: 90, icon: "🔷" },
  { name: "C Programming", level: 75, icon: "©" },
  { name: "React", level: 60, icon: "⚛️" },
  { name: "Git & GitHub", level: 80, icon: "📦" },
  { name: "HTML, CSS, JavaScript", level: 75, icon: "🌐" },
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

        <div ref={ref} className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-primary font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
