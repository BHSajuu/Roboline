// import React from 'react';
// import { motion } from 'framer-motion';
// import { Linkedin, Github, Mail, Award, Users, Target } from 'lucide-react';

// const About: React.FC = () => {
//   const teamMembers = [
//     {
//       id: 'professor',
//       name: 'Dr. Sarah Johnson',
//       role: 'Project Supervisor & Professor',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
//       bio: 'Leading robotics researcher with 15+ years of experience in autonomous systems and educational technology.',
//       expertise: ['Robotics Research', 'Control Systems', 'Educational Technology'],
//       social: [
//         { icon: Linkedin, href: 'https://linkedin.com/in/dr-sarah-johnson' },
//         { icon: Github, href: 'https://github.com/dr-sarah-johnson' },
//         { icon: Mail, href: 'mailto:sarah.johnson@university.edu' },
//       ],
//       level: 0,
//       position: { x: 50, y: 15 }
//     },
//     {
//       id: 'ta',
//       name: 'Michael Chen',
//       role: 'Teaching Assistant & PhD Candidate',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
//       bio: 'PhD candidate specializing in machine learning applications in robotics and educational curriculum development.',
//       expertise: ['Machine Learning', 'Curriculum Design', 'Student Mentoring'],
//       social: [
//         { icon: Linkedin, href: 'https://linkedin.com/in/michael-chen-ta' },
//         { icon: Github, href: 'https://github.com/michael-chen-ta' },
//         { icon: Mail, href: 'mailto:michael.chen@university.edu' },
//       ],
//       level: 1,
//       position: { x: 50, y: 45 }
//     },
//     {
//       id: 'student1',
//       name: 'Alex Rodriguez',
//       role: 'Lead Developer & Computer Science Student',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
//       bio: 'Senior computer science student passionate about robotics and web development. Lead developer of the RoboLine platform.',
//       expertise: ['Full-Stack Development', 'Robotics Programming', 'UI/UX Design'],
//       social: [
//         { icon: Linkedin, href: 'https://linkedin.com/in/alex-rodriguez-dev' },
//         { icon: Github, href: 'https://github.com/alex-rodriguez-dev' },
//         { icon: Mail, href: 'mailto:alex.rodriguez@student.university.edu' },
//       ],
//       level: 2,
//       position: { x: 25, y: 75 }
//     },
//     {
//       id: 'student2',
//       name: 'Emma Thompson',
//       role: 'Hardware Specialist & Engineering Student',
//       image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
//       bio: 'Electrical engineering student with expertise in embedded systems and hardware design. Responsible for hardware documentation.',
//       expertise: ['Embedded Systems', 'Circuit Design', 'Hardware Testing'],
//       social: [
//         { icon: Linkedin, href: 'https://linkedin.com/in/emma-thompson-eng' },
//         { icon: Github, href: 'https://github.com/emma-thompson-eng' },
//         { icon: Mail, href: 'mailto:emma.thompson@student.university.edu' },
//       ],
//       level: 2,
//       position: { x: 75, y: 75 }
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900">
//       {/* Team Hierarchy */}
//       <section className="py-24 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold text-white mb-6">Our Team Structure</h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               A collaborative team of educators and students working together to create exceptional robotics learning experiences.
//             </p>
//           </motion.div>

//           {/* Team Visualization */}
//           <div className="relative h-[800px]">
//             {/* Connection Lines SVG */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
//               <defs>
//                 <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
//                   <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
//                 </linearGradient>
//                 <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
//                   <polygon points="0 0, 10 3.5, 0 7" fill="url(#connectionGradient)" />
//                 </marker>
//               </defs>
              
//               {/* Professor to TA */}
//               <motion.path
//                 d={`M 50 15 C 50 25, 50 35, 50 45`}
//                 fill="none"
//                 stroke="url(#connectionGradient)"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//                 markerEnd="url(#arrowhead)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 1 }}
//                 transition={{ duration: 1.5, delay: 0.8 }}
//               />
              
//               {/* TA to Student 1 */}
//               <motion.path
//                 d={`M 50 45 C 45 55, 35 65, 25 75`}
//                 fill="none"
//                 stroke="url(#connectionGradient)"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//                 markerEnd="url(#arrowhead)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 1 }}
//                 transition={{ duration: 1.5, delay: 1.3 }}
//               />
              
