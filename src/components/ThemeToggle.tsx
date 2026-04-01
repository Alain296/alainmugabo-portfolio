import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
      ) : (
        <Moon size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
      )}
    </Button>
  );
};

export default ThemeToggle;
