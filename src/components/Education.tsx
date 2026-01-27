import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Academic Background
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-xl p-8 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bachelor of Software Engineering</h3>
                  <p className="text-primary font-medium">
                    Adventist University of Central Africa (AUCA)
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>2021 - 2025 (Expected)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Kigali, Rwanda</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Programming",
                    "Database Management",
                    "Software Engineering",
                    "Web Development",
                    "Machine Learning",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
