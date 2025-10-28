import { motion } from "framer-motion";
import { 
  Target, 
  Compass, 
  Star, 
  Shield, 
  Users, 
  TrendingUp,
  Award,
  Globe,
  CheckCircle
} from "lucide-react";

export default function VisionMission() {
  const visionMissionData = {
    vision: {
      icon: Target,
      title: "Our Vision",
      description: "To be Indonesia's most trusted logistics partner – where businesses move freely and confidently without worrying about permissions, compliance, or delivery efficiency. We empower companies to compete stronger and trade smarter through precise, reliable, and transparent logistics solutions.",
      color: "blue"
    },
    mission: {
      icon: Compass,
      title: "Our Mission",
      description: "We provide end-to-end logistics and regulatory support to ensure smooth, compliant, and efficient operations. With a focus on excellence, integrity, and reliability, we simplify complexities so businesses can focus on growth while we handle the movement.",
      color: "blue"
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "Over a decade of experience in customs clearance, permissions handling, and regulatory compliance.",
      color: "indigo"
    },
    {
      icon: Users,
      title: "End-to-End Solutions",
      description: "From permissions and customs to stevedoring, trucking, and warehousing - we handle it all.",
      color: "indigo"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of successfully handling complex logistics challenges and detained goods.",
      color: "indigo"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Commitment to excellence with rigorous quality control and continuous improvement.",
      color: "indigo"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Expanded operations across major Indonesian cities with comprehensive logistics networks.",
      color: "indigo"
    },
    {
      icon: Star,
      title: "Customer First",
      description: "Personalized service and dedicated support tailored to your specific business needs.",
      color: "indigo"
    }
  ];

  const colorMap = {
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-800",
      iconBg: "bg-blue-950",
      gradient: "from-blue-800 to-blue-900",
      text: "text-blue-950"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-slate-800",
      iconBg: "bg-slate-950",
      gradient: "from-indigo-600 to-indigo-800",
      text: "text-indigo-950"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Vision & Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
        >
          {Object.entries(visionMissionData).map(([key, data]) => {
            const IconComponent = data.icon;
            const colors = colorMap[data.color];
            return (
              <motion.div
                key={key}
                variants={itemVariants}
                className="group"
              >
                <div className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${colors.border} hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 ${colors.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl sm:text-3xl font-bold ${colors.text} mb-3 sm:mb-4`}>
                      {data.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {data.description}
                    </p>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className={`absolute top-4 right-4 w-20 h-20 sm:w-24 sm:h-24 ${colors.bg} rounded-xl sm:rounded-2xl opacity-50 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-blue-200">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span className="text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Why Choose <span className="bg-gradient-to-r from-sky-800 to-blue-700 bg-clip-text text-transparent">Harton</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              We combine decades of expertise with innovative solutions to deliver unparalleled logistics services that drive your business forward.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colors = colorMap[feature.color];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${colors.border} hover:border-${feature.color}-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                    {/* Icon with Background */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-1 ${colors.iconBg} rounded-t transition-all duration-300`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 sm:mt-20"
          >
            <div className="relative bg-gradient-to-r from-indigo-950 to-blue-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32" />
              <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 bg-white/10 rounded-full translate-y-18 sm:translate-y-24 -translate-x-18 sm:-translate-x-24" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">
                  Ready to Transform Your Logistics?
                </h3>
                <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                  Join hundreds of satisfied clients who trust Harton for reliable, efficient, and comprehensive logistics solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <button className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                    Get Started Today
                  </button>
                  <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}