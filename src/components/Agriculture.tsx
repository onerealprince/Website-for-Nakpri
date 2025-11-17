import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Sprout, ShoppingCart, Package, Target, Heart, TrendingUp } from "lucide-react";

export function Agriculture() {
  const services = [
    {
      icon: GraduationCap,
      title: "Training Farmers",
      items: [
        "Contemporary farming knowledge and techniques",
        "Proper usage of farm tools and machinery",
        "Skill acquisition for modern agriculture",
      ],
    },
    {
      icon: Sprout,
      title: "Crop Farms",
      items: [
        "Cassava",
        "Maize",
        "Yam",
        "Soybeans",
        "Rice",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Buying Farm Products",
      items: [
        "Yam, Pepper, Okra",
        "Maize, Millet, Rice",
        "Beans (all types)",
        "Groundnut",
      ],
    },
    {
      icon: Package,
      title: "Storage & Preservation",
      items: [
        "Proper storage facilities",
        "Quality maintenance systems",
        "Preservation techniques",
        "Reduced post-harvest losses",
      ],
    },
  ];

  const impactGoals = [
    {
      icon: Target,
      title: "Capacity Building",
      description: "Developing more skilled farmers through comprehensive training and practical experience.",
    },
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Providing reliable markets for farmers' produce, ensuring fair prices and economic sustainability.",
    },
    {
      icon: Heart,
      title: "Food Security",
      description: "Contributing to food security by increasing production and reducing post-harvest losses.",
    },
  ];

  return (
    <section id="agriculture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">
            Agriculture
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nakpri Agricultural Africa is specialized in farm development, located in the Volta region of Ghana. 
            We are focused on achieving Zero Hunger in Africa through farmer training, commercial farm management, 
            and promoting agriculture among youth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758614312118-4f7cd900ab26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjBHaGFuYXxlbnwxfHx8fDE3NjMzNjQ3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Agriculture Farm"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-gray-900 mb-4">
              Our Mission: Zero Hunger
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to ensuring there is more food in Africa by developing more farmers through 
              skill acquisition and commercial farm management. It is crucial to build a love for agriculture 
              in young people to secure the future of farming.
            </p>
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h4 className="text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Volta Region, Northern Ghana</p>
              <h4 className="text-gray-900 mt-4 mb-2">Specialization</h4>
              <p className="text-gray-600">Farm Development & Agricultural Services</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-gray-900 mb-8 text-center">
            Impact Goals
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impactGoals.map((goal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <goal.icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <CardTitle>{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697470506541-33cca44496e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwY3JvcHMlMjBBZnJpY2F8ZW58MXx8fHwxNzYzMzY0NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Farming Crops"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-transparent flex items-center">
            <div className="max-w-2xl px-8 text-white">
              <h3 className="mb-4">
                Building the Future of Agriculture
              </h3>
              <p>
                Nakpri plays a crucial role in enhancing agricultural practices and contributing to the 
                food security goals of Ghana and potentially broader regions in Africa through training, 
                farm management, and market facilitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
