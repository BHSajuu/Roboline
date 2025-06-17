import React from 'react';
import { Link } from 'react-router-dom';
import {  motion } from 'framer-motion';
import { ArrowRight, Play, Github} from 'lucide-react';
import LearningPhase from '../components/LearningPhase';
import FeatureSection from '../components/FeatureSection';



const Home: React.FC = () => {
 

    return (

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-20">
            <div className="ml-64 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                  Robotics Line Following
                  <span className="text-blue-400 block">Project Documentation</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
              >
                A comprehensive guide to building and programming line-following robots. Learn through structured phases,
                from basic concepts to advanced implementations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/phases"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-xl font-semibold text-lg transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 relative"
            >
              <div className="relative mx-auto max-w-4xl">
                <div className="aspect-video bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                        <Play className="h-12 w-12 text-blue-400" />
                      </div>
                      <p className="text-gray-400">Project Demo Video</p>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </div>
          <div className=' top-12 right-0'>
            <img src="robot1.png" alt="Robot" className='w-full h-auto animate-pulse rounded-lg shadow-lg' />
          </div>
        </section>

        {/* Features Section */}
        <FeatureSection/>

        {/* Phases Preview */}
        <LearningPhase />


        {/* CTA Section */}
        <section className="py-20 bg-blue-950/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Start Building?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of students and hobbyists who have successfully built line-following robots using our
                comprehensive documentation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/phases"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="https://github.com/roboline-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  };

  export default Home;