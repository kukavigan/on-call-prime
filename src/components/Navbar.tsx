import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/ocp-logo.png";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Claims File Services', path: '/services/claims-file' },
      { label: 'FNOL Support', path: '/services/fnol' },
      { label: 'Customer Care', path: '/services/customer-care' },
      { label: 'Back Office Operations', path: '/services/back-office' },
      { label: 'QA & Auditing', path: '/services/qa-auditing' },
      { label: 'Adjuster Support', path: '/services/adjuster-support' },
      { label: 'Survey & Reporting', path: '/services/survey-reporting' },
    ],
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-[#060A14]/80 backdrop-blur-2xl border-b border-white/[0.03]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="On Call Prime"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center gap-2.5">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary/15 rounded-md rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center shadow-[0_0_16px_rgba(40,171,230,0.25)]">
                  <span className="text-white font-bold text-sm">O</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-[14px] leading-tight tracking-[-0.02em]">
                  On Call Prime
                </span>
                <span className="text-primary/30 text-[8px] font-medium tracking-[0.25em] uppercase">
                  Insurance Operations
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-md transition-all duration-300 ${
                    location.pathname === link.path ||
                    (link.children && location.pathname.startsWith('/services') && link.path === '/services')
                      ? 'text-white'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {(location.pathname === link.path ||
                    (link.children && location.pathname.startsWith('/services') && link.path === '/services')) && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/[0.05] rounded-md -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-0 mt-2 w-60 overflow-hidden rounded-xl bg-[#0A0F1C]/95 backdrop-blur-2xl border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                      <div className="p-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="flex items-center gap-2.5 px-3 py-2 text-[13px] text-white/40 hover:text-white hover:bg-white/[0.03] rounded-md transition-all duration-200"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary/30" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:inline-flex btn-primary !py-2 !px-5 !text-[12px] !rounded-md">
              <span>Get Started</span>
            </Link>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white/40 hover:text-white transition-colors duration-300"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-[#060A14]/98 backdrop-blur-2xl border-t border-white/[0.03]"
          >
            <div className="container-custom mx-auto px-4 py-5 space-y-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-3 py-2.5 text-[13px] font-medium rounded-md transition-colors ${
                      location.pathname === link.path
                        ? 'text-white bg-white/[0.03]'
                        : 'text-white/40 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-3 space-y-0.5 mt-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-[12px] text-white/25 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="pt-3">
                <Link to="/contact" className="btn-primary w-full text-center block !text-[12px]">
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
