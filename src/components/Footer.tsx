import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Alain296", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/alain-mugabo-308021325/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mugaboalain58@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Alain Mugabo. Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
