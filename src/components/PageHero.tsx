import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedGrid from './AnimatedGrid';

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  cta?: { label: string; path: string };
  showGrid?: boolean;
}

export default function PageHero({ label, title, description, cta, showGrid = true }: PageHeroProps) {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {showGrid && <AnimatedGrid />}

      <div className="absolute inset-0 bg-gradient-to-b from-[#060A14]/60 via-transparent to-[#060A14]" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-primary/40 to-transparent" />
            <span className="text-primary/50 text-[11px] font-semibold tracking-[0.2em] uppercase">
              {label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-bold text-white leading-[1.1] mb-7 tracking-[-0.03em]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-white/30 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to={cta.path} className="btn-primary">
                <span>{cta.label}</span>
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="line-glow" />
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      </div>
    </section>
  );
}
