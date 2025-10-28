import { motion } from "framer-motion";
import aboutHartonImage from "../assets/about-harton.png";

export default function AboutUs() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Clients Served" },
    { number: "15+", label: "Team Members" },
    { number: "24/7", label: "Support" }
  ];

  const values = [
    {
      title: "Reliability & Accountability",
      description: "We deliver on our promises and take full responsibility for every aspect of our service, ensuring consistent and dependable performance."
    },
    {
      title: "Precision & Efficiency",
      description: "Our processes are optimized for accuracy and speed, minimizing delays and maximizing cost-effectiveness for our clients."
    },
    {
      title: "Integrity & Transparency",
      description: "We maintain the highest ethical standards and provide clear, honest communication throughout every business interaction."
    },
    {
      title: "Customer-Centric Excellence",
      description: "Your success is our priority. We tailor our solutions to meet your unique needs and exceed your expectations."
    },
    {
      title: "Innovation & Adaptability",
      description: "We continuously evolve our services and embrace new technologies to stay ahead in the dynamic logistics industry."
    },
    {
      title: "Collaboration & Teamwork",
      description: "We work closely with clients and partners, fostering strong relationships to achieve shared goals and mutual success."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-blue-200">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Trusted Logistics Partner
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            For over a decade, Harton Logistics has been at the forefront of supply chain innovation, 
            delivering reliable and efficient logistics solutions to businesses across Southeast Asia.
          </p>
        </motion.div>

        {/* Main Content Grid - Updated for equal height */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-stretch mb-12 sm:mb-16 md:mb-20">
          {/* Left Content - Now matches image height */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Founded in 2015, Harton Logistics began with a simple mission: to simplify complex 
                logistics challenges for businesses struggling with customs clearance and regulatory compliance.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                What started as a specialized customs brokerage service has evolved into a comprehensive 
                logistics provider, offering end-to-end supply chain solutions from freight forwarding 
                to last-mile delivery.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Today, we're proud to be a trusted partner for hundreds of businesses, helping them 
                navigate the complexities of global trade with confidence and efficiency.
              </p>
            </div>
          </motion.div>

          {/* Right Image - Full height container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-full"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-full">
              <img 
                src={aboutHartonImage} 
                alt="Harton Logistics Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-950 mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-2">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-blue-800 text-lg sm:text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}