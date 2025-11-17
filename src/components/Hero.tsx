import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-emerald-600 mb-4">
              NAKPRI
            </h1>
            <h2 className="text-gray-900 mb-6">
              Your Complete Solution Provider
            </h2>
            <p className="text-gray-600 mb-8">
              Based in Accra, Ghana, NAKPRI provides comprehensive services across IT Consultancy, 
              Facility Management, and Agriculture. We are committed to excellence and innovation 
              in everything we do, empowering businesses and communities to thrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection("it-consultancy")} size="lg">
                Explore IT Services
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjg1ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="NAKPRI office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
