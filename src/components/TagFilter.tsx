import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  onClear: () => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ 
  allTags, 
  selectedTags, 
  onToggleTag, 
  onClear 
}) => {
  if (allTags.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-300">Filter by tags</h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onToggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tag}
              {isSelected && <X className="inline-block ml-2 h-3 w-3" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default TagFilter;