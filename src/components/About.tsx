import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Target, Eye, Award, Users, Globe, Heart } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest quality standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do, and we work to exceed their expectations.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace innovation and technology to deliver cutting-edge solutions for modern challenges.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business dealings.",
    },
  ];

  const divisions = [
    {
      title: "IT Consultancy",
      description: "Based in Accra, our IT division specializes in providing comprehensive technology solutions, from computer hardware to digital training and infrastructure setup.",
      services: ["Computer Labs", "Training Programs", "Digital Marketing", "IT Infrastructure"],
    },
    {
      title: "Facility Management",
      description: "We create optimal working and living environments through comprehensive facility management services across Ghana.",
      services: ["Cleaning Services", "HVAC Maintenance", "Security Systems", "Emergency Planning"],
    },
    {
      title: "Agriculture",
      description: "Located in the Volta region, we're committed to achieving Zero Hunger in Africa through farmer training and sustainable agricultural practices.",
      services: ["Farmer Training", "Commercial Farming", "Product Procurement", "Storage Solutions"],
    },
  ];

  const timeline = [
    {
      year: "Foundation",
      title: "NAKPRI Established",
      description: "Started our journey with a vision to provide comprehensive solutions across multiple sectors in Ghana.",
    },
    {
      year: "Expansion",
      title: "Multi-Sector Growth",
      description: "Expanded operations to include IT Consultancy, Facility Management, and Agriculture divisions.",
    },
    {
      year: "Present",
      title: "Leading Provider",
      description: "Serving hundreds of clients across public and private sectors, making a significant impact in communities.",
    },
    {
      year: "Future",
      title: "Vision 2030",
      description: "Aiming to be the leading comprehensive service provider in West Africa, driving sustainable development.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-emerald-600 mb-4">
              About NAKPRI
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              NAKPRI is a comprehensive service provider committed to excellence across IT Consultancy, 
              Facility Management, and Agriculture. Based in Ghana, we empower businesses and communities 
              to thrive through innovative solutions and dedicated service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632858265907-961f1454ccf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjMzNDgxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NAKPRI Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4">
                NAKPRI is more than just a company – we are partners in progress, dedicated to transforming 
                Ghana's business landscape and agricultural sector. Our diverse portfolio of services reflects 
                our commitment to addressing the multifaceted needs of modern organizations and communities.
              </p>
              <p className="text-gray-600">
                With locations in Accra and the Volta region, we combine local expertise with international 
                standards to deliver exceptional results. Our team of dedicated professionals brings together 
                years of experience and a passion for making a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-emerald-100">
              <CardHeader>
                <Target className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide comprehensive, innovative, and sustainable solutions across IT, facility management, 
                  and agriculture, empowering businesses and communities to achieve their full potential while 
                  contributing to Ghana's economic growth and food security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-100">
              <CardHeader>
                <Eye className="w-12 h-12 text-emerald-600 mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading comprehensive service provider in West Africa, recognized for excellence, 
                  innovation, and positive impact on society. We envision a future where technology, efficient 
                  facilities, and sustainable agriculture work together to create thriving communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="w-12 h-12 text-emerald-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">
            Our Divisions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-600">{division.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{division.description}</p>
                  <h4 className="text-gray-900 mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {division.services.map((service, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                  {item.year}
                </div>
                <h3 className="text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-emerald-200" style={{ width: 'calc(100% - 2rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">
            Ready to Work With Us?
          </h2>
          <p className="mb-8">
            Whether you need IT solutions, facility management services, or agricultural support, 
            we're here to help. Let's build a better future together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
