'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { 
  BuildingOfficeIcon, 
  CalendarIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the companies I&apos;ve had the pleasure to work with
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {resumeData.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-purple-400"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BuildingOfficeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-gray-700 mt-2 flex items-center gap-2">
                        <BuildingOfficeIcon className="w-5 h-5 text-orange-500" />
                        {job.company}
                      </h4>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-purple-100 text-orange-700 px-4 py-2 rounded-full font-semibold mt-4 lg:mt-0"
                  >
                    <CalendarIcon className="w-4 h-4" />
                    {job.period}
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: achievementIndex * 0.1 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="w-6 h-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      >
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </motion.div>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
