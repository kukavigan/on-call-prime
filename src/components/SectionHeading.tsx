import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({ label, title, description, center = true }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div ref={ref} className={`mb-20 lg:mb-24 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}
        >
          <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
          <span className="text-primary/50 text-[11px] font-semibold tracking-[0.2em] uppercase">
            {label}
          </span>
          {center && <div className="h-px w-8 bg-gradient-to-l from-primary/40 to-transparent" />}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.15] tracking-[-0.03em]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`mt-5 text-white/30 text-[15px] sm:text-base max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
