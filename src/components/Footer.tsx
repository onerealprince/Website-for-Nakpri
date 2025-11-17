import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="mb-4">NAKPRI</h3>
            <p className="text-gray-400">
              Your complete solution provider for IT Consultancy, Facility Management, and Agriculture in Ghana.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">IT Consultancy</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Computer Hardware</li>
              <li>Training & Education</li>
              <li>Digital Marketing</li>
              <li>Office Setup</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Facility Management</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cleaning Services</li>
              <li>HVAC Maintenance</li>
              <li>Security Systems</li>
              <li>Waste Management</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Agriculture</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Farmer Training</li>
              <li>Crop Farming</li>
              <li>Product Buying</li>
              <li>Storage Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-400">IT Consultancy: Accra, Ghana</p>
                    <p className="text-gray-400">Agriculture: Volta Region, Ghana</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-500 mr-3" />
                  <p className="text-gray-400">+233 XX XXX XXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-500 mr-3" />
                  <p className="text-gray-400">info@nakpri.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NAKPRI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
