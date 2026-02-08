import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is a SWIFT transfer?',
      answer: 'A SWIFT transfer is an international bank-to-bank wire where payment instructions are transmitted securely through the SWIFT network to deliver funds to a beneficiary account.',
      tags: ['SWIFT transfer', 'international wire', 'bank-to-bank transfer', 'cross-border payment', 'SWIFT BIC'],
    },
    {
      question: 'Who can use SWIFT transfers at Prominence Bank?',
      answer: 'SWIFT transfers are available to Prominence Bank account holders only, subject to eligibility, KYC/AML, sanctions screening, transaction risk review, and final bank approval.',
      tags: ['account holders', 'KYC AML', 'sanctions screening', 'eligibility', 'compliance'],
    },
    {
      question: 'What information is required to send a SWIFT transfer?',
      answer: 'Beneficiary name, beneficiary bank name, IBAN/account number, SWIFT/BIC, currency, amount, and a clear payment purpose/reference. Additional fields may be required depending on corridor.',
      tags: ['SWIFT details', 'IBAN', 'BIC', 'beneficiary information', 'payment reference'],
    },
    {
      question: 'How long does a SWIFT transfer take?',
      answer: 'Timelines vary by corridor and intermediaries; most international wires complete within 1-3 business days. Certain corridors may offer faster delivery and tracking where supported.',
      tags: ['SWIFT transfer time', 'settlement', 'business days', 'corridor', 'tracking'],
    },
    {
      question: 'Can I track my SWIFT payment?',
      answer: 'Where supported, tracking references can be provided and status checks can be performed via official channels. Enhanced end-to-end visibility may be available in SWIFT gpi corridors.',
      tags: ['SWIFT tracking', 'payment status', 'UETR', 'confirmation', 'gpi'],
    },
    {
      question: 'Can a SWIFT transfer be cancelled or recalled?',
      answer: 'Once released, cancellation is not guaranteed. A recall may be attempted, but success depends on the beneficiary bank and whether funds have already been credited.',
      tags: ['recall', 'cancellation', 'reversibility', 'beneficiary bank', 'SWIFT message'],
    },
    {
      question: 'Why might a SWIFT transfer be delayed or rejected?',
      answer: 'Common reasons include incorrect beneficiary details, intermediary checks, missing purpose/supporting documents, sanctions filters, or local regulatory requirements.',
      tags: ['transfer delay', 'rejected wire', 'compliance review', 'sanctions', 'incorrect details'],
    },
    {
      question: 'What fees apply to SWIFT transfers?',
      answer: 'Fees depend on corridor, transfer type, and any intermediary charges. Fee structures are disclosed through official Prominence Bank channels before execution.',
      tags: ['wire fees', 'intermediary fees', 'SWIFT charges', 'fee disclosure', 'banking fees'],
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
            FAQ
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>

          <motion.p
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about SWIFT transfers at Prominence Bank.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            >
              {/* Question Header */}
              <motion.button
                className="w-full p-6 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'hsl(213 45% 12% / 0.5)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pl-14">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
