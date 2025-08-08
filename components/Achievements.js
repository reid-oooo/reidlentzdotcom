'use client';

import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { 
  ChartBarIcon, 
  RocketLaunchIcon, 
  CurrencyDollarIcon, 
  ShieldCheckIcon,
  CpuChipIcon,
  HandshakeIcon
} from "@heroicons/react/24/outline";

export default function Achievements() {
  const iconMap = {
    "📈": ChartBarIcon,
    "🚀": RocketLaunchIcon,
    "💰": CurrencyDollarIcon,
    "🛡️": ShieldCheckIcon,
    "🤖": CpuChipIcon,
    "🤝": HandshakeIcon,
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the highlights from my professional journey
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>
            
            <div className="space-y-12">
              {resumeData.achievements.map((achievement, index) => {
                const IconComponent = iconMap[achievement.icon] || ChartBarIcon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative z-10"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                      className={`flex-1 max-w-md ${isEven ? 'text-left' : 'text-right'}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                      >
                        <div className={`flex items-center gap-4 ${isEven ? 'justify-start' : 'justify-end'}`}>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}