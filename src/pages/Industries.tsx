import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CloudLightning,
  Umbrella,
  Briefcase,
  FileStack,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const industries = [
  {
    id: 'property',
    icon: Building2,
    title: 'Property Insurance',
    desc: 'Residential and commercial property claims require specialized handling. OCP provides trained claims specialists who understand property damage assessment, construction terminology, and the nuances of property policy coverage.',
    capabilities: [
      'Residential & commercial property claims',
      'Water damage & mold remediation claims',
      'Fire & smoke damage processing',
      'Theft & vandalism claim handling',
      'Builder\'s risk & renovation claims',
    ],
    stats: { claims: '200K+', accuracy: '99.2%', speed: '60% faster' },
  },
  {
    id: 'catastrophe',
    icon: CloudLightning,
    title: 'Catastrophe Claims',
    desc: 'When catastrophe strikes, carriers need surge capacity immediately. OCP\'s elastic operations model scales within 48 hours to handle catastrophic event volumes without sacrificing quality or compliance.',
    capabilities: [
      'Hurricane & tropical storm claims',
      'Wildfire & smoke damage claims',
      'Tornado & severe weather events',
      'Flood damage claim processing',
      'Earthquake & natural disaster support',
    ],
    stats: { claims: '150K+', accuracy: '98.8%', speed: '300% surge' },
  },
  {
    id: 'carriers',
    icon: Umbrella,
    title: 'Insurance Carriers',
    desc: 'From national carriers to regional insurers, OCP provides the operational backbone that allows carriers to focus on underwriting, product development, and growth while we handle the claims lifecycle.',
    capabilities: [
      'Multi-line claims processing',
      'Policyholder support & retention',
      'Regulatory compliance support',
      'Quality assurance & auditing',
      'Analytics & performance reporting',
    ],
    stats: { carriers: '50+', accuracy: '99.5%', savings: '40%+' },
  },
  {
    id: 'tpas',
    icon: Briefcase,
    title: 'Third-Party Administrators',
    desc: 'TPAs need flexible, scalable operations that can adapt to multiple client requirements simultaneously. OCP provides white-label services that TPAs can offer to their carrier clients as their own.',
    capabilities: [
      'Multi-client claims management',
      'White-label service delivery',
      'Client-specific workflow configuration',
      'Scalable team structures',
      'Unified reporting across clients',
    ],
    stats: { clients: '30+', accuracy: '99.3%', flexibility: '100%' },
  },
  {
    id: 'claims-mgmt',
    icon: FileStack,
    title: 'Claims Management Firms',
    desc: 'Claims management firms rely on operational efficiency to maintain margins. OCP provides the back-office and support services that allow claims firms to process more claims with fewer overhead costs.',
    capabilities: [
      'Claims file management',
      'Adjuster support services',
      'Document preparation & review',
      'Quality control & auditing',
      'Client reporting & analytics',
    ],
    stats: { firms: '25+', efficiency: '35%+', quality: '99.1%' },
  },
];

export default function Industries() {
  return (
    <div>
      <PageHero
        label="Industries"
        title="Serving the Insurance Ecosystem"
        description="From property carriers to catastrophe response teams, we deliver specialized operations for every segment of the insurance industry."
        cta={{ label: 'Get Started', path: '/contact' }}
      />

      {/* Industries Detail */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto space-y-28">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              id={ind.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center">
                      <ind.icon className="w-6 h-6 text-primary/60" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{ind.title}</h2>
                  </div>
                  <p className="text-white/30 leading-relaxed text-[15px] mb-8">{ind.desc}</p>

                  <h3 className="text-white/20 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
                    Key Capabilities
                  </h3>
                  <div className="space-y-3">
                    {ind.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent/50 flex-shrink-0 mt-0.5" />
                        <span className="text-white/35 text-[13px]">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="glass-card-static rounded-2xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-full blur-[60px]" />
                    <h3 className="text-white font-semibold text-[15px] mb-7 relative z-10">Performance Metrics</h3>
                    <div className="grid grid-cols-3 gap-4 relative z-10">
                      {Object.entries(ind.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl sm:text-3xl font-bold text-primary/80 mb-1">{value}</div>
                          <div className="text-white/20 text-[10px] tracking-wider uppercase">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="line-glow my-8" />

                    <Link to="/contact" className="btn-primary w-full text-center block !text-[13px] relative z-10">
                      <span className="flex items-center justify-center gap-2">
                        Discuss Your Needs <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.01]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight">
              Don't See Your Industry?
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mb-10">
              We serve a wide range of insurance segments. Let's discuss how OCP can support your specific needs.
            </p>
            <Link to="/contact" className="btn-primary">
              <span className="flex items-center gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
