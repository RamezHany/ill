import { ArrowRight, MessageSquare, BarChart3, FileSpreadsheet, Trello, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "automated-messaging",
    title: "Customer Response Automation",
    description: "Cut response times by 80% with automated messaging. Improve customer satisfaction while reducing support costs.",
    icon: MessageSquare,
  },
  {
    id: "business-operations",
    title: "Operations Streamlining",
    description: "Reduce operational costs by 40% with our integrated business process solutions. Centralize and optimize your workflows.",
    icon: FileSpreadsheet,
  },
  {
    id: "data-insights",
    title: "Business Intelligence",
    description: "Make data-driven decisions that increase profitability. Turn your business data into actionable insights.",
    icon: BarChart3,
  },
  {
    id: "online-forms",
    title: "Smart Forms & Workflows",
    description: "Eliminate manual data entry costs with automated form processing. Connect directly to your business tools.",
    icon: FileSpreadsheet,
  },
  {
    id: "project-organization",
    title: "Project Efficiency Tools",
    description: "Boost project completion rates by 50% with our streamlined project management solutions.",
    icon: Trello,
  },
  {
    id: "process-automation",
    title: "Cost-Saving Automation",
    description: "Reduce operational costs by 60% through smart automation of repetitive tasks. Minimize errors and maximize efficiency.",
    icon: Zap,
  },
];

export const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions That Drive Business Growth</h2>
          <p className="text-lg text-gray-300">
            Our services are designed to deliver measurable ROI through improved efficiency, reduced costs, and streamlined operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="p-6 card-gradient hover:scale-105 transition-transform duration-300">
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button 
                onClick={() => navigate(`/service/${service.id}`)}
                className="text-secondary flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};