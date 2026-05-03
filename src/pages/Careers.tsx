import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  ChevronDown,
  Heart,
  Zap,
  Globe,
  GraduationCap,
  DollarSign,
  Users,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ocpTeam from "../assets/ocp-team.jpg";
import trainingTeam from "../assets/training-team.jpg";
import teamEvent from "../assets/team-event.jpg";

const positions = [
  {
    title: 'Claims Processing Specialist',
    department: 'Operations',
    location: 'Pristina, Kosovo',
    type: 'Full-time',
    desc: 'Process and manage insurance claims files with precision. Ideal candidates have strong attention to detail and English proficiency.',
  },
  {
    title: 'FNOL Intake Specialist',
    department: 'Operations',
    location: 'Pristina, Kosovo',
    type: 'Full-time / Shift',
    desc: 'Handle first notice of loss intake calls with empathy and accuracy. Requires excellent communication skills and ability to work in shifts.',
  },
  {
    title: 'Quality Assurance Analyst',
    department: 'Quality',
    location: 'Pristina, Kosovo',
    type: 'Full-time',
    desc: 'Conduct quality audits on claims files and customer interactions. Requires analytical mindset and insurance process knowledge.',
  },
  {
    title: 'Customer Care Representative',
    department: 'Customer Care',
    location: 'Pristina, Kosovo',
    type: 'Full-time / Shift',
    desc: 'Provide white-label policyholder support for U.S. insurance carriers. Requires strong English and customer service skills.',
  },
  {
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Pristina, Kosovo',
    type: 'Full-time',
    desc: 'Analyze claims data, generate reports, and provide actionable insights. Requires SQL, Excel, and data visualization skills.',
  },
  {
    title: 'Team Lead - Operations',
    department: 'Management',
    location: 'Pristina, Kosovo',
    type: 'Full-time',
    desc: 'Lead and develop a team of claims specialists. Requires 3+ years of leadership experience in BPO or insurance operations.',
  },
  {
    title: 'IT Systems Administrator',
    department: 'Technology',
    location: 'Pristina, Kosovo',
    type: 'Full-time',
    desc: 'Manage and maintain our technology infrastructure including claims systems, security tools, and network operations.',
  },
];

const benefits = [
  { icon: DollarSign, title: 'Competitive Compensation', desc: 'Above-market salaries with performance bonuses and annual reviews.' },
  { icon: GraduationCap, title: 'Learning & Development', desc: 'Comprehensive training programs, certifications, and career growth paths.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Full health insurance, mental health support, and wellness programs.' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work with U.S. enterprise clients and gain international business experience.' },
  { icon: Zap, title: 'Modern Technology', desc: 'Work with cutting-edge tools and AI-powered platforms.' },
  { icon: Users, title: 'Community', desc: 'A collaborative, inclusive culture with team events and social activities.' },
];

const cultureValues = [
  { title: 'Ownership', desc: 'We take pride in our work and hold ourselves accountable for outcomes.' },
  { title: 'Growth', desc: 'We invest in continuous learning and create opportunities for advancement.' },
  { title: 'Collaboration', desc: 'We succeed together through open communication and mutual support.' },
  { title: 'Impact', desc: 'Every role at OCP directly contributes to better insurance experiences.' },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Careers() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        label="Careers"
        title="Build the Future of Insurance Operations"
        description="Join a team that's transforming how insurance works. At OCP, you'll tackle real challenges, grow your career, and make a meaningful impact."
        cta={{ label: 'View Open Positions', path: '#positions' }}
      />

      {/* Culture */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-primary/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Our Culture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
                Where Talent<br />Meets Purpose
              </h2>
              <p className="text-white/30 leading-relaxed text-[15px] mb-10">
                At OCP, we believe that exceptional operations start with exceptional people.
                Our culture is built on ownership, growth, and impact — creating an environment
                where talented professionals can build meaningful careers while transforming
                the insurance industry.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {cultureValues.map((v) => (
                  <div key={v.title} className="glass-card-static rounded-lg p-4">
                    <h4 className="text-white font-semibold text-[13px] mb-1">{v.title}</h4>
                    <p className="text-white/25 text-[12px] leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-card-static rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/[0.03] rounded-full blur-[80px]" />
              <h3 className="text-white font-semibold text-[15px] mb-6 relative z-10">Life at OCP</h3>
              <div className="space-y-4 text-white/30 text-[13px] leading-relaxed relative z-10">
                <p>
                  Our Pristina operations center is a modern, purpose-built facility designed
                  for productivity and comfort. Open workspaces, quiet rooms, and collaboration
                  zones give you the flexibility to do your best work.
                </p>
                <p>
                  With team events, learning workshops, and a vibrant social scene, OCP is
                  more than a workplace — it's a community of professionals who support and
                  challenge each other to grow.
                </p>
                <p>
                  As a Kosovo-based company serving U.S. enterprise clients, you'll gain
                  invaluable international business experience and work with technologies
                  that are shaping the future of insurance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office & Culture Images */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-500/20 to-primary/[0.04] relative">
                <img
                  src={ocpTeam}
                  alt="Modern Office Space"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

                <div className="absolute bottom-5 left-5 z-20">
                  <p className="text-white text-sm font-medium">
                    Modern Office Space
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gradient-to-bl from-primary/[0.04] to-navy-500/20 relative">
                <img
                  src={trainingTeam}
                  alt="Team Collaboration"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

                <div className="absolute bottom-5 left-5 z-20">
                  <p className="text-white text-sm font-medium">
                    Team Collaboration
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-xl overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gradient-to-r from-navy-500/20 to-accent/[0.03] relative">
                <img
                  src={teamEvent}
                  alt="Company Events"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

                <div className="absolute bottom-5 left-5 z-20">
                  <p className="text-white text-sm font-medium">
                    Company Events
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-primary/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Benefits</span>
              <div className="h-px w-8 bg-gradient-to-l from-primary/50 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Why You'll Love Working Here
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp} className="group glass-card rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-primary/[0.07] border border-primary/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/[0.12] group-hover:border-primary/[0.15] transition-all duration-500">
                  <b.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2">{b.title}</h3>
                <p className="text-white/30 text-[13px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding relative scroll-mt-24">
        <div className="container-custom mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
              <span className="text-primary/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Open Positions</span>
              <div className="h-px w-8 bg-gradient-to-l from-primary/50 to-transparent" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Join Our Team
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto">
              Explore open roles and find the right fit for your skills and career goals.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                  className="w-full glass-card rounded-xl p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-[15px] mb-2.5">{pos.title}</h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-white/25">
                          <Briefcase className="w-3 h-3" /> {pos.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-white/25">
                          <MapPin className="w-3 h-3" /> {pos.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-white/25">
                          <Clock className="w-3 h-3" /> {pos.type}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-white/20 transition-transform duration-300 ${
                        expandedIdx === i ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {expandedIdx === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-white/[0.04]">
                          <p className="text-white/30 text-[13px] mb-5 leading-relaxed">{pos.desc}</p>
                          <Link to="/contact" className="btn-primary !text-[12px] !py-2.5 !px-5">
                            <span className="flex items-center gap-1.5">
                              Apply Now <ArrowRight className="w-3 h-3" />
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
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
              Don't See the Right Role?
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mb-10">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <Link to="/contact" className="btn-primary">
              <span className="flex items-center gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
