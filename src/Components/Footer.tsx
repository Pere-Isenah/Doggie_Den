import { FaPrint, FaPhone } from 'react-icons/fa';
import { BsCreditCard2Front } from 'react-icons/bs';
import { SiGooglepay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-primary-green text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-4">
              🐕 DoggieDen
            </h2>
            <p className="text-sm opacity-90">
              Making your pets' lives better through professional care and training services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Dog Breeding</a></li>
              <li><a href="#" className="hover:opacity-80">Pet Grooming</a></li>
              <li><a href="#" className="hover:opacity-80">Veterinary Care</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Blog</a></li>
              <li><a href="#" className="hover:opacity-80">FAQs</a></li>
              <li><a href="#" className="hover:opacity-80">Pet Care Tips</a></li>
              <li><a href="#" className="hover:opacity-80">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-80">Cookie Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and payment methods */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2024 DoggieDen. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <FaPrint className="text-2xl" />
              <BsCreditCard2Front className="text-2xl" />
              <FaPhone className="text-2xl" />
              <SiGooglepay className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;