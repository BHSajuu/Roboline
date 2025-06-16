# RoboLine - Robotics Line Following Documentation

A comprehensive documentation website for building and programming a sophisticated line-following robot. This project provides step-by-step guidance through multiple phases, from basic sensor reading to advanced control systems.

![RoboLine Project](https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg)

## 🚀 Features

- **Progressive Learning**: Three detailed phases covering fundamental to advanced concepts
- **Interactive Documentation**: Code snippets with syntax highlighting and copy functionality
- **Rich Media**: Video demonstrations and image galleries for each phase
- **Advanced Search**: Filter content by tags, search across phases and resources
- **Dark Mode**: Full dark mode support with smooth transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and Framer Motion

## 📚 Project Phases

### Phase 1: Basic Line Detection
- IR sensor integration and calibration
- Basic proportional control implementation
- Fundamental robot movement algorithms

### Phase 2: PID Control Implementation
- Advanced PID controller design
- Smooth movement and error correction
- Performance tuning and optimization

### Phase 3: Obstacle Detection & Avoidance
- Ultrasonic sensor integration
- State machine implementation
- Advanced navigation algorithms

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM for SPA navigation
- **Search**: Fuse.js for fuzzy search functionality
- **Markdown**: React Markdown with syntax highlighting
- **Icons**: Lucide React icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd robotics-line-following-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
npm run preview
```

## 📝 Adding New Content

### Adding a New Phase

1. Open `src/data/phases.ts`
2. Add a new phase object following this structure:

```typescript
{
  id: 'phase-4',
  title: 'Your Phase Title',
  summary: 'Brief description of the phase',
  problem: 'Describe the problem this phase solves',
  approach: 'Explain your solution approach',
  hardware: ['List', 'of', 'hardware', 'components'],
  software: ['List', 'of', 'software', 'tools'],
  codeSnippets: [
    {
      id: 'unique-code-id',
      title: 'Code Block Title',
      language: 'cpp', // or 'javascript', 'python', etc.
      code: 'your code here',
      description: 'Optional description'
    }
  ],
  videoUrl: 'https://youtube.com/embed/your-video-id',
  images: ['https://your-image-urls.com'],
  tags: ['relevant', 'tags'],
  nextPhase: 'phase-5', // optional
  createdAt: '2024-01-01'
}
```

### Adding Resources

1. Open `src/data/resources.ts`
2. Add a new resource:

```typescript
{
  id: 'unique-resource-id',
  title: 'Resource Title',
  description: 'Resource description',
  url: 'https://external-url.com',
  type: 'github' | 'youtube' | 'article' | 'documentation',
  tags: ['relevant', 'tags']
}
```

### Markdown Support

All text fields support Markdown formatting:
- **Bold text**: `**bold**`
- *Italic text*: `*italic*`
- Links: `[text](url)`
- Lists: Use `-` or `1.` for bullet/numbered lists
- Code blocks: Use triple backticks with language specification

## 🎨 Customization

### Design System

The project uses a consistent design system defined in Tailwind CSS:

- **Colors**: Blue primary (#3B82F6), with semantic color ramps
- **Spacing**: 8px base unit system
- **Typography**: Inter font family with defined scales
- **Components**: Reusable components in `src/components/`

### Themes

Dark mode is implemented using Tailwind's dark mode classes. The theme is managed through the `ThemeContext` and persisted in localStorage.

### Animations

Framer Motion provides smooth animations:
- Page transitions
- Hover effects
- Modal animations
- Loading states

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Other Platforms

The project builds to static files in the `dist` directory and can be deployed to any static hosting service.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Contribution Ideas

- Add new project phases
- Improve existing documentation
- Add new resources and tutorials
- Enhance UI/UX design
- Fix bugs and optimize performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact@roboline.com
- **GitHub**: [github.com/roboline-project](https://github.com/roboline-project)
- **Website**: [roboline.com](https://roboline.com)

## 🙏 Acknowledgments

- Pexels for providing high-quality stock photos
- The open-source community for the amazing tools and libraries
- All contributors who help improve this project

---

Built with ❤️ for the robotics community