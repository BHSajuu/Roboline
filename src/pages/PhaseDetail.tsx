import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Tag, Cpu, Wrench, Clock, BarChart3, Play, Code2, Sparkles, BookOpen, Image as ImageIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { phases } from '../data/phases';
import CodeBlock from '../components/CodeBlock';
import VideoEmbed from '../components/VideoEmbed';
import ImageGallery from '../components/ImageGallery';

const PhaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const phase = phases.find(p => p.id === id);
  const phaseIndex = phases.findIndex(p => p.id === id);

  if (!phase) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🤖</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Phase Not Found</h1>
          <p className="text-gray-400 mb-8">The requested phase could not be found.</p>
          <Link
            to="/phases"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Phases
          </Link>
        </div>
      </div>
    );
  }

  const nextPhase = phase.nextPhase ? phases.find(p => p.id === phase.nextPhase) : null;
  const prevPhase = phaseIndex > 0 ? phases[phaseIndex - 1] : null;

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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'code', label: 'Code', icon: Code2 },
    { id: 'video', label: 'Video', icon: Play },
    { id: 'images', label: 'Images', icon: ImageIcon },
    { id: 'resources', label: 'Resources', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/phases"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-200 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to All Phases
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(phaseIndex)} text-white rounded-full text-sm font-medium`}>
                Phase {phaseIndex + 1}
              </span>
              <span className={`px-3 py-1 border rounded-full text-sm font-medium ${
                getDifficultyLevel(phaseIndex) === 'Beginner' 
                  ? 'border-green-500 text-green-400'
                  : getDifficultyLevel(phaseIndex) === 'Intermediate'
                  ? 'border-yellow-500 text-yellow-400'
                  : 'border-red-500 text-red-400'
              }`}>
                {getDifficultyLevel(phaseIndex)}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{phase.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{phase.summary}</p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{getEstimatedTime(phaseIndex)}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Comprehensive Guide</span>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="border-b border-gray-700">
              <nav className="flex space-x-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-400'
                          : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white">Problem Statement</h3>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}
                        className="text-gray-300 leading-relaxed"
                      >
                        {phase.problem}
                      </ReactMarkdown>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
                    <div className="prose prose-gray max-w-none">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}
                        className="text-gray-300 leading-relaxed"
                      >
                        {phase.approach}
                      </ReactMarkdown>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Hardware Required</h3>
                      <ul className="space-y-2">
                        {phase.hardware.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h3 className="text-xl font-semibold text-white mb-4">Software & Skills</h3>
                      <ul className="space-y-2">
                        {phase.software.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span className="text-sm text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <Code2 className="h-5 w-5 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">Implementation Code</h3>
                  </div>
                  <div className="space-y-8">
                    {phase.codeSnippets.map((snippet, index) => (
                      <CodeBlock
                        key={snippet.id}
                        code={snippet.code}
                        language={snippet.language}
                        title={snippet.title}
                        description={snippet.description}
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'video' && (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <Play className="h-5 w-5 text-red-400" />
                    <h3 className="text-xl font-semibold text-white">Video Tutorial</h3>
                  </div>
                  {phase.videoUrl ? (
                    <VideoEmbed url={phase.videoUrl} title={`${phase.title} Tutorial`} />
                  ) : (
                    <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">Video tutorial coming soon</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'images' && (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-2 mb-6">
                    <ImageIcon className="h-5 w-5 text-pink-400" />
                    <h3 className="text-xl font-semibold text-white">Image Gallery</h3>
                  </div>
                  {phase.images.length > 0 ? (
                    <ImageGallery images={phase.images} alt={phase.title} />
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-400">No images available for this phase</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-6">Additional Resources</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Datasheets</h4>
                      <p className="text-sm text-gray-300">
                        Download component datasheets and technical specifications.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Troubleshooting Guide</h4>
                      <p className="text-sm text-gray-300">Common issues and their solutions for this phase.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Community Forum</h4>
                      <p className="text-sm text-gray-300">
                        Ask questions and share your progress with the community.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-between items-center mt-12 pt-8 border-t border-gray-700"
        >
          <div>
            {prevPhase && (
              <Link
                to={`/phases/${prevPhase.id}`}
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-xl font-medium transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Phase
              </Link>
            )}
          </div>

          <div>
            {nextPhase && (
              <Link
                to={`/phases/${nextPhase.id}`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Next Phase
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhaseDetail;