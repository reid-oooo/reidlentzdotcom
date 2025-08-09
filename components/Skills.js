'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { 
  CloudIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ServerIcon,
  CommandLineIcon,
  CircleStackIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/outline";

export default function Skills() {
  const categoryIcons = {
    "Cloud Infrastructure": CloudIcon,
    "Containerization": ServerIcon,
    "Infrastructure as Code": CommandLineIcon,
    "DevOps": CogIcon,
    "Data Platforms": CircleStackIcon,
    "Data Streaming & Caching": GlobeAltIcon,
    "Databases": CircleStackIcon,
    "Search & Analytics": ChartBarIcon,
    "AI/ML": CpuChipIcon,
    "Full Stack": CodeBracketIcon,
    "Backend": ServerIcon,
    "Frontend": CodeBracketIcon,
    "APIs": GlobeAltIcon,
    "Big Data": CircleStackIcon,
    "Monitoring": ChartBarIcon,
    "Microservices": ServerIcon,
    "Logging / SIEM": ChartBarIcon,
    "Project Management": CogIcon,
    "Version Control": CommandLineIcon,
    "Collaboration": GlobeAltIcon,
    "Business Intelligence": ChartBarIcon,
    "CRM": GlobeAltIcon,
    "Identity Management": ShieldCheckIcon,
    "Incident Management": CogIcon,
    "APM": ChartBarIcon,
    "Security": ShieldCheckIcon,
    "Code Quality": CodeBracketIcon,
    "Enterprise Storage & Backup": CircleStackIcon,
    "CI/CD & Automation": CogIcon,
    "Serverless": CloudIcon,
    "Mainframe & Legacy Systems": ComputerDesktopIcon,
    "Build Automation": CommandLineIcon,
    "ERP": GlobeAltIcon,
    "IT Service Management": CogIcon,
    "Secrets Management": ShieldCheckIcon,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"
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
            Platforms & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Platforms, tools, and technologies I've overseen and implemented across global operations
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Platforms Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <CloudIcon className="w-8 h-8 text-blue-500" />
              Platforms & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skills.platforms.map((platform, index) => {
                const IconComponent = categoryIcons[platform.category] || CloudIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {platform.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <CpuChipIcon className="w-8 h-8 text-purple-500" />
              Technologies & Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skills.technologies.map((tech, index) => {
                const IconComponent = categoryIcons[tech.category] || CpuChipIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {tech.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <CogIcon className="w-8 h-8 text-orange-500" />
              Tools & Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skills.tools.map((tool, index) => {
                const IconComponent = categoryIcons[tool.category] || CogIcon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
