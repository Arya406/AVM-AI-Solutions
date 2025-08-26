import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  ServerCog, 
  MessageSquare, 
  Eye, 
  Wand2, 
  CloudUpload, 
  ArrowRight, 
  Check 
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance to identify AI opportunities, assess feasibility, and develop comprehensive roadmaps for successful AI implementation in your organization.",
    features: [
      "AI Strategy Development",
      "Feasibility Analysis",
      "ROI Assessment",
      "Implementation Planning"
    ]
  },
  {
    icon: ServerCog,
    title: "ML Model Development",
    description: "Custom machine learning models built from scratch, trained on your data, and optimized for your specific business requirements and performance metrics.",
    features: [
      "Custom Model Architecture",
      "Data Preprocessing",
      "Model Training & Validation",
      "Performance Optimization"
    ]
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding to enhance customer interactions and automate processes.",
    features: [
      "Text Analytics",
      "Sentiment Analysis",
      "Chatbot Development",
      "Language Translation"
    ]
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Cutting-edge computer vision systems for image recognition, object detection, quality control, and automated visual inspection across various industries.",
    features: [
      "Object Detection",
      "Image Classification",
      "Facial Recognition",
      "Quality Control"
    ]
  },
  {
    icon: Wand2,
    title: "Generative AI",
    description: "Revolutionary generative AI solutions for content creation, code generation, design automation, and creative applications using state-of-the-art models.",
    features: [
      "Content Generation",
      "Code Generation",
      "Image Synthesis",
      "Creative Applications"
    ]
  },
  {
    icon: CloudUpload,
    title: "Deployment & Maintenance",
    description: "End-to-end deployment services and ongoing maintenance to ensure your AI solutions perform optimally in production environments with continuous monitoring.",
    features: [
      "Cloud Deployment",
      "Model Monitoring",
      "Performance Tuning",
      "24/7 Support"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-light-bg to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Our AI Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to transform your business operations and drive innovation across every aspect of your organization.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-primary to-accent text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
              <p className="text-lg mb-6 opacity-90">Let's discuss how our AI solutions can drive your business forward</p>
              <Link href="/consultation">
                <Button 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  data-testid="button-schedule-consultation"
                >
                  Schedule Consultation 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
