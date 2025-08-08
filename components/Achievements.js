'use client';

import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Key Achievements</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <span className="text-3xl">{achievement.icon}</span>
            <h3 className="text-xl font-semibold mt-4">{achievement.title}</h3>
            <p className="mt-2 text-gray-600">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}