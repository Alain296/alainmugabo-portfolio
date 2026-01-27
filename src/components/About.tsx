import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Strong skills in OOP and multiple programming languages",
  },
  {
    icon: GraduationCap,
    title: "Final Year Student",
    description: "Bachelor of Software Engineering at AUCA",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on building scalable applications",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about creating innovative solutions",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Passionate About Building Great Software
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I am a final-year Software Engineering student at the Adventist University of Central Africa (AUCA) 
              with strong skills in software development and object-oriented programming. I am passionate about 
              building reliable, scalable, and user-friendly applications and I am seeking opportunities for 
              internships or entry-level software engineering roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
