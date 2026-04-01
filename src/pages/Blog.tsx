import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import ThemeToggle from "@/components/ThemeToggle";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card py-4">
        <div className="container flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">AM</Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <Link to="/"><ArrowLeft className="mr-2" size={16} />Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Blog</span>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">Insights & Articles</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Sharing my knowledge and experiences in software development, AI, and creative design.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "" : "border-border hover:border-primary/50"}
            >
              <Tag size={14} className="mr-1" />
              {cat}
            </Button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.shortDescription}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.date).toLocaleDateString()}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                </div>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link to={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
