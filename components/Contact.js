'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  GlobeAltIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

export default function Contact() {
  const socialLinks = [
    { name: 'Podcast', url: resumeData.contact.podcast, icon: '📺', color: 'from-gray-500 to-gray-700' },
    { name: 'LinkedIn', url: resumeData.contact.linkedin, icon: '💼', color: 'from-blue-500 to-blue-700' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
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
          className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-32 h-32 bg-orange-300/20 rounded-full blur-xl"
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <UserGroupIcon className="w-8 h-8 text-orange-300" />
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-orange-200">Email</p>
                  <a 
                    href={`mailto:${resumeData.contact.email}`}
                    className="text-white hover:text-orange-200 transition-colors duration-300"
                  >
                    {resumeData.contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-purple-200">Phone</p>
                  <a 
                    href={`tel:${resumeData.contact.phone}`}
                    className="text-white hover:text-purple-200 transition-colors duration-300"
                  >
                    {resumeData.contact.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GlobeAltIcon className="w-8 h-8 text-orange-300" />
              Find Me
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-2xl">{social.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{social.name}</p>
                    <p className="text-sm text-blue-100">Catch me here</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-300" />
              Ready to work together?
            </h3>
            <p className="text-blue-100 mb-6">
              I&apos;m currently available for freelance opportunities and full-time positions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
