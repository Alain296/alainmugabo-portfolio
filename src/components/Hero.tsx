import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

// Custom WhatsApp icon since Lucide doesn't have one
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";
import { downloadCV } from "@/utils/generateCV";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 blur-md opacity-50 animate-pulse-glow" />
              <img
                src={profileImage}
                alt="Alain Mugabo"
                className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top border-4 border-primary/30 shadow-2xl"
              />
              {/* Open to Opportunities Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-sm opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="relative flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 rounded-full border border-emerald-400/50 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span className="text-xs font-medium text-white">Open to Opportunities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-wider uppercase rounded-full glass-card text-primary">
              Software Engineering Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="gradient-text">Building Digital Solutions</span>
            <br />
            <span className="text-foreground">for Global Impact</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-base text-primary/80 font-mono tracking-wide mb-6"
          >
            Full-Stack Developer | Data Scientist | Innovation Catalyst
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
          >
            Passionate software engineering student at <span className="text-foreground font-medium">AUCA</span>, specializing in full-stack development with <span className="text-foreground font-medium">Java, React, Python</span>, and data analytics. Creating innovative technology solutions that solve real-world problems in healthcare, education, and community systems globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-muted-foreground/30 hover:border-primary/50"
              onClick={downloadCV}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
          {[
              { icon: Mail, href: "mailto:mugaboalain58@gmail.com", label: "Email" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/alain-mugabo-308021325/", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/Alain296", label: "GitHub" },
              { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/", label: "Facebook" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=250782499569&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
