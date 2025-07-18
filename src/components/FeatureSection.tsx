import { BookOpen, Code, Target, Users, Video, Zap } from 'lucide-react'
import { motion } from 'framer-motion';


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

function FeatureSection() {
  return (
    <section className="py-10 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className='flex flex-col justify-center items-center gap-1'>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Our Documentation?</h2>
            <p className="text-xl text-gray-400 max-w-4xl ">
              Our comprehensive approach makes learning robotics accessible and enjoyable for everyone.
            </p>
          </div>

        </motion.div>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='animated-border-card'
            >
              <div className="card-content flex flex-col items-center justify-center hover:cursor-pointer   transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-center hyphens-auto">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection