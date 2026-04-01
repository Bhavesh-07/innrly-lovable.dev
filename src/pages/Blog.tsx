import { SEO } from "@/components/SEO";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, categories } from "@/data/blogData";

// Category color mapping for visual variety
const categoryColors: Record<string, string> = {
  "Financial Control": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  "Workforce Management": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Budgeting": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Operations": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "Technology": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "Innovation": "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "Sustainability": "bg-green-500/10 text-green-600 dark:text-green-400",
  "Guest Experience": "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  "Industry Trends": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
};

const getCategoryColor = (category: string) =>
  categoryColors[category] || "bg-primary/10 text-primary";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEO title="Blog" description="Insights, tips, and trends in hospitality technology. Stay updated on hotel operations, revenue management, and workforce optimization." canonical="/blog" />
      <Navbar />
      <main className="pt-24 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Blogs & <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with the latest trends, insights, and best practices in hospitality management and hotel technology.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="relative rounded-3xl overflow-hidden bg-card border border-border group cursor-pointer hover:border-primary/30 transition-all hover:shadow-xl">
                  <div className="p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        Featured
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors max-w-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveCategory("All")}
              >
                View All Articles
              </Button>
            </motion.div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-20 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get the latest hospitality insights, industry trends, and INNRLY updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
