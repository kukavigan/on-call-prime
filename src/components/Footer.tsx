import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  Services: [
    { label: 'Claims File Services', path: '/services/claims-file' },
    { label: 'FNOL Support', path: '/services/fnol' },
    { label: 'Customer Care', path: '/services/customer-care' },
    { label: 'Back Office Operations', path: '/services/back-office' },
    { label: 'QA & Auditing', path: '/services/qa-auditing' },
    { label: 'Adjuster Support', path: '/services/adjuster-support' },
    { label: 'Survey & Reporting', path: '/services/survey-reporting' },
  ],
  Industries: [
    { label: 'Property Insurance', path: '/industries#property' },
    { label: 'Catastrophe Claims', path: '/industries#catastrophe' },
    { label: 'Insurance Carriers', path: '/industries#carriers' },
    { label: 'TPAs', path: '/industries#tpas' },
    { label: 'Claims Management', path: '/industries#claims-mgmt' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#040810] border-t border-white/[0.03]">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={`${import.meta.env.BASE_URL}ocp-logo.png`}
                alt="On Call Prime"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />

              <div className="hidden flex items-center gap-2.5">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary/15 rounded-md rotate-3" />
                  <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center shadow-[0_0_16px_rgba(40,171,230,0.2)]">
                    <span className="text-white font-bold text-sm">O</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[14px] leading-tight tracking-[-0.02em]">On Call Prime</span>
                  <span className="text-primary/25 text-[8px] font-medium tracking-[0.25em] uppercase">
                    Insurance Operations
                  </span>
                </div>
              </div>

            </Link>
            <p className="text-white/15 text-[13px] leading-relaxed max-w-sm mb-8">
              Enterprise-grade insurance operations and claims support. Powered by technology,
              delivered by experts, scaled for the future.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: 'Pristina, Kosovo' },
                { icon: Mail, text: 'info@oncallprime.com' },
                { icon: Phone, text: '+1 (972) 316 7598' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-[12px] text-white/15">
                  <item.icon className="w-3.5 h-3.5 text-primary/30" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white/30 font-semibold text-[11px] tracking-[0.15em] uppercase mb-5">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1 text-[13px] text-white/15 hover:text-primary/60 transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/8 text-[11px]">
            &copy; {new Date().getFullYear()} On Call Prime. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
              <Link key={item} to="#" className="text-white/8 hover:text-white/20 text-[11px] transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
