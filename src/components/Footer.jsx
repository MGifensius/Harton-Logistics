import LogoHarton from '../assets/Logo-Harton-2.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <img 
              src={LogoHarton} 
              alt="Harton Logistics" 
              className="h-6 sm:h-8 w-auto"
            />
            <div>
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#service" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs px-2">
            Driving Indonesia's logistics transformation through technology, trust, and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}