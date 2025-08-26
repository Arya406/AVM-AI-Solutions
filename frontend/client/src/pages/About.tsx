import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Award, 
  Rocket, 
  Handshake, 
  Clock, 
  Shield, 
  Users,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Alex Chen",
    role: "CEO & Founder",
    description: "PhD in Machine Learning, Former Google AI Research",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Sarah Martinez",
    role: "Chief Technology Officer",
    description: "MS Computer Vision, Former Tesla Autopilot Team",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Michael Thompson",
    role: "Head of AI Research",
    description: "PhD NLP, Former Microsoft Research",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Dr. Lisa Wang",
    role: "Lead Data Scientist",
    description: "PhD Statistics, Former Amazon AI",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
  }
];

const benefits = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "200+ successful AI projects delivered with 98% client satisfaction rate"
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "Latest AI frameworks and tools for optimal performance and scalability"
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "From consultation to deployment and ongoing maintenance"
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Average project delivery 40% faster than industry standards"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security and compliance with industry standards"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Assigned project team with direct communication and regular updates"
  }
];

export default function About() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About AI Solutions Pro</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're a team of AI experts passionate about transforming businesses through cutting-edge artificial intelligence solutions.
            </p>
          </div>
          
          {/* Company Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fadeInLeft">
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2018, AI Solutions Pro emerged from a vision to democratize artificial intelligence and make it accessible to businesses of all sizes. Our journey began when a group of AI researchers and industry veterans recognized the gap between cutting-edge AI research and practical business applications.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Today, we've successfully delivered over 200+ AI projects across various industries, helping companies increase efficiency by an average of 40% while reducing operational costs significantly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to excellence and innovation has made us a trusted partner for Fortune 500 companies and emerging startups alike.
                </p>
              </div>
              <div className="animate-fadeInRight">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern AI office workspace" 
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Mission & Vision */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg mb-6 flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses worldwide with intelligent solutions that drive innovation, efficiency, and sustainable growth through the strategic implementation of artificial intelligence technologies.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-lg mb-6 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in AI transformation, creating a future where artificial intelligence seamlessly integrates with human expertise to solve the world's most complex challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">World-class AI experts dedicated to your success</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-bold text-secondary mb-2">{member.name}</h3>
                    <p className="text-accent font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href="#"
                        className="text-gray-400 hover:text-primary transition-colors"
                        data-testid={`team-member-${index}-linkedin`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-primary transition-colors"
                        data-testid={`team-member-${index}-twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Why Choose AI Solutions Pro?</h2>
                <p className="text-lg text-gray-600">Here's what sets us apart from other AI service providers</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
