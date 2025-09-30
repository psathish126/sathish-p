import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      category: 'Competition Wins',
      icon: <FiAward className="w-6 h-6" />,
      items: [
        'RPL\'23 - First Place',
        'MECHNOTRON\'25 - Winner',
        'SHRISTI\'24 - Champion',
        'RoboGlitz\'24 & \'25 - Winner',
      ],
    },
    {
      category: 'Runner-Up Positions',
      icon: <FiAward className="w-6 h-6" />,
      items: [
        'Shaastra\'25 (IIT Madras) - Second Place',
        'Prodothon\'24 & \'25 - Runner-Up',
        'Kriya\'24 & \'25 - Second Place',
      ],
    },
    {
      category: 'Certifications',
      icon: <FiCheckCircle className="w-6 h-6" />,
      items: [
        'Meta Front-End Developer Professional Certificate',
        'HackerRank - JavaScript, CSS, Python',
        'Google Cybersecurity Professional Certificate',
        'Industry Recognized Professional',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '30+', label: 'Competitions', icon: <FiStar /> },
            { number: '10+', label: 'Wins', icon: <FiAward /> },
            { number: '15+', label: 'Certifications', icon: <FiCheckCircle /> },
            { number: '100%', label: 'Dedication', icon: <FiStar /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="gradient-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl text-secondary mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gradient-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-xl text-card-foreground">
                  {achievement.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-card-foreground"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Special Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="gradient-card rounded-lg p-8 shadow-md max-w-3xl mx-auto">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-3 text-card-foreground">
              Notable Achievement
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Competed in 30+ robotics competitions with multiple wins at state and national
              levels, demonstrating consistent excellence in engineering and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
