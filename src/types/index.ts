export interface Phase {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  hardware: string[];
  software: string[];
  codeSnippets: CodeSnippet[];
  videoUrl?: string;
  images: string[];
  tags: string[];
  nextPhase?: string;
  createdAt: string;
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  description?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'github' | 'youtube' | 'article' | 'documentation';
  tags: string[];
  icon?: string;
}

export interface SearchResult {
  type: 'phase' | 'resource';
  item: Phase | Resource;
  score: number;
}