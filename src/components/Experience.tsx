import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Palette, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Creative Designer & Photo Editor",
    company: "Freelance / Self-Employed",
    location: "Kigali, Rwanda",
    period: "2024 - 2025",
    icon: Palette,
    description: [
      "Designed logos, branding materials, and visual content using Adobe Photoshop & Illustrator",
      "Created AI-generated artwork and graphics using Midjourney and DALL-E",
      "Photo editing and retouching for businesses and individuals",
      "Developed UI/UX mockups and prototypes for web and mobile applications",
    ],
  },
  {
    title: "Web Developer",
    company: "Freelance Projects",
    location: "Kigali, Rwanda",
    period: "2023 - Present",
    icon: Code2,
    description: [
      "Built web applications with AI-powered features for local enterprises",
      "Developed responsive, visually appealing user interfaces",
      "Cultivated client relationships and business partnerships",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Professional Journey
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <exp.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
