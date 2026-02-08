import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, FileText, Radar, ShieldCheck } from 'lucide-react';

const KeyBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access international payments through SWIFT, reaching beneficiary accounts in virtually any country worldwide.',
    },
    {
      icon: FileText,
      title: 'Structured References',
      description: 'Clear payment references enable seamless business reconciliation and audit trail management.',
    },
    {
      icon: Radar,
      title: 'Enhanced Tracking',
      description: 'Optional end-to-end visibility through SWIFT GPI corridors where supported for real-time status updates.',
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security',
      description: 'Comprehensive verification, KYC/AML screening, and full audit trail for every transaction.',
    },
  ];

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Key Benefits
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Choose <span className="gradient-text">SWIFT Transfers</span>
          </motion.h2>

          <motion.p
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the gold standard in international banking with features designed for both businesses and individuals.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-card-hover p-8 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Icon Container */}
              <motion.div
                className="relative w-16 h-16 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-colors duration-500">
                  <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-10 h-px bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
