import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Building, GraduationCap } from 'lucide-react';

const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const useCases = [
    {
      icon: Briefcase,
      title: 'International Business Payments',
      description: 'Pay international suppliers and invoices with ease and complete documentation.',
      gradient: 'from-primary/20 to-accent/10',
    },
    {
      icon: Users,
      title: 'Family Support Abroad',
      description: 'Send funds to family members abroad securely through verified banking channels.',
      gradient: 'from-accent/20 to-primary/10',
    },
    {
      icon: Building,
      title: 'Corporate Fund Transfers',
      description: 'Move corporate funds between group entities and jurisdictions efficiently.',
      gradient: 'from-primary/15 to-teal-electric/20',
    },
    {
      icon: GraduationCap,
      title: 'High-Value Payments',
      description: 'Process escrow, tuition, or professional services payments with full compliance.',
      gradient: 'from-teal-electric/15 to-primary/20',
    },
  ];

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Use Cases
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted for <span className="gradient-text">Every Transfer Need</span>
          </motion.h2>

          <motion.p
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From personal remittances to complex corporate transactions, our SWIFT service adapts to your needs.
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="glass-card p-8 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  borderColor: 'hsl(187 100% 50% / 0.4)'
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 flex gap-6">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <useCase.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
