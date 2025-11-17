import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Sparkles, 
  Wind, 
  Bug, 
  Trash2, 
  Shield, 
  LayoutGrid,
  Hammer,
  Flame,
  Server,
  AlertTriangle,
  TreePine,
  Zap
} from "lucide-react";

export function FacilityManagement() {
  const objectives = [
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Implement streamlined and efficient operational processes for prompt and effective facility management services.",
    },
    {
      icon: Shield,
      title: "Safety and Compliance",
      description: "Prioritize safety in all operations, ensuring compliance with industry standards, regulations, and ethical practices.",
    },
    {
      icon: TreePine,
      title: "Environmental Sustainability",
      description: "Integrate sustainable practices, aiming to reduce environmental impact and promote eco-friendly solutions.",
    },
    {
      icon: Sparkles,
      title: "Client Satisfaction",
      description: "Achieve high levels of client satisfaction through exceptional service delivery and responsiveness.",
    },
  ];

  const services = [
    {
      icon: Sparkles,
      title: "Cleaning and Maintenance",
      description: "Comprehensive cleaning services for homes, offices, and commercial spaces. Routine maintenance to preserve structural integrity.",
    },
    {
      icon: Wind,
      title: "HVAC System Maintenance",
      description: "Ensure optimal performance of ventilation and air conditioning systems through regular inspections and maintenance.",
    },
    {
      icon: Bug,
      title: "Pest Control",
      description: "Comprehensive pest control measures to safeguard premises from infestations and protect occupant well-being.",
    },
    {
      icon: Trash2,
      title: "Waste Management",
      description: "Efficient waste management solutions, including recycling programs, waste disposal, and maintaining clean receptacles.",
    },
    {
      icon: Shield,
      title: "Security Systems Management",
      description: "Oversee and maintain security systems including surveillance cameras, access control, and alarms.",
    },
    {
      icon: LayoutGrid,
      title: "Space Planning and Utilization",
      description: "Optimize layout and functionality of spaces through strategic planning for efficient resource utilization.",
    },
    {
      icon: Hammer,
      title: "Carpentry and Furniture Maintenance",
      description: "Carpentry services for repair, maintenance, or installation of furniture, fixtures, and fittings.",
    },
    {
      icon: Flame,
      title: "Fire Safety Inspections",
      description: "Conduct fire safety inspections, install and maintain fire safety equipment, and implement safety protocols.",
    },
    {
      icon: Server,
      title: "Technology Infrastructure Maintenance",
      description: "Manage and maintain technology infrastructure including servers, networking equipment, and communication systems.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Planning",
      description: "Develop and implement emergency response plans, including evacuation procedures for enhanced safety.",
    },
    {
      icon: TreePine,
      title: "Landscaping and Grounds Maintenance",
      description: "Enhance aesthetic appeal of outdoor spaces through landscaping, lawn care, and routine grounds maintenance.",
    },
    {
      icon: Zap,
      title: "Energy Efficiency Audits",
      description: "Conduct energy audits to identify areas for improvement and implement measures to reduce operational costs.",
    },
  ];

  const publicMarkets = [
    "Banks",
    "Hospitals",
    "Schools",
    "Markets",
    "Event Centers",
    "Industries",
    "Offices",
    "State Housing Management",
  ];

  const privateMarkets = [
    "Supermarkets",
    "Private Hospitals",
    "Housing Management",
    "Real Estate Management",
    "Churches",
    "Factories",
  ];

  return (
    <section id="facility-management" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">
            Facility Management
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Nakpri Facility Management Company is committed to creating optimal working and living environments 
            by meticulously assessing the structural integrity and vitality of spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At Nakpri Facility Management, our mission is to establish a meaningful connection between 
              individuals and their surroundings.
            </p>
            <h3 className="text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              Cultivating Excellence in Facility Management: Striving to be the Leading Provider of 
              Innovative Solutions, Enriching Environments, and Elevating the Quality of Living and 
              Working Spaces for a Sustainable Future.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719005764706-9805b8f8eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1hbmFnZW1lbnQlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjMzNjQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Facility Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">
            Our Objectives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <objective.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <CardTitle>{objective.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">
            Comprehensive Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-emerald-600 mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 mb-8 text-center">
            Target Markets
          </h3>
          <Tabs defaultValue="public" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="public">Public Facilities</TabsTrigger>
              <TabsTrigger value="private">Private Facilities</TabsTrigger>
            </TabsList>
            <TabsContent value="public" className="mt-8">
              <div className="grid md:grid-cols-4 gap-4">
                {publicMarkets.map((market, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <p className="text-gray-700">{market}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="private" className="mt-8">
              <div className="grid md:grid-cols-3 gap-4">
                {privateMarkets.map((market, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <p className="text-gray-700">{market}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
