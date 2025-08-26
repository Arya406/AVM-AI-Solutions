import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  ServerCog, 
  Eye, 
  Rocket, 
  Play, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic AI planning and roadmap development to align artificial intelligence with your business objectives and drive sustainable growth."
  },
  {
    icon: ServerCog,
    title: "ML Development",
    description: "Custom machine learning models designed and trained specifically for your industry and use cases."
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced image and video analysis solutions for automation, quality control, and intelligent monitoring."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    content: "AI Solutions Pro transformed our data processing capabilities. Their ML models reduced our processing time by 70% and improved accuracy significantly.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, InnovateLab",
    content: "Outstanding computer vision implementation. The team delivered beyond expectations and provided excellent ongoing support throughout the project.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  },
  {
    name: "Emily Johnson",
    role: "VP Operations, DataFlow",
    content: "Their NLP solutions revolutionized our customer service. We now handle 3x more inquiries with better accuracy and customer satisfaction.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80"
  }
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block gradient-text">End-to-End AI Solutions</span>
              <span className="block text-secondary">for the Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From consultation to deployment, we deliver comprehensive AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/consultation">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg animate-pulse-glow"
                  data-testid="button-get-started"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started Today
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 text-lg"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Brain className="h-16 w-16 text-primary opacity-20" />
        </div>
        <div className="absolute top-40 right-16 animate-float" style={{animationDelay: '1s'}}>
          <Zap className="h-12 w-12 text-accent opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{animationDelay: '2s'}}>
          <Users className="h-12 w-12 text-neon opacity-20" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our AI Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button 
                className="bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300"
                data-testid="button-view-all-services"
              >
                View All Services 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">See what our clients say about our AI solutions</p>
          </div>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 opacity-60">
            {["Microsoft", "Google", "Amazon", "Apple", "IBM", "NVIDIA"].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">{company}</span>
              </div>
            ))}
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
