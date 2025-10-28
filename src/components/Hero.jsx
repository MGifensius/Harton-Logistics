import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import BackgroundHeader from '../assets/Background-Header.mp4';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Preload video and handle loading states
    if (videoRef.current) {
      videoRef.current.preload = "auto";
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Optimized Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: 1000,
            willChange: 'transform'
          }}
        >
          <source src={BackgroundHeader} type="video/mp4" />
        </video>
        
        {/* Lighter overlay for better performance */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto text-center pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6"
          >
            Offering the Ultimate{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-600"
            >
              Enabler
            </motion.span>{" "}
            for Business{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800"
            >
              Growth
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed px-2"
          >
            Driving Indonesia's logistics transformation through technology,
            trust, and precision.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 hover:bg-blue-900 rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-all duration-200"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Simplified Scroll Indicator - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 sm:mt-16 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/60 rounded-full mt-2" />
              </div>
              <p className="text-white/60 text-xs font-light">Scroll to explore</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Reduced gradient overlays */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent z-5"></div>
    </section>
  );
}