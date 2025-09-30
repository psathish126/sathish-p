import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('fullstack');

  const projects = {
    fullstack: [
      {
        title: 'Prodothon 2025 Website',
        description: 'Official event website for Prodothon hackathon with registration and information system.',
        tech: ['React.js', 'Tailwind CSS', 'Node.js'],
        year: '2025',
        live: 'https://prodothon.psgtech.ac.in/',
        github: '#',
      },
      {
        title: 'ProdSource Platform',
        description: 'Collaborative platform for production engineering resources and community.',
        tech: ['React.js', 'MongoDB', 'Express.js'],
        year: '2024',
        live: 'https://prodsource.vercel.app/',
        github: '#',
      },
      {
        title: 'Tamizh Tech Website',
        description: 'Educational technology platform promoting Tamil language in tech.',
        tech: ['React.js', 'Tailwind CSS', 'Vercel'],
        year: '2024',
        live: 'https://www.tamizhtech.in/',
        github: '#',
      },
      {
        title: 'Fixus Gantt Chart',
        description: 'Project management tool with interactive Gantt chart visualization.',
        tech: ['React.js', 'JavaScript', 'Chart.js'],
        year: '2024',
        live: 'https://fixusganttchart.vercel.app/',
        github: '#',
      },
      {
        title: 'Traceability Sync',
        description: 'Supply chain traceability and synchronization dashboard.',
        tech: ['React.js', 'Node.js', 'MongoDB'],
        year: '2025',
        live: 'https://traceabilitysync.vercel.app/',
        github: '#',
      },
      {
        title: 'HIDMS PSG',
        description: 'Hospital Information & Data Management System for PSG.',
        tech: ['React.js', 'Express.js', 'SQL'],
        year: '2024',
        live: 'https://hidms-psg.vercel.app/',
        github: '#',
      },
      {
        title: 'Tamizharasan K Portfolio',
        description: 'Professional portfolio website with modern design and animations.',
        tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
        year: '2024',
        live: 'https://tamizharasan-k.vercel.app/',
        github: '#',
      },
      {
        title: 'Kriya Website',
        description: 'Technical symposium website for PSG Tech annual fest.',
        tech: ['React.js', 'Node.js', 'Tailwind CSS'],
        year: '2024',
        live: 'https://kriya.psgtech.ac.in/',
        github: '#',
      },
    ],
    academic: [
      {
        title: 'ML-based Electropneumatic Sorting System',
        description: 'Automated sorting system using machine learning for industrial applications.',
        tech: ['Python', 'Machine Learning', 'Arduino'],
        year: '2024',
      },
      {
        title: 'Lean Manufacturing Implementation',
        description: 'Process optimization study in FMCG industry using lean principles.',
        tech: ['Data Analysis', 'Process Optimization'],
        year: '2025',
      },
      {
        title: 'Shipment Delay Prediction',
        description: 'ML model predicting supply chain delays for improved logistics.',
        tech: ['Python', 'Machine Learning', 'Data Science'],
        year: '2025',
      },
      {
        title: 'Fixture Design for Connecting Rod',
        description: 'CAD design and analysis of manufacturing fixture.',
        tech: ['Creo', 'ANSYS', 'CAD'],
        year: 'Ongoing',
      },
      {
        title: 'FDM Process Optimization',
        description: 'Machine learning optimization of 3D printing parameters.',
        tech: ['Python', 'Machine Learning', 'Manufacturing'],
        year: 'Ongoing',
      },
      {
        title: 'AI-powered Digital Thread',
        description: 'End-to-end raw material traceability using AI and blockchain concepts.',
        tech: ['AI', 'Python', 'Database'],
        year: 'Ongoing',
      },
    ],
    robotics: [
      {
        title: 'Autonomous Robot (Robocon 2024)',
        description: 'Competition-grade autonomous navigation robot.',
        tech: ['Arduino', 'C++', 'Sensors'],
        year: '2024',
      },
      {
        title: 'RC Race Bot',
        description: 'High-speed racing robot with optimized control.',
        tech: ['Arduino', 'Motor Control'],
        year: '2023',
      },
      {
        title: 'RC Soccer Bot',
        description: 'Maneuverable robot designed for robotic soccer competitions.',
        tech: ['Arduino', 'Wireless Control'],
        year: '2023',
      },
      {
        title: 'RC Sumo Bot',
        description: 'Combat robot for sumo wrestling competitions.',
        tech: ['Arduino', 'Motor Drivers'],
        year: '2023',
      },
      {
        title: 'Fastest Line Follower',
        description: 'High-speed line following robot with PID control.',
        tech: ['Arduino', 'PID Control', 'IR Sensors'],
        year: '2023',
      },
      {
        title: 'Maze Solver',
        description: 'Autonomous maze-solving robot using pathfinding algorithms.',
        tech: ['Arduino', 'Algorithms', 'Sensors'],
        year: '2023',
      },
      {
        title: 'RC Hovercraft',
        description: 'Air-cushion vehicle with thrust-vector control.',
        tech: ['Arduino', 'Motor Control'],
        year: '2024',
      },
      {
        title: 'RC Boat',
        description: 'Waterborne remote-controlled vehicle.',
        tech: ['Arduino', 'Waterproofing'],
        year: '2023',
      },
      {
        title: 'RC Drone',
        description: 'Quadcopter with stabilization and FPV capabilities.',
        tech: ['Flight Controller', 'Gyroscope'],
        year: '2024',
      },
      {
        title: 'RC Submerged Vehicle',
        description: 'Underwater exploration robot with camera.',
        tech: ['Arduino', 'Waterproofing', 'Motors'],
        year: '2024',
      },
      {
        title: 'RC Pick and Place Robot',
        description: 'Industrial automation robot for material handling.',
        tech: ['Arduino', 'Servo Motors', 'Gripper'],
        year: '2023',
      },
      {
        title: 'Autonomous Rover (Caterpillar)',
        description: 'Self-navigating rover for Caterpillar Autonomy Challenge.',
        tech: ['ROS', 'Computer Vision', 'Sensors'],
        year: 'Ongoing',
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work across full-stack development, academic research, and robotics innovation
          </p>
        </motion.div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="fullstack">Full-Stack</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="robotics">Robotics</TabsTrigger>
          </TabsList>

          <LayoutGroup>
            {Object.entries(projects).map(([category, projectList]) => (
              <TabsContent key={category} value={category}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={category}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {projectList.map((project, index) => (
                      <motion.div
                        key={`${category}-${index}`}
                        layout
                        variants={cardVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0px 10px 20px rgba(0, 31, 63, 0.2)',
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="gradient-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                            <FiCode className="w-6 h-6" />
                          </div>
                          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="font-bold text-xl mb-3 text-card-foreground group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                              className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {(project.live || project.github) && (
                          <div className="flex gap-3 pt-4 border-t border-border">
                            {project.live && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 group/btn"
                                asChild
                              >
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2"
                                >
                                  <FiExternalLink className="w-4 h-4" />
                                  <span>Live Demo</span>
                                </a>
                              </Button>
                            )}
                            {project.github && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 group/btn"
                                asChild
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2"
                                >
                                  <FiGithub className="w-4 h-4" />
                                  <span>Source</span>
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </LayoutGroup>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
