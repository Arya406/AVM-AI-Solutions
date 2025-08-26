import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight } from "lucide-react";

type BlogCategory = "all" | "ai-trends" | "case-studies" | "tutorials" | "industry-news";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  readTime: string;
}

const categories = [
  { id: "all" as BlogCategory, label: "All Articles" },
  { id: "ai-trends" as BlogCategory, label: "AI Trends" },
  { id: "case-studies" as BlogCategory, label: "Case Studies" },
  { id: "tutorials" as BlogCategory, label: "Tutorials" },
  { id: "industry-news" as BlogCategory, label: "Industry News" },
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI Reduced Hospital Readmissions by 35%",
    excerpt: "A comprehensive case study of our ML implementation at Regional Medical Center, showcasing predictive analytics for patient care optimization.",
    category: "case-studies",
    date: "March 10, 2024",
    author: {
      name: "Sarah Martinez",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Building Your First Computer Vision Model",
    excerpt: "Step-by-step guide to creating an image classification model using TensorFlow and Python. Perfect for beginners.",
    category: "tutorials",
    date: "March 8, 2024",
    author: {
      name: "Michael Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "Major AI Funding Rounds and Market Trends",
    excerpt: "Analysis of recent AI investments, emerging startups, and market predictions from leading industry analysts and venture capital firms.",
    category: "industry-news",
    date: "March 5, 2024",
    author: {
      name: "Dr. Lisa Wang",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "The Evolution of Large Language Models",
    excerpt: "Exploring the rapid advancement of LLMs, from GPT to specialized domain models and their impact on various industries.",
    category: "ai-trends",
    date: "March 3, 2024",
    author: {
      name: "Dr. Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "AI-Powered Inventory Optimization Success",
    excerpt: "How a major retail chain reduced inventory costs by 28% using our predictive analytics and demand forecasting solutions.",
    category: "case-studies",
    date: "February 28, 2024",
    author: {
      name: "Sarah Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "4 min read"
  },
  {
    id: "6",
    title: "Deploying ML Models to Production: Best Practices",
    excerpt: "Comprehensive guide covering containerization, monitoring, scaling, and maintaining ML models in production environments.",
    category: "tutorials",
    date: "February 25, 2024",
    author: {
      name: "Michael Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=32&h=32"
    },
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
    readTime: "12 min read"
  }
];

const featuredPost = {
  id: "featured",
  title: "The Future of Generative AI: 10 Predictions for 2024 and Beyond",
  excerpt: "Explore the emerging trends and breakthrough innovations that will shape the generative AI landscape. From advanced multimodal models to ethical AI frameworks, discover what industry leaders are predicting for the next wave of AI transformation.",
  category: "ai-trends" as BlogCategory,
  date: "March 15, 2024",
  author: {
    name: "Dr. Alex Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40"
  },
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
  readTime: "10 min read"
};

function getCategoryColor(category: BlogCategory): string {
  switch (category) {
    case "ai-trends":
      return "bg-primary text-white";
    case "case-studies":
      return "bg-accent text-white";
    case "tutorials":
      return "bg-green-500 text-white";
    case "industry-news":
      return "bg-purple-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");
  const [email, setEmail] = useState("");

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">AI Insights & News</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in artificial intelligence and machine learning.
            </p>
          </div>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? "bg-primary text-white" 
                    : "hover:bg-gray-100"
                }`}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
          
          {/* Featured Article */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-primary text-white mr-3">Featured</Badge>
                      <span className="text-sm text-gray-600">AI Trends</span>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-sm text-gray-600">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-secondary mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <p className="text-sm font-semibold text-secondary">{featuredPost.author.name}</p>
                          <p className="text-xs text-gray-500">CEO & AI Research Lead</p>
                        </div>
                      </div>
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white"
                        data-testid="button-read-featured"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge className={getCategoryColor(post.category)}>
                      {categories.find(cat => cat.id === post.category)?.label}
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-xs text-gray-600">{post.author.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300"
              data-testid="button-load-more"
            >
              Load More Articles 
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Newsletter Subscription */}
          <Card className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Stay Updated with AI Insights</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI trends, tutorials, and case studies delivered to your inbox weekly.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap"
                  data-testid="button-subscribe-newsletter"
                >
                  Subscribe Now
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-3">No spam, unsubscribe anytime</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
