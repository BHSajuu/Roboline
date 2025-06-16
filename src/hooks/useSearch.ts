import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { Phase, Resource, SearchResult } from '../types';

interface UseSearchProps {
  phases: Phase[];
  resources: Resource[];
}

export const useSearch = ({ phases, resources }: UseSearchProps) => {
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const phaseSearcher = useMemo(() => {
    return new Fuse(phases, {
      keys: ['title', 'summary', 'problem', 'approach', 'tags'],
      threshold: 0.3,
      includeScore: true,
    });
  }, [phases]);

  const resourceSearcher = useMemo(() => {
    return new Fuse(resources, {
      keys: ['title', 'description', 'tags'],
      threshold: 0.3,
      includeScore: true,
    });
  }, [resources]);

  const allTags = useMemo(() => {
    const phaseTags = phases.flatMap(phase => phase.tags);
    const resourceTags = resources.flatMap(resource => resource.tags);
    return [...new Set([...phaseTags, ...resourceTags])];
  }, [phases, resources]);

  const filteredResults = useMemo(() => {
    let phaseResults: SearchResult[] = [];
    let resourceResults: SearchResult[] = [];

    // Apply text search if query exists
    if (query.trim()) {
      const phaseSearchResults = phaseSearcher.search(query);
      const resourceSearchResults = resourceSearcher.search(query);

      phaseResults = phaseSearchResults.map(result => ({
        type: 'phase' as const,
        item: result.item,
        score: result.score || 0,
      }));

      resourceResults = resourceSearchResults.map(result => ({
        type: 'resource' as const,
        item: result.item,
        score: result.score || 0,
      }));
    } else {
      // If no query, show all items
      phaseResults = phases.map(phase => ({
        type: 'phase' as const,
        item: phase,
        score: 0,
      }));

      resourceResults = resources.map(resource => ({
        type: 'resource' as const,
        item: resource,
        score: 0,
      }));
    }

    // Apply tag filtering
    if (selectedTags.length > 0) {
      phaseResults = phaseResults.filter(result => 
        selectedTags.some(tag => (result.item as Phase).tags.includes(tag))
      );
      resourceResults = resourceResults.filter(result => 
        selectedTags.some(tag => (result.item as Resource).tags.includes(tag))
      );
    }

    return [...phaseResults, ...resourceResults].sort((a, b) => a.score - b.score);
  }, [query, selectedTags, phaseSearcher, resourceSearcher, phases, resources]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setQuery('');
    setSelectedTags([]);
  };

  return {
    query,
    setQuery,
    selectedTags,
    toggleTag,
    clearFilters,
    allTags,
    results: filteredResults,
  };
};