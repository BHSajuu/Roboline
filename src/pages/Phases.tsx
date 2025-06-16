import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Clock, BarChart3, Code, Video, Image as ImageIcon, Zap, Sparkles, Cpu, Wrench } from 'lucide-react';
import { phases } from '../data/phases';

const Phases: React.FC = () => {
  const getDifficultyColor = (index: number) => {
    const colors = [
      'from-emerald-400 to-cyan-400',
      'from-blue-400 to-indigo-400', 
      'from-purple-400 to-pink-400'
    ];
    return colors[index] || 'from-gray-400 to-gray-500';
  };

  const getDifficultyLevel = (index: number) => {
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    return levels[index] || 'Beginner';
  };

  const getEstimatedTime = (index: number) => {
    const times = ['2-3 hours', '3-4 hours', '4-5 hours'];
    return times[index] || '2-3 hours';
  };

  const phaseIcons = ['🔍', '⚙️', '🚧'];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-sm font-medium text-blue-300 mb-8"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Progressive Learning Journey
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Learning Phases
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Master robotics through our carefully structured phases. Each phase builds upon the previous one, 
              taking you from basic concepts to advanced implementations with hands-on projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getDifficultyColor(index)} rounded-2xl mb-4 shadow-lg`}>
                    <span className="text-2xl">{phaseIcons[index]}</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">Phase {index + 1}</div>
                  <div className="text-gray-400">{getDifficultyLevel(index)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phases Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-700 group-hover:border-blue-500/50 backdrop-blur-sm">
                  {/* Phase Header */}
                  <div className={`h-1 bg-gradient-to-r ${getDifficultyColor(index)}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center mb-8">
                          <div className={`w-20 h-20 bg-gradient-to-r ${getDifficultyColor(index)} rounded-3xl flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-400 mb-2">Phase {index + 1}</div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {phase.title}
                            </h2>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          {phase.summary}
                        </p>

                        {/* Meta Information */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="flex items-center text-gray-400">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                              <Clock className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Duration</div>
                              <div className="text-sm text-gray-400">{getEstimatedTime(index)}</div>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                              <BarChart3 className="h-6 w-6 text-green-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Difficulty</div>
                              <div className="text-sm text-gray-400">{getDifficultyLevel(index)}</div>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                              <Calendar className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                              <div className="font-medium text-white">Updated</div>
                              <div className="text-sm text-gray-400">{new Date(phase.createdAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {phase.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Hardware & Software Preview */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-400/20 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                              <Cpu className="h-6 w-6 text-blue-400 mr-3" />
                              <h4 className="font-semibold text-white">Hardware Components</h4>
                            </div>
                            <ul className="text-sm text-gray-300 space-y-2">
                              {phase.hardware.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                  {item}
                                </li>
                              ))}
                              {phase.hardware.length > 3 && (
                                <li className="text-blue-400 font-medium">
                                  +{phase.hardware.length - 3} more components
                                </li>
                              )}
                            </ul>
                          </div>
                          
                          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border border-green-400/20 backdrop-blur-sm">
                            <div className="flex items-center mb-4">
                              <Wrench className="h-6 w-6 text-green-400 mr-3" />
                              <h4 className="font-semibold text-white">Software & Tools</h4>
                            </div>
                            <ul className="text-sm text-gray-300 space-y-2">
                              {phase.software.slice(0, 3).map((item, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                  {item}
                                </li>
                              ))}
                              {phase.software.length > 3 && (
                                <li className="text-green-400 font-medium">
                                  +{phase.software.length - 3} more tools
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* Content Stats */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                          <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Code className="h-4 w-4 mr-2 text-purple-400" />
                              {phase.codeSnippets.length} code snippets
                            </span>
                            <span className="flex items-center">
                              <ImageIcon className="h-4 w-4 mr-2 text-cyan-400" />
                              {phase.images.length} images
                            </span>
                            {phase.videoUrl && (
                              <span className="flex items-center">
                                <Video className="h-4 w-4 mr-2 text-red-400" />
                                1 demo video
                              </span>
                            )}
                          </div>
                          
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                              to={`/phases/${phase.id}`}
                              className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r ${getDifficultyColor(index)} text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300`}
                            >
                              Start Phase
                              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </motion.div>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="lg:w-80 flex-shrink-0">
                        {phase.images.length > 0 && (
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(index)} opacity-20 rounded-3xl blur-xl`}></div>
                            <img
                              src={phase.images[0]}
                              alt={phase.title}
                              className="relative w-full h-64 object-cover rounded-3xl shadow-2xl border border-gray-600"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="text-white font-semibold text-lg">{phaseIcons[index]} Phase {index + 1}</div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Begin with Phase 1 and work your way through each stage. Every phase builds upon the previous one, 
              ensuring you develop a solid foundation in robotics.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/phases/phase-1"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Begin Phase 1
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phases;