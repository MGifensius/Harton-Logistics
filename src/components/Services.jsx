import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Freight Forwarding",
      description: "Comprehensive air, sea, and land freight solutions with global coverage and competitive pricing."
    },
    {
      title: "Integrated Supply Chain Solutions",
      description: "End-to-end supply chain management optimizing efficiency and reducing operational costs."
    },
    {
      title: "Warehouse & Distribution",
      description: "Strategic warehousing solutions with efficient distribution networks across major regions."
    },
    {
      title: "Last-Mile Delivery",
      description: "Reliable final delivery services ensuring timely and secure product arrival to end customers."
    },
    {
      title: "Cold Chain Logistics",
      description: "Temperature-controlled logistics for perishable goods with real-time monitoring."
    },
    {
      title: "Customs Brokerage",
      description: "Expert customs clearance services ensuring compliance and smooth cross-border transactions."
    },
    {
      title: "Project Cargo Management",
      description: "Specialized handling for oversized and complex project cargo with precision planning."
    }
  ];

  const slides = [
    // Slide 1: Services 1, 2, 3
    [services[0], services[1], services[2]],
    // Slide 2: Services 4, 5, 6
    [services[3], services[4], services[5]],
    // Slide 3: Service 7 + 2 Coming Soon
    [
      services[6],
      { title: "Coming Soon", description: "We're constantly expanding our services to better serve your logistics needs.", empty: true },
      { title: "Coming Soon", description: "New innovative solutions are in development to enhance your supply chain.", empty: true }
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="service" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-blue-200">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            What We Deliver
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Cards with Responsive Height */}
          <div className="relative min-h-[420px] sm:min-h-[450px] md:min-h-[400px] mb-8 sm:mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
              >
                {slides[currentSlide].map((service, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border transition-all duration-300 flex flex-col ${
                      service.empty 
                        ? "bg-gradient-to-br from-gray-50 to-gray-100 border-dashed border-gray-300" 
                        : "bg-white border-gray-100 hover:shadow-xl hover:scale-[1.02]"
                    }`}
                  >
                    {/* Service Number or Coming Soon Icon */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                      service.empty 
                        ? "bg-gradient-to-br from-gray-400 to-gray-500" 
                        : "bg-gradient-to-br from-blue-950 to-blue-800"
                    }`}>
                      {service.empty ? (
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      ) : (
                        <span className="text-white font-bold text-base sm:text-lg">
                          {currentSlide * 3 + index + 1}
                        </span>
                      )}
                    </div>
                    
                    {/* Service Content */}
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 ${
                      service.empty ? "text-gray-600" : "text-gray-900"
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed flex-1 ${
                      service.empty ? "text-gray-500" : "text-gray-600"
                    }`}>
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2 sm:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-blue-950 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
            Need a customized logistics solution?
          </p>
          <button className="bg-blue-900 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-950 transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base">
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
}