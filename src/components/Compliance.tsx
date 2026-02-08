import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const Compliance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Compliance Box */}
          <motion.div
            className="relative glass-card p-8 md:p-12 border-l-4 border-l-primary overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

            {/* Icon & Header */}
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
              >
                <ShieldCheck className="w-8 h-8 text-primary" />
              </motion.div>

              <div>
                <motion.span
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Important Information
                </motion.span>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Eligibility & Compliance
                </motion.h2>
              </div>
            </div>

            {/* Content */}
            <motion.p
              className="text-lg text-foreground/90 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Available to Prominence Bank account holders only. All transfers are subject to eligibility, KYC/AML, sanctions screening, source of funds/wealth validation where required, transaction monitoring, corridor/counterparty acceptance, and final bank approval.
            </motion.p>

            {/* Disclaimer Box */}
            <motion.div
              className="bg-secondary/30 border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Information is provided for general guidance only and does not constitute an offer, commitment, guarantee, or promise to execute any transaction. Fees, timelines, and availability depend on corridor, counterparty, and compliance outcome.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