//               {/* TA to Student 2 */}
//               <motion.path
//                 d={`M 50 45 C 55 55, 65 65, 75 75`}
//                 fill="none"
//                 stroke="url(#connectionGradient)"
//                 strokeWidth="3"
//                 strokeDasharray="8,4"
//                 markerEnd="url(#arrowhead)"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 animate={{ pathLength: 1, opacity: 1 }}
//                 transition={{ duration: 1.5, delay: 1.3 }}
//               />
//             </svg>

//             {/* Team Members */}
//             <div className="relative" style={{ zIndex: 2 }}>
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={member.id}
//                   className="absolute transform -translate-x-1/2 -translate-y-1/2"
//                   style={{
//                     left: `${member.position.x}%`,
//                     top: `${member.position.y}%`,
//                   }}
//                   initial={{ 
//                     x: "-50%",
//                     y: "-50%",
//                     left: "50%",
//                     top: "50%",
//                     opacity: 0,
//                     scale: 0.5 
//                   }}
//                   animate={{ 
//                     left: `${member.position.x}%`,
//                     top: `${member.position.y}%`,
//                     opacity: 1,
//                     scale: 1
//                   }}
//                   transition={{ 
//                     duration: 1, 
//                     delay: index * 0.3,
//                     type: "spring",
//                     damping: 15,
//                     stiffness: 100
//                   }}
//                   whileHover={{ 
//                     y: -15,
//                     scale: 1.05,
//                     transition: { duration: 0.3 } 
//                   }}
//                 >
//                   <TeamMemberCard member={member} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Our Mission
//             </h2>
//             <p className="text-xl text-blue-100 mb-10 leading-relaxed">
//               To democratize robotics education by creating comprehensive, accessible, and engaging learning 
//               experiences that inspire the next generation of innovators and problem-solvers.
//             </p>
            
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   icon: Target,
//                   title: 'Accessible Learning',
//                   description: 'Making robotics education available to everyone, regardless of background or experience level.'
//                 },
//                 {
//                   icon: Users,
//                   title: 'Community Driven',
//                   description: 'Building a supportive community of learners, educators, and robotics enthusiasts.'
//                 },
//                 {
//                   icon: Award,
//                   title: 'Excellence in Education',
//                   description: 'Maintaining the highest standards in educational content and learning outcomes.'
//                 }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
//                   whileHover={{ y: -10, transition: { duration: 0.3 } }}
//                 >
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
//                     <item.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
//                   <p className="text-blue-100">{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Team Member Card Component
// const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => {
//   return (
//     <div className="relative group max-w-sm">
//       <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
//         {/* Profile Image with Social Icons */}
//         <div className="relative mb-6">
//           <div className="relative w-32 h-32 mx-auto">
//             {/* Animated Border */}
//             <motion.div 
//               className="absolute inset-0 rounded-full"
//               animate={{
//                 background: [
//                   'conic-gradient(#3B82F6, #8B5CF6, #3B82F6)',
//                   'conic-gradient(#3B82F6, #8B5CF6, #EC4899, #3B82F6)',
//                   'conic-gradient(#3B82F6, #8B5CF6, #3B82F6)'
//                 ]
//               }}
//               transition={{ 
//                 duration: 3,
//                 repeat: Infinity,
//                 ease: "linear"
//               }}
//             >
//               <div className="w-full h-full rounded-full bg-gray-900 p-1">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             {/* Social Icons */}
//             <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 space-y-2">
//               {member.social.map((social: any, socialIndex: number) => (
//                 <motion.a
//                   key={socialIndex}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.5 + socialIndex * 0.1 }}
//                   whileHover={{ scale: 1.2, x: 5 }}
//                   className="block w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <social.icon className="h-5 w-5 text-white" />
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Member Info */}
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
//           <p className="text-blue-400 font-medium mb-4">{member.role}</p>
//           <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

//           {/* Expertise Tags */}
//           <div className="flex flex-wrap gap-2 justify-center">
//             {member.expertise.map((skill: string, skillIndex: number) => (
//               <motion.span
//                 key={skillIndex}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.7 + skillIndex * 0.1 }}
//                 className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/30"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


function About() {
  return (
    <div className="flex min-h-screen items-center justify-center text-3xl font-semibold text-yellow-500">About page is under development</div>
  )
}

export default About