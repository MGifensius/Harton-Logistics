import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const years = [
    {
      year: "2015",
      title: "Company Foundation",
      text: "PT Harton Transportasi Internasional was founded with the goal of helping businesses and individuals who faced difficulties in managing permissions and customs clearance. We recognized the challenges in dealing with regulatory compliance and import/export documentation, many people also struggled with handling goods that were detained or had issues during the import/export process, so we created our company to assist them and provide expert assistance in these areas.",
    },
    {
      year: "2017",
      title: "National Expansion",
      text: "As demand for comprehensive logistics solutions grew, we expanded our services to include stevedoring and trucking. This expansion allowed our customers to simplify their logistics processes, as they no longer needed to handle cargo unloading and inland transportation separately. Our goal was to meet customer demand and provide a true one-stop logistics solution.",
    },
    {
      year: "Present",
      title: "Industry Leadership",
      text: "Today, we offer a full suite of logistics services from permissions handling, customer clearance, stevedoring, trucking including warehousing, providing a truly end-to-end logistics solution. Our commitment to innovation and excellence continues to drive our growth and success.",
    },
  ];

  return (
    <section
      id="timeline"
      ref={timelineRef}
      className="relative py-16 sm:py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-blue-200">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-950 font-semibold text-xs sm:text-sm uppercase tracking-wide">Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Growth Story
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            From foundation to leadership - our commitment to excellence in logistics
          </p>
        </div>

        {/* Horizontal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {years.map((item, i) => {
            const progressStart = i * 0.2;
            
            const opacity = useTransform(
              scrollYProgress,
              [progressStart, progressStart + 0.15],
              [0, 1]
            );

            const y = useTransform(
              scrollYProgress,
              [progressStart, progressStart + 0.15],
              [20, 0]
            );

            return (
              <motion.div
                key={i}
                style={{ opacity, y }}
                className="flex flex-col h-full"
              >
                {/* Year Badge */}
                <div className="text-center mb-4 sm:mb-6">
                  <span className="bg-blue-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg inline-block">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 sm:w-2 h-8 sm:h-10 bg-gradient-to-b from-blue-700 to-blue-600 rounded-full flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px] flex-1">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-xs sm:text-sm font-medium px-2">
            Continuing our journey of innovation and excellence
          </p>
        </div>
      </div>
    </section>
  );
}