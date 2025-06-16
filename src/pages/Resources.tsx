import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Youtube, FileText, Book } from 'lucide-react';
import { resources } from '../data/resources';
import { useSearch } from '../hooks/useSearch';
import SearchBar from '../components/SearchBar';
import TagFilter from '../components/TagFilter';
import { Resource } from '../types';

const Resources: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const { query, setQuery, selectedTags, toggleTag, clearFilters, allTags, results } = useSearch({
    phases: [],
    resources,
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return Github;
      case 'youtube':
        return Youtube;
      case 'article':
        return FileText;
      case 'documentation':
        return Book;
      default:
        return ExternalLink;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'github':
        return 'bg-gray-700 text-gray-200';
      case 'youtube':
        return 'bg-red-900/30 text-red-300';
      case 'article':
        return 'bg-blue-900/30 text-blue-300';
      case 'documentation':
        return 'bg-green-900/30 text-green-300';
      default:
        return 'bg-gray-700 text-gray-200';
    }
  };

  const filteredResources = results
    .filter(result => result.type === 'resource')
    .map(result => result.item as Resource)
    .filter(resource => filter === 'all' || resource.type === filter);

  const resourceTypes = ['all', 'github', 'youtube', 'article', 'documentation'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Resources
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Curated collection of tutorials, documentation, and tools to help you
          build and improve your line-following robot.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <div className="space-y-6 mb-8">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          placeholder="Search resources..."
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <TagFilter
              allTags={allTags}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
              onClear={clearFilters}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === type
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-gray-400">
          Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
          {(query || selectedTags.length > 0) && ' matching your search'}
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => {
          const IconComponent = getIcon(resource.type);
          
          return (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-800 rounded-lg shadow-sm border border-gray-700 p-6 hover:shadow-md hover:border-blue-600 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <IconComponent className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {resource.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center text-blue-400 text-sm font-medium">
                  <span>View Resource</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg mb-4">
            No resources found matching your criteria.
          </p>
          <button
            onClick={clearFilters}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Resources;