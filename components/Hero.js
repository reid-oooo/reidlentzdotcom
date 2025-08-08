'use client';

import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">{resumeData.hero.name}</h1>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{resumeData.hero.title}</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">{resumeData.hero.tagline}</p>
        <motion.a
          href="#achievements"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          Explore My Work
        </motion.a>
      </motion.div>
    </section>
  );
}