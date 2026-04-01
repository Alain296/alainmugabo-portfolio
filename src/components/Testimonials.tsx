import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre Habimana",
    position: "Project Manager, TechRwanda",
    text: "Alain delivered an exceptional web application for our team. His attention to detail and ability to translate requirements into clean, functional code is impressive. Highly recommended!",
    rating: 5,
  },
  {
    name: "Grace Uwimana",
    position: "Business Owner, Kigali",
    text: "Working with Alain on our branding and design was a great experience. He created stunning visuals and a modern website that perfectly represents our business identity.",
    rating: 5,
  },
  {
    name: "Prof. Emmanuel Ndayisaba",
    position: "Lecturer, AUCA",
    text: "Alain is one of the most dedicated students I've taught. His capstone project demonstrated strong technical skills and an excellent understanding of database systems.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-card/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What People Say
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-xl p-6 relative group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
