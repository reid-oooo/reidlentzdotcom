'use client';

import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";
import { SparklesIcon, RocketLaunchIcon, CpuChipIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <SparklesIcon className="w-12 h-12 text-yellow-300 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
        >
          {resumeData.hero.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl lg:text-3xl font-semibold mb-4 text-orange-200"
        >
          {resumeData.hero.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-blue-100"
        >
          {resumeData.hero.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#achievements"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <RocketLaunchIcon className="w-5 h-5" />
            Explore My Work
          </motion.a>
          
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <CpuChipIcon className="w-5 h-5" />
            View Technologies
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <EnvelopeIcon className="w-5 h-5" />
            Connect With Me
          </motion.a>
          
          <motion.a
            href={resumeData.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          >
            <SparklesIcon className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}