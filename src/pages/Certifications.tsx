import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Award,
  CheckCircle2,
  Lock,
  FileCheck,
  Globe,
  Eye,
  BarChart3,
  Users,
  Cpu,
  Server,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import approvalQa from "../assets/approval-qa.jpg";
import iso9001 from "../assets/iso9001.png";
import iso27001 from "../assets/iso27001.png";
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const iso9001Principles = [
  { icon: Users, title: 'Customer Focus', desc: 'Understanding and meeting policyholder needs is at the center of our quality management system.' },
  { icon: BarChart3, title: 'Evidence-Based Decisions', desc: 'Data-driven decision making ensures continuous improvement and operational excellence.' },
  { icon: Cpu, title: 'Process Approach', desc: 'Systematic process management delivers consistent, repeatable results across all operations.' },
  { icon: Eye, title: 'Continuous Improvement', desc: 'Ongoing measurement, analysis, and improvement cycles drive ever-higher quality standards.' },
];

const iso27001Controls = [
  { icon: Lock, title: 'Access Control', desc: 'Role-based access with multi-factor authentication and least-privilege principles.' },
  { icon: Server, title: 'Infrastructure Security', desc: 'Encrypted data at rest and in transit, with 24/7 monitoring and intrusion detection.' },
  { icon: FileCheck, title: 'Information Classification', desc: 'Data classification policies ensuring appropriate handling of sensitive information.' },
  { icon: Shield, title: 'Incident Response', desc: 'Documented incident response procedures with defined escalation paths and recovery plans.' },
];

const auditMetrics = [
  { value: 'Zero', label: 'Critical Findings' },
  { value: '100%', label: 'Policy Compliance' },
  { value: '24hr', label: 'Incident Response' },
  { value: 'Annual', label: 'External Audits' },
];

