import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Github, Zap, Target, Code, Users, Video, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description: "Follow our carefully designed phases from basic concepts to advanced robotics programming.",
  },
  {
    icon: Code,
    title: "Code Examples",
    description: "Complete code snippets with syntax highlighting and detailed explanations for every phase.",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Watch step-by-step video demonstrations of robot assembly and programming.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join our community of robotics enthusiasts and get help when you need it.",
  },
  {
    icon: Zap,
    title: "Hands-on Projects",
    description: "Build real robots with practical applications and see your code come to life.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Each phase has clear objectives and measurable outcomes to track your progress.",
  },
]

  const phases = [
    {
      number: '01',
      title: 'Basic Line Detection',
      description: 'Master sensor fundamentals and implement basic control algorithms for line following.',
      color: 'from-green-500 to-emerald-500',
      icon: '🔍',
      duration: '2-3 hours',
      difficulty: 'Beginner',
    },
    {
      number: '02',
      title: 'PID Control Implementation',
      description: 'Implement advanced PID control systems for smooth, precise robot movement.',
      color: 'from-blue-500 to-cyan-500',
      icon: '⚙️',
      duration: '3-4 hours',
      difficulty: 'Intermediate',
    },
    {
      number: '03',
      title: 'Obstacle Detection & Avoidance',
      description: 'Add intelligence with ultrasonic sensors and sophisticated navigation algorithms.',
      color: 'from-purple-500 to-pink-500',
      icon: '🚧',
      duration: '4-5 hours',
      difficulty: 'Advanced',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
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
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Our Documentation?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach makes learning robotics accessible and enjoyable for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-slate-950/80 hover:cursor-pointer hover:shadow-lg hover:shadow-blue-300/30  border border-gray-700 rounded-xl p-6  transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Learning <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Phases</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow our structured approach to master robotics step by step, from beginner to advanced concepts.
            </p>
          </motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center text-2xl mr-4 shadow-lg`}>
                        {phase.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-400 mb-1">Phase {phase.number}</div>
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {phase.duration}
                        </span>
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {phase.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={`/phases/phase-${index + 1}`}
                        className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Start Phase {phase.number}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-full h-64 bg-gradient-to-br ${phase.color} rounded-2xl shadow-2xl flex items-center justify-center text-6xl`}
                  >
                    {phase.icon}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900/20">
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