import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export function Projects() {
  const pastEvents = [
    {
      id: 1,
      title: "IT Training Workshop for Youth",
      category: "IT Consultancy",
      date: "August 15-20, 2024",
      location: "Accra, Ghana",
      participants: 150,
      image: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjMzMTI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A comprehensive 5-day workshop training young people in graphic design, web development, and social media management. Participants received hands-on training and certification.",
      achievements: [
        "150 youth trained in digital skills",
        "100% completion rate",
        "85% of participants secured internships or freelance work",
      ],
    },
    {
      id: 2,
      title: "Computer Laboratory Setup - St. Mary's School",
      category: "IT Consultancy",
      date: "July 2024",
      location: "Kumasi, Ghana",
      participants: 500,
      image: "https://images.unsplash.com/photo-1667998371385-56f259f76d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMzY0NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Successfully installed and configured a modern computer laboratory with 50 workstations for St. Mary's Secondary School, providing students with access to modern IT facilities.",
      achievements: [
        "50 new workstations installed",
        "Network infrastructure setup",
        "Staff training completed",
        "500+ students benefiting",
      ],
    },
    {
      id: 3,
      title: "Facility Management Excellence Conference",
      category: "Facility Management",
      date: "September 2024",
      location: "Accra Convention Centre",
      participants: 200,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjMzMDEyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Organized a national conference bringing together facility management professionals to discuss best practices, sustainability, and innovation in the industry.",
      achievements: [
        "200+ industry professionals attended",
        "15 expert speakers",
        "Partnership agreements signed",
        "New standards adopted",
      ],
    },
    {
      id: 4,
      title: "Zero Hunger Farmer Training Program",
      category: "Agriculture",
      date: "June-August 2024",
      location: "Volta Region",
      participants: 300,
      image: "https://images.unsplash.com/photo-1729589985474-7df55c987ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBmYXJtaW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYzMzY1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A 3-month intensive program training smallholder farmers in modern agricultural techniques, tool usage, and sustainable farming practices.",
      achievements: [
        "300 farmers trained",
        "40% increase in crop yields reported",
        "Sustainable farming techniques adopted",
        "Community farming groups formed",
      ],
    },
    {
      id: 5,
      title: "Corporate Office Renovation Project",
      category: "Facility Management",
      date: "May 2024",
      location: "Ghana Commercial Bank HQ",
      participants: 800,
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjg1ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Complete renovation and facility upgrade of Ghana Commercial Bank headquarters, including HVAC systems, security systems, and modern workspace design.",
      achievements: [
        "15,000 sq ft renovated",
        "Energy efficiency improved by 35%",
        "Modern security systems installed",
        "Completed 2 weeks ahead of schedule",
      ],
    },
  ];

  const futureEvents = [
    {
      id: 6,
      title: "Digital Marketing Masterclass 2025",
      category: "IT Consultancy",
      date: "January 20-25, 2025",
      location: "Accra Digital Hub",
      expectedParticipants: 200,
      image: "https://images.unsplash.com/photo-1758691461888-b74515208d7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGNvbnN1bHRhbmN5JTIwb2ZmaWNlfGVufDF8fHx8MTc2MzM2NDc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "An intensive 5-day masterclass covering advanced digital marketing strategies, social media management, SEO, and content creation for businesses and entrepreneurs.",
      highlights: [
        "Expert-led training sessions",
        "Hands-on practical projects",
        "Industry certifications",
        "Networking opportunities",
      ],
      status: "Registration Open",
    },
    {
      id: 7,
      title: "Smart Facility Management Expo",
      category: "Facility Management",
      date: "February 15-17, 2025",
      location: "Accra International Conference Centre",
      expectedParticipants: 500,
      image: "https://images.unsplash.com/photo-1719005764706-9805b8f8eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0eSUyMG1hbmFnZW1lbnQlMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjMzNjQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "West Africa's premier facility management exhibition showcasing the latest technologies, sustainable practices, and innovative solutions for modern facilities.",
      highlights: [
        "50+ exhibitors",
        "Live demonstrations",
        "Panel discussions",
        "Technology showcase",
      ],
      status: "Early Bird Registration",
    },
    {
      id: 8,
      title: "Agricultural Youth Empowerment Program",
      category: "Agriculture",
      date: "March-May 2025",
      location: "Volta Region",
      expectedParticipants: 400,
      image: "https://images.unsplash.com/photo-1758614312118-4f7cd900ab26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBHaGFuYXxlbnwxfHx8fDE3NjMzNjQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A 3-month program designed to attract young people to agriculture through modern farming techniques, agribusiness training, and entrepreneurship development.",
      highlights: [
        "Modern farming techniques",
        "Agribusiness training",
        "Startup funding opportunities",
        "Mentorship program",
      ],
      status: "Coming Soon",
    },
    {
      id: 9,
      title: "Programming Bootcamp for Beginners",
      category: "IT Consultancy",
      date: "April 1-30, 2025",
      location: "Online & Accra Hub",
      expectedParticipants: 300,
      image: "https://images.unsplash.com/photo-1760420940953-3958ad9f6287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwc2Vzc2lvbnxlbnwxfHx8fDE3NjMzMTI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "An intensive one-month bootcamp teaching web development fundamentals including HTML, CSS, JavaScript, and React, with job placement assistance.",
      highlights: [
        "Beginner-friendly curriculum",
        "Project-based learning",
        "Job placement support",
        "Hybrid learning format",
      ],
      status: "Registration Opens Soon",
    },
    {
      id: 10,
      title: "Sustainable Farming Conference 2025",
      category: "Agriculture",
      date: "June 10-12, 2025",
      location: "Ho, Volta Region",
      expectedParticipants: 350,
      image: "https://images.unsplash.com/photo-1697470506541-33cca44496e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwY3JvcHMlMjBBZnJpY2F8ZW58MXx8fHwxNzYzMzY0NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A major regional conference focusing on sustainable agricultural practices, climate-smart farming, and innovation in African agriculture.",
      highlights: [
        "International speakers",
        "Farm tours",
        "Innovation showcase",
        "Policy discussions",
      ],
      status: "Save the Date",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "IT Consultancy":
        return "bg-blue-100 text-blue-800";
      case "Facility Management":
        return "bg-purple-100 text-purple-800";
      case "Agriculture":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Registration Open":
        return "bg-emerald-100 text-emerald-800";
      case "Early Bird Registration":
        return "bg-blue-100 text-blue-800";
      case "Coming Soon":
        return "bg-orange-100 text-orange-800";
      case "Registration Opens Soon":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-emerald-600 mb-4">
              Our Projects & Events
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our completed projects and upcoming events. From IT training workshops to agricultural 
              programs and facility management conferences, we're making a difference across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Projects</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {futureEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>Expected: {event.expectedParticipants} participants</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="border-t pt-4">
                        <h4 className="text-gray-900 mb-2">Highlights:</h4>
                        <ul className="space-y-1">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="text-emerald-600 mr-2">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Projects */}
            <TabsContent value="past">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gray-800 text-white">
                          Completed
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="mb-3">
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle>{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2 text-emerald-600" />
                          <span>{event.participants} participants</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="border-t pt-4">
                        <h4 className="text-gray-900 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="text-emerald-600 mr-2">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-2">1,150+</div>
              <p>People Trained</p>
            </div>
            <div className="text-center">
              <div className="mb-2">50+</div>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="mb-2">300+</div>
              <p>Farmers Empowered</p>
            </div>
            <div className="text-center">
              <div className="mb-2">100+</div>
              <p>Facilities Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">
            Interested in Our Events?
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest projects and events. Contact us to learn more about upcoming 
            opportunities or to discuss partnership possibilities.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
