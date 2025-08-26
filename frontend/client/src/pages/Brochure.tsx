import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";
import { 
  Download, 
  FileText, 
  TrendingUp, 
  Users, 
  MapIcon, 
  DollarSign, 
  Video, 
  Calculator, 
  Calendar,
  Bot,
  CheckCircle,
  ServerCog,
  ArrowRight
} from "lucide-react";

const brochureRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(1, "Please select an industry")
});

type BrochureRequestData = z.infer<typeof brochureRequestSchema>;

const industries = [
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance & Banking" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "technology", label: "Technology" },
  { value: "education", label: "Education" },
  { value: "other", label: "Other" }
];

const brochureFeatures = [
  {
    icon: ServerCog,
    title: "Comprehensive Service Overview",
    description: "Detailed breakdown of all our AI services including consulting, development, and deployment solutions."
  },
  {
    icon: TrendingUp,
    title: "Success Stories & Case Studies",
    description: "Real-world examples of how we've helped businesses achieve measurable results with AI implementation."
  },
  {
    icon: Users,
    title: "Expert Team Profiles",
    description: "Meet our world-class AI experts and learn about their experience and specializations."
  },
  {
    icon: MapIcon,
    title: "AI Transformation Roadmap",
    description: "Step-by-step guide to implementing AI in your organization from strategy to deployment."
  },
  {
    icon: DollarSign,
    title: "ROI Calculator & Pricing Guide",
    description: "Tools to estimate the return on investment for AI projects and transparent pricing information."
  }
];

const additionalResources = [
  {
    icon: Video,
    title: "Video Presentation",
    description: "Watch our 15-minute overview presentation about AI transformation strategies.",
    cta: "Watch Now"
  },
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Interactive tool to estimate the potential return on investment for your AI project.",
    cta: "Calculate ROI"
  },
  {
    icon: Calendar,
    title: "Free Consultation",
    description: "Schedule a personalized consultation to discuss your specific AI needs and opportunities.",
    cta: "Schedule Now",
    link: "/consultation"
  }
];

export default function Brochure() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<BrochureRequestData>({
    resolver: zodResolver(brochureRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: ""
    }
  });

  const brochureMutation = useMutation({
    mutationFn: async (data: BrochureRequestData) => {
      return apiRequest("POST", "/api/brochure", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Brochure Download Started",
        description: "Your download should begin shortly. Check your downloads folder.",
      });
      // In a real application, this would trigger a file download
      setTimeout(() => {
        // Simulate download
        const link = document.createElement('a');
        link.href = '#'; // In real app, this would be the actual file URL
        link.download = 'AI-Solutions-Pro-Company-Brochure.pdf';
        link.click();
      }, 1000);
    },
    onError: (error) => {
      toast({
        title: "Download Failed",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: BrochureRequestData) => {
    brochureMutation.mutate(data);
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-light-bg to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Company Brochure</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive company brochure to learn more about our AI solutions, success stories, and how we can help transform your business.
            </p>
          </div>
          
          {/* Brochure Preview */}
          <Card className="overflow-hidden mb-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Brochure Cover */}
                <div className="bg-gradient-to-br from-primary to-accent p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 tech-pattern opacity-20" />
                  <div className="relative z-10">
                    <div className="mb-8">
                      <Bot className="h-16 w-16 mb-4" />
                      <h2 className="text-2xl font-bold">AI Solutions Pro</h2>
                      <p className="text-blue-100">End-to-End AI Solutions</p>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">Transform Your Business with AI</h3>
                    <p className="text-blue-100 mb-6">Comprehensive guide to our services, success stories, and AI transformation roadmap.</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>200+ Successful AI Projects</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>Fortune 500 Trusted Partner</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        <span>40% Average Efficiency Improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Brochure Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-secondary mb-6">What's Inside Our Brochure</h3>
                  
                  <div className="space-y-6">
                    {brochureFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                          <feature.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Download Section */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4">Download Our Company Brochure</h3>
                <p className="text-gray-600 mb-8">Get instant access to our 24-page comprehensive brochure packed with insights, case studies, and actionable AI strategies.</p>
                
                {!isSubmitted ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  placeholder="Full Name" 
                                  {...field} 
                                  data-testid="input-brochure-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Email Address" 
                                  {...field} 
                                  data-testid="input-brochure-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Company Name" 
                                {...field} 
                                data-testid="input-brochure-company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-brochure-industry">
                                  <SelectValue placeholder="Select Your Industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry.value} value={industry.value}>
                                    {industry.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={brochureMutation.isPending}
                        data-testid="button-download-brochure"
                      >
                        {brochureMutation.isPending ? (
                          "Processing..."
                        ) : (
                          <>
                            <Download className="mr-2 h-5 w-5" />
                            Download Brochure (PDF, 2.3MB)
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Download Started!</h4>
                    <p className="text-gray-600">Your brochure download should begin shortly. Check your downloads folder.</p>
                  </div>
                )}
                
                <p className="text-xs text-gray-500 mt-4">By downloading, you agree to receive updates about our AI solutions. Unsubscribe anytime.</p>
              </CardContent>
            </Card>
            
            {/* Additional Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">24 Pages</h4>
                  <p className="text-gray-600 text-sm">Comprehensive coverage</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">High Quality</h4>
                  <p className="text-gray-600 text-sm">Professional design</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-neon rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">Updated 2024</h4>
                  <p className="text-gray-600 text-sm">Latest information</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Resources */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalResources.map((resource, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-secondary mb-2">{resource.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    {resource.link ? (
                      <Link href={resource.link}>
                        <Button 
                          variant="outline" 
                          className="text-primary hover:text-primary/90 font-medium text-sm"
                          data-testid={`button-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {resource.cta} <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="text-primary hover:text-primary/90 font-medium text-sm"
                        data-testid={`button-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {resource.cta} <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
