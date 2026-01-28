import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold gradient-text">AM</span>
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">
            Alain Mugabo
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link text-sm font-medium">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant="outline" size="sm" className="border-primary/50 hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card mt-2 mx-4 rounded-lg overflow-hidden"
        >
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-3 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild variant="outline" size="sm" className="w-full border-primary/50">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