export default function Certifications() {
  return (
    <div>
      <PageHero
        label="Certifications & Compliance"
        title="Enterprise Trust, Verified"
        description="Our certifications aren't just badges — they're proof of the operational discipline and security rigor that protects your data and your policyholders."
        cta={{ label: 'Contact Us', path: '/contact' }}
      />

      {/* Trust Overview */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-primary/40 to-transparent" />
                <span className="text-primary/50 text-[11px] font-semibold tracking-[0.2em] uppercase">Our Commitment</span>
              </div>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-white mb-6 tracking-[-0.03em] leading-[1.15]">
                Security and Quality<br />Are Non-Negotiable
              </h2>
              <div className="space-y-4 text-white/25 text-[14px] leading-relaxed">
                <p>
                  In the insurance industry, trust is everything. That's why On Call Prime
                  maintains rigorous certifications that verify our commitment to quality
                  management and information security at every level of our operations.
                </p>
                <p>
                  Our ISO certifications aren't just compliance checkboxes — they represent
                  a continuous investment in the systems, processes, and culture that ensure
                  your data is protected and your operations run flawlessly.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {auditMetrics.map((m) => (
                  <div key={m.label} className="glass-card-static rounded-lg p-4">
                    <div className="text-primary/80 font-bold text-lg tracking-[-0.02em]">{m.value}</div>
                    <div className="text-white/20 text-[11px] tracking-wider uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Image placeholder - Security operations center */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-500/30 via-navy-500/10 to-primary/[0.05] relative">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-primary/20 mx-auto mb-3" />
                      <p className="text-white/15 text-[12px] font-medium">Security Operations Center</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#060A14] to-transparent">
                  <p className="text-white/30 text-[11px] font-medium">24/7 Security Operations — Pristina, Kosovo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ISO 9001 */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card-static rounded-2xl p-8 lg:p-12 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.03] rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-primary/60" />
                  </div>
                  <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-white mb-3 tracking-[-0.03em]">
                    ISO 9001
                  </h2>
                  <p className="text-primary/50 text-[13px] font-semibold mb-4">Quality Management System</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.06] border border-accent/[0.08]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent/60" />
                    <span className="text-accent/70 text-[11px] font-semibold">Certified</span>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <p className="text-white/25 text-[14px] leading-relaxed mb-6">
                    ISO 9001 is the international standard for quality management systems. It provides
                    a framework for organizations to demonstrate their ability to consistently provide
                    products and services that meet customer and regulatory requirements, while
                    driving continuous improvement.
                  </p>
                  <p className="text-white/25 text-[14px] leading-relaxed">
                    For OCP, ISO 9001 certification means every claims process, every customer
                    interaction, and every operational workflow is governed by documented, measured,
                    and continuously improved quality standards. This translates directly to higher
                    accuracy rates, faster resolution times, and better outcomes for our clients.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ISO 9001 Principles */}
          <SectionHeading
            label="Quality Principles"
            title="How ISO 9001 Drives Our Operations"
            description="These core principles shape every process, every decision, and every claim we handle."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {iso9001Principles.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="group glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center mb-5 group-hover:bg-primary/[0.1] group-hover:border-primary/[0.12] transition-all duration-500">
                  <p.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[14px] mb-2">{p.title}</h3>
                <p className="text-white/25 text-[13px] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image placeholder - Quality operations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
          >


            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[16/10] bg-gradient-to-br from-navy-500/20 via-navy-500/8 to-transparent relative">
                <img
                  src={approvalQa}
                  alt="Quality Assurance Team at Work"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

              <div className="absolute bottom-5 left-5 z-20">
                <p className="text-white text-sm font-medium">
                  Quality Assurance Team at Work
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <div className="aspect-[16/10] bg-gradient-to-bl from-navy-500/20 via-navy-500/8 to-transparent relative flex items-center justify-center">
              <img
                src={iso9001}
                alt="ISO 9001 Quality Management Certification"
                className="h-40 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />

            <div className="absolute bottom-5 left-5 z-20">
              <p className="text-white text-sm font-medium">
                ISO 9001 Quality Management
              </p>
            </div>
          </div>
        </div>
          </motion.div>
        </div>
      </section>

      {/* ISO 27001 */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card-static rounded-2xl p-8 lg:p-12 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/[0.02] rounded-full blur-[100px]" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-accent/[0.06] border border-accent/[0.08] flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-accent/60" />
                  </div>
                  <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-white mb-3 tracking-[-0.03em]">
                    ISO 27001
                  </h2>
                  <p className="text-accent/50 text-[13px] font-semibold mb-4">Information Security Management</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.06] border border-accent/[0.08]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent/60" />
                    <span className="text-accent/70 text-[11px] font-semibold">Certified</span>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <p className="text-white/25 text-[14px] leading-relaxed mb-6">
                    ISO 27001 is the premier international standard for information security management
                    systems. It specifies the requirements for establishing, implementing, maintaining,
                    and continually improving an information security management system.
                  </p>
                  <p className="text-white/25 text-[14px] leading-relaxed">
                    For insurance carriers entrusting OCP with sensitive claims data, ISO 27001
                    certification provides independent verification that we have systematic
                    controls in place to manage information security risks, protect data
                    confidentiality, and ensure operational resilience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Controls */}
          <SectionHeading
            label="Security Controls"
            title="How We Protect Your Data"
            description="ISO 27001 mandates comprehensive security controls across every layer of our operations."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {iso27001Controls.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="group glass-card rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/[0.06] border border-accent/[0.06] flex items-center justify-center mb-5 group-hover:bg-accent/[0.1] group-hover:border-accent/[0.12] transition-all duration-500">
                  <c.icon className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[14px] mb-2">{c.title}</h3>
                <p className="text-white/25 text-[13px] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image placeholder - Data center / security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 relative rounded-2xl overflow-hidden group"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-navy-500/20 via-dark-400 to-accent/[0.03] relative flex items-center justify-center">
              <img
                src={iso27001}
                alt="ISO 27001 Data Security Certification"
                className="h-52 w-auto object-contain transition-transform duration-700 group-hover:scale-105 z-10"
              />

            <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-0" />

              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <p className="text-white text-sm font-medium">
                  Enterprise-grade security infrastructure — ISO 27001 certified
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Compliance */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="Additional Compliance"
            title="Beyond Certification"
            description="Our commitment to security and compliance extends beyond ISO certifications."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Shield,
                title: 'SOC 2 Aligned',
                desc: 'Our controls are aligned with SOC 2 Type II requirements, ensuring service organization trust principles are met.',
              },
              {
                icon: Globe,
                title: 'GDPR Compliant',
                desc: 'Full compliance with European data protection regulations, with documented data processing agreements and privacy impact assessments.',
              },
              {
                icon: Lock,
                title: 'HIPAA Aware',
                desc: 'Protocols designed with HIPAA compliance considerations for health-related claims, including PHI handling procedures.',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="group glass-card rounded-xl p-7 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/15 transition-all duration-700" />
                <div className="w-10 h-10 rounded-lg bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center mb-5 group-hover:bg-primary/[0.1] group-hover:border-primary/[0.12] transition-all duration-500">
                  <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[14px] mb-2.5">{item.title}</h3>
                <p className="text-white/25 text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.015]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.025] rounded-full blur-[100px]" />
        </div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-white mb-5 tracking-[-0.03em]">
              Trust Through Transparency
            </h2>
            <p className="text-white/25 text-[15px] max-w-lg mx-auto mb-12 leading-relaxed">
              Our certifications are just the beginning. Let's discuss how our security and quality frameworks protect your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Request Compliance Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link to="/about" className="btn-secondary">
                About OCP
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
