import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, Github, Mail, Heart, Linkedin, Twitter } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Phases', href: '/phases' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const footerLinks = [
    {
      title: 'Learning',
      links: [
        { name: 'Phase 1: Basic Detection', href: '/phases/phase-1' },
        { name: 'Phase 2: PID Control', href: '/phases/phase-2' },
        { name: 'Phase 3: Obstacle Avoidance', href: '/phases/phase-3' },
        { name: 'All Resources', href: '/resources' },
      ]
    },
    {
      title: 'Project',
      links: [
        { name: 'About the Team', href: '/about' },
        { name: 'Documentation', href: '/phases' },
        { name: 'GitHub Repository', href: 'https://github.com/roboline-project', external: true },
        { name: 'Contributing Guide', href: 'https://github.com/roboline-project/contributing', external: true },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Get Help', href: '/contact' },
        { name: 'Report Issues', href: 'https://github.com/roboline-project/issues', external: true },
        { name: 'Feature Requests', href: 'https://github.com/roboline-project/discussions', external: true },
        { name: 'Community Forum', href: 'https://github.com/roboline-project/discussions', external: true },
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/roboline-project', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/roboline', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/roboline_project', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@roboline.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-950 shadow-lg border-b border-gray-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Bot className="relative h-8 w-8 text-white bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 rounded-lg" />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RoboLine
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-gray-200 bg-indigo-500'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-900/50 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-gray-700"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-blue-400 bg-blue-900/50'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-75"></div>
                  <Bot className="relative h-10 w-10 text-white bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg" />
                </div>
                <span className="text-2xl font-bold">RoboLine</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the future through hands-on robotics education. Learn, build, and innovate with our 
                comprehensive line-following robot curriculum.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                        >
                          {link.name}
                          <motion.span
                            className="ml-1 opacity-0 group-hover:opacity-100"
                            initial={{ x: -5 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                        >
                          {link.name}
                          <motion.span
                            className="ml-1 opacity-0 group-hover:opacity-100"
                            initial={{ x: -5 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-400">© 2025 RoboLine Project. Crafted with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
                <span className="text-gray-400">by passionate educators and students</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span>Powered by React & Tailwind CSS</span>
                <span>•</span>
                <span>Free Content Forever</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;