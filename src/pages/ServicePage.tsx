import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Separator } from "@/components/Separator";
import { MessageSquare, BarChart3, FileSpreadsheet, Trello, Zap } from "lucide-react";

const services = {
  "automated-messaging": {
    title: "Automated Messaging",
    description: "Set up systems to reply instantly to customer inquiries, ensuring consistent and efficient communication.",
    icon: MessageSquare,
    benefits: [
      "24/7 Customer Support",
      "Consistent Brand Voice",
      "Reduced Response Time",
      "Scalable Communication",
    ],
    features: [
      "AI-Powered Responses",
      "Custom Message Templates",
      "Multi-Channel Integration",
      "Analytics Dashboard",
    ],
  },
  "business-operations": {
    title: "Business Operations Software",
    description: "Simplify and optimize your operations with tools that bring all your business processes together in one place.",
    icon: FileSpreadsheet,
    benefits: [
      "Streamlined Workflows",
      "Improved Efficiency",
      "Better Resource Management",
      "Real-time Reporting",
    ],
    features: [
      "Centralized Dashboard",
      "Process Automation",
      "Resource Planning",
      "Performance Tracking",
    ],
  },
  "data-insights": {
    title: "Data Insights",
    description: "Build systems to collect, organize, and analyze data, helping you make smarter business decisions.",
    icon: BarChart3,
    benefits: [
      "Data-Driven Decisions",
      "Predictive Analytics",
      "Performance Optimization",
      "Market Intelligence",
    ],
    features: [
      "Custom Reports",
      "Data Visualization",
      "Trend Analysis",
      "Automated Insights",
    ],
  },
  "online-forms": {
    title: "Online Forms & Integration",
    description: "Create digital forms that connect directly to your tools like spreadsheets, or email for seamless data management.",
    icon: FileSpreadsheet,
    benefits: [
      "Paperless Operations",
      "Automated Data Entry",
      "Improved Accuracy",
      "Faster Processing",
    ],
    features: [
      "Custom Form Builder",
      "Multiple Integration Options",
      "Automated Workflows",
      "Data Validation",
    ],
  },
  "project-organization": {
    title: "Project Organization Tools",
    description: "Implement systems to plan, monitor, and complete projects with better efficiency.",
    icon: Trello,
    benefits: [
      "Better Project Visibility",
      "Improved Team Collaboration",
      "Deadline Management",
      "Resource Optimization",
    ],
    features: [
      "Task Management",
      "Team Collaboration",
      "Progress Tracking",
      "Resource Allocation",
    ],
  },
  "process-automation": {
    title: "Process Automation",
    description: "Automate routine tasks to save time, cut costs, and reduce mistakes.",
    icon: Zap,
    benefits: [
      "Reduced Manual Work",
      "Increased Productivity",
      "Cost Savings",
      "Error Reduction",
    ],
    features: [
      "Workflow Automation",
      "Integration Capabilities",
      "Custom Triggers",
      "Performance Monitoring",
    ],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Icon className="w-12 h-12 text-secondary" />
              <h1 className="text-4xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg relative group overflow-hidden"
              onClick={() => window.open('https://calendly.com/illustrav/free-business-consultation?month=2024-12', '_blank')}
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass p-8">
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Separator />
      <Footer />
    </div>
  );
};

export default ServicePage;