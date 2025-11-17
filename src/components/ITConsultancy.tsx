import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Users, Palette, Briefcase, GraduationCap, Gamepad2 } from "lucide-react";

export function ITConsultancy() {
  const services = [
    {
      icon: Monitor,
      title: "Computer Hardware Solutions",
      description: "Top-quality computers and IT equipment for all your needs",
    },
    {
      icon: Users,
      title: "Media & Social Media Management",
      description: "Expert management of your digital presence and media",
    },
    {
      icon: Palette,
      title: "Graphic Design & Digital Marketing",
      description: "Creative solutions to enhance your brand visibility",
    },
    {
      icon: Briefcase,
      title: "Office Workstation Setup",
      description: "Complete IT infrastructure for your business",
    },
  ];

  const products = [
    { icon: Briefcase, title: "Office Desktop Computers", description: "Reliable desktops for business use" },
    { icon: Monitor, title: "Workstation Laptops", description: "High-performance computing solutions" },
    { icon: Briefcase, title: "Business Laptops & PCs", description: "Professional-grade equipment" },
    { icon: GraduationCap, title: "Student Laptops", description: "Affordable options for education" },
    { icon: Gamepad2, title: "Gaming Laptops", description: "High-end gaming performance" },
  ];

  return (
    <section id="it-consultancy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">
            IT Consultancy
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Welcome to Nakpri IT Consultancy, your one-stop solution for all things IT. 
            We specialize in building computer laboratories, providing top-quality computers, 
            and offering expert training to help individuals and businesses harness the power of IT tools effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691461888-b74515208d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRhbmN5JTIwb2ZmaWNlfGVufDF8fHx8MTc2MzM2NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="IT Consultancy Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-gray-900 mb-4">
              Comprehensive IT Services
            </h3>
            <p className="text-gray-600 mb-6">
              With a strong track record in training clients in areas like graphic design, programming, 
              and social media management, we are dedicated to empowering you with the skills and tools 
              necessary to thrive in today's digital world.
            </p>
            <p className="text-gray-600">
              Whether you need help managing your website, developing applications, or setting up a 
              full-fledged IT infrastructure, we've got you covered.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">
            Our IT Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-emerald-600 mb-4" />
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
            IT Equipment We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <product.icon className="w-10 h-10 text-emerald-600 mb-3" />
                  <h4 className="text-gray-900 mb-2">{product.title}</h4>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-emerald-50 rounded-lg text-center">
          <p className="text-gray-700">
            No matter your IT requirements, we're here to provide reliable solutions and exceptional service. 
            <span className="block mt-2">All your IT needs are in safe hands with us.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
