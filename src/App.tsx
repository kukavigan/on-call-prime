import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Certifications from './pages/Certifications';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CookieBanner from "./components/CookieBanner";

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[100] bg-[#060A14] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8 flex items-center justify-center"
        >
        <img
          src={`${import.meta.env.BASE_URL}ocp-logo.png`}
          alt="On Call Prime Logo"
          className="w-36 md:w-44 h-auto object-contain"
        />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-px bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-full bg-gradient-to-r from-primary to-accent/60 rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white/15 text-[10px] tracking-[0.3em] uppercase mt-4"
        >
          
        </motion.p>
      </div>
    </motion.div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <AnimatedRoutes />
        </Layout>
      )}
      <CookieBanner />
    </BrowserRouter>
  );
}
