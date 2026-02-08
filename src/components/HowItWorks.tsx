import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCheck, FileSearch, Send, Building2, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: UserCheck,
      number: '01',
      title: 'Submit Beneficiary Details',
      description: 'Provide beneficiary details (name, bank, IBAN/account number, SWIFT/BIC) and payment purpose.',
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Compliance Screening',
      description: 'Bank performs compliance screening (KYC/AML, sanctions, risk checks) to ensure regulatory adherence.',
    },
    {
      icon: Send,
      number: '03',
      title: 'Payment Release',
      description: 'Payment instruction is released through the applicable rail (domestic/SEPA/SWIFT) for processing.',
    },
    {
      icon: Building2,
      number: '04',
      title: 'Intermediary Processing',
      description: 'Intermediary banks (if any) process and route the payment to the beneficiary bank securely.',
    },
    {
      icon: CheckCircle2,
      number: '05',
      title: 'Funds Credited',
      description: 'Beneficiary bank credits the beneficiary account; confirmations may be available depending on corridor.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple, Secure <span className="gradient-text">Transfer Process</span>
          </motion.h2>

          <motion.p
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your funds move through our secure banking infrastructure with complete transparency at every step.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <motion.div
              className="w-full h-full timeline-line"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              {/* Number Badge */}
              <motion.div
                className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10"
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full blur-xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  {/* Badge */}
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                    <span className="text-lg font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>
              </motion.div>

              {/* Content Card */}
              <div
                className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <motion.div
                  className="glass-card p-6 group hover:border-primary/40 transition-all duration-500"
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 0 40px hsl(187 100% 50% / 0.2)'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
