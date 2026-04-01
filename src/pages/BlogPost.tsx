import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import ThemeToggle from "@/components/ThemeToggle";

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Button asChild>
            <Link to="/blog"><ArrowLeft className="mr-2" size={16} />Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-xl font-bold mt-8 mb-3 text-foreground">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={i} className="flex items-start gap-2 text-muted-foreground mb-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">{match[1]}</strong>: {match[2]}</span>
            </li>
          );
        }
      }
      if (/^\d+\. \*\*/.test(line)) {
        const match = line.match(/\d+\. \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={i} className="flex items-start gap-2 text-muted-foreground mb-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">{match[1]}</strong>: {match[2]}</span>
            </li>
          );
        }
      }
      if (line.trim() === "") return <div key={i} className="h-3" />;
      return <p key={i} className="text-muted-foreground leading-relaxed mb-2">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass-card py-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">AM</Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <Link to="/blog"><ArrowLeft className="mr-2" size={16} />Back to Blog</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><Tag size={14} className="text-primary" />{post.category}</span>
            <span className="flex items-center gap-1"><Calendar size={14} />{new Date(post.date).toLocaleDateString()}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>

          {/* Content */}
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BlogPost;
