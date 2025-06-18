import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  BarChart3, 
  Code, 
  Video, 
  Image as ImageIcon, 
  CircuitBoard,
  
  Rocket,
 
  Binary,

  Armchair
} from 'lucide-react';
import { phases } from '../data/phases';

const Phases: React.FC = () => {
  const getDifficultyColor = (index: number) => {
    const colors = [
      'from-slate-500 to-cyan-400',
      'from-slate-500 to-indigo-400', 
      'from-slate-500 to-pink-400'
    ];
    return colors[index] || 'from-gray-400 to-gray-500';
  };
  const getEstimatedTime = (index: number) => {
    const times = ['2-3 hours', '3-4 hours', '4-5 hours'];
    return times[index] || '2-3 hours';
  };

  const getPhaseIcon = (index: number) => {
    const icons = [
      <Rocket className="w-10 h-10 text-white" />,
      <CircuitBoard className="w-10 h-10 text-white" />,
      <Armchair className="w-10 h-10 text-white" />
    ];
    return icons[index] || icons[0];
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-0.5 h-64 bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-1/4 w-0.5 h-64 bg-gradient-to-t from-purple-400/30 to-transparent"></div>
      </div>

      {/* Phases Grid */}
      <section className="relative  pt-8 pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-gray-800 rounded-full mb-4 border border-cyan-400/30">
              <Binary className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">ROBOTICS PATH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Build Your Robotics Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Progress through our comprehensive learning phases to master robotics from fundamentals to advanced applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Tech Pattern Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCA2MGMxNi41NjkgMCAzMC0xMy40MzEgMzAtMzBTNDYuNTY5IDAgMzAgMCAwIDEzLjQzMSAwIDMwczEzLjQzMSAzMCAzMCAzMHptMC0zYzE0Ljg4OCAwIDI3LTEyLjExOSAyNy0yN1M0NC44ODggMyAzMCAzIDMgMTUuMTE5IDMgMzBzMTIuMTE5IDI3IDI3IDI3eiIgc3Ryb2tlPSJyZ2JhKDExMywgMTU2LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-700 group-hover:border-cyan-500/30 backdrop-blur-sm z-10">
                  {/* Phase Header */}
                  <div className={`h-1.5 bg-gradient-to-r ${getDifficultyColor(index)}`}></div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start mb-8">
                          <div className={`w-24 h-24 bg-gradient-to-r ${getDifficultyColor(index)} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6 shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)]"></div>
                            {getPhaseIcon(index)}
                          </div>
                          <div className="pt-1">
                            <div className="text-sm font-medium text-gray-400 mb-2 flex items-center">
                              <span>PHASE {index + 1}</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                              {phase.title}
                            </h2>
                            <div className="flex items-center mt-3">
                              <div className="flex items-center text-sm text-gray-400 mr-6">
                                <Clock className="h-4 w-4 mr-1.5 text-cyan-400" />
                                <span>{getEstimatedTime(index)}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-400">
                                <BarChart3 className="h-4 w-4 mr-1.5 text-purple-400" />
                                <span>{index === 0 ? 'Fundamental' : index === 1 ? 'Intermediate' : 'Advanced'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                          {phase.summary}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {phase.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              whileHover={{ y: -2 }}
                              className="px-4 py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-300 rounded-full text-sm font-medium border border-blue-400/20 backdrop-blur-sm flex items-center"
                            >
                              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        {/* Content Stats */}
                        <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-700">
                          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Code className="h-4 w-4 mr-2 text-purple-400" />
                              {phase.codeSnippets.length} code modules
                            </span>
                            <span className="flex items-center">
                              <ImageIcon className="h-4 w-4 mr-2 text-cyan-400" />
                              {phase.images.length} schematics
                            </span>
                            {phase.videoUrl && (
                              <span className="flex items-center">
                                <Video className="h-4 w-4 mr-2 text-red-400" />
                                Simulation videos
                              </span>
                            )}
                          </div>
                          
                          <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="pt-4 sm:mt-0"
                          >
                            <Link
                              to={`/phases/${phase.id}`}
                              className={`group inline-flex items-center px-8 py-4 bg-gradient-to-r ${getDifficultyColor(index)} text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                            >
                              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)]"></div>
                              <span className="relative z-10">Initiate Phase</span>
                              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                            </Link>
                          </motion.div>
                        </div>
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
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCA2MGMxNi41NjkgMCAzMC0xMy40MzEgMzAtMzBTNDYuNTY5IDAgMzAgMCAwIDEzLjQzMSAwIDMwczEzLjQzMSAzMCAzMCAzMHptMC0zYzE0Ljg4OCAwIDI3LTEyLjExOSAyNy0yN1M0NC44ODggMyAzMCAzIDMgMTUuMTE5IDMgMzBzMTIuMTE5IDI3IDI3IDI3eiIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Begin Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Robotics Journey</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Start with Phase 1 and systematically progress through each stage. Each phase builds on the previous, ensuring you develop comprehensive robotics expertise.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/phases/phase-1"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-slate-700 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                <span className="relative z-10">Initiate Phase 1</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
              </Link>
            </motion.div>
            
            <div className="mt-8 text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                <span>Real-world applications</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                <span>Hands-on projects</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                <span>Industry-standard techniques</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phases;