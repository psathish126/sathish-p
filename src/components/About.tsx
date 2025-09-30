import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const education = [
    {
      degree: 'B.E. Production Engineering',
      institution: 'PSG College of Technology, Coimbatore',
      duration: 'Sep 2022 – May 2026',
      cgpa: '6.8 CGPA',
      icon: <FiBookOpen className="w-6 h-6" />,
    },
    {
      degree: 'Higher Secondary (HSC)',
      institution: 'VCV Govt. Higher Secondary School',
      duration: 'Sep 2020 – Jul 2022',
      cgpa: '89%',
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
    {
      degree: 'Secondary School (SSLC)',
      institution: 'GHS Saravanampatti',
      duration: 'Jul 2015 – May 2020',
      cgpa: '79%',
      icon: <FiAward className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="gradient-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-card-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      <span className="text-sm font-semibold text-secondary">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Who I Am</h3>
            <div className="gradient-card rounded-lg p-6 shadow-md space-y-4">
              <p className="text-card-foreground leading-relaxed">
                I am a passionate Production Engineering student at PSG College of Technology,
                combining technical expertise in manufacturing with full-stack development skills.
                My journey has been defined by a relentless pursuit of innovation at the
                intersection of industrial engineering and technology.
              </p>
              <p className="text-card-foreground leading-relaxed">
                With extensive experience in robotics competitions and AI-driven solutions, I have
                developed a unique perspective on solving real-world industrial challenges through
                intelligent automation and digital transformation.
              </p>
              <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg mt-6">
                <p className="text-card-foreground font-semibold flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Fun Fact: Competed in 30+ robotics events with multiple wins at state and
                  national levels!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Robotics Competitions</p>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <p className="text-3xl font-bold text-secondary">10+</p>
                  <p className="text-sm text-muted-foreground">Full-Stack Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
