import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Phone,
  Users,
  ClipboardCheck,
  Shield,
  BarChart3,
  Search,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import focusedWork from "../assets/focused-work.jpg";

const services = [
  {
    icon: FileText,
    title: 'Claims File Services',
    desc: 'End-to-end claims processing — from initial filing through final settlement. Our trained claims specialists handle documentation, data entry, correspondence, and follow-up with precision and speed.',
    features: ['Claims intake & documentation', 'Data entry & validation', 'Correspondence management', 'Payment processing support', 'File closure & archival'],
    path: '/services/claims-file',
  },
  {
    icon: Phone,
    title: 'FNOL Support',
    desc: '24/7 first notice of loss intake and triage. Our FNOL specialists capture critical claim information accurately, enabling faster response times and better policyholder experiences.',
    features: ['24/7 FNOL intake', 'Claim triage & routing', 'Policy verification', 'Incident documentation', 'Emergency response coordination'],
    path: '/services/fnol',
  },
  {
    icon: Users,
    title: 'Customer Care',
    desc: 'White-label policyholder support that represents your brand with professionalism and empathy. From claim status inquiries to complex issue resolution.',
    features: ['Claim status inquiries', 'Policyholder communication', 'Escalation management', 'Satisfaction surveys', 'Retention support'],
    path: '/services/customer-care',
  },
  {
    icon: ClipboardCheck,
    title: 'Back Office Operations',
    desc: 'Streamlined administrative and data operations that keep your claims engine running smoothly. From data management to compliance documentation.',
    features: ['Data management & entry', 'Compliance documentation', 'Vendor coordination', 'Report generation', 'Process optimization'],
    path: '/services/back-office',
  },
  {
    icon: Shield,
    title: 'QA & Auditing',
    desc: 'Rigorous quality assurance and compliance auditing that ensures every claim meets your standards. Multi-layered review processes with real-time reporting.',
    features: ['Quality audits', 'Compliance monitoring', 'Error detection & correction', 'Performance benchmarking', 'Regulatory reporting'],
    path: '/services/qa-auditing',
  },
  {
    icon: BarChart3,
    title: 'Adjuster Support',
    desc: 'Dedicated adjuster assistance that reduces workload and accelerates claim resolution. From scheduling to documentation, we support your field and staff adjusters.',
    features: ['Appointment scheduling', 'Document preparation', 'Field investigation support', 'Report drafting', 'Workload management'],
    path: '/services/adjuster-support',
  },
  {
    icon: Search,
    title: 'Survey & Reporting',
    desc: 'Comprehensive field surveys and analytics reporting that provide actionable insights. From damage assessments to trend analysis.',
    features: ['Field surveys', 'Damage assessments', 'Analytics & reporting', 'Trend analysis', 'Custom dashboards'],
    path: '/services/survey-reporting',
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Services() {
  return (
    <div>
      <PageHero
        label="Our Services"
        title="Insurance Operations, Engineered for Scale"
        description="Comprehensive claims support and operational services designed for modern insurance carriers, TPAs, and claims management firms."
        cta={{ label: 'Get Started', path: '/contact' }}
      />

      {/* Services List */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-5"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link to={service.path} className="group block">
                  <div className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                    {/* Hover glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.02] rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                      {/* Icon + Title + Desc */}
                      <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-11 h-11 rounded-lg bg-primary/[0.07] border border-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] group-hover:border-primary/[0.15] transition-all duration-500">
                            <service.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-500" />
                          </div>
                          <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors duration-500">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-white/30 text-[13px] leading-relaxed">{service.desc}</p>
                      </div>

                      {/* Features */}
                      <div className="lg:col-span-5">
                        <h4 className="text-white/20 text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
                          Key Capabilities
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-[13px] text-white/30">
                              <div className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="lg:col-span-2 flex lg:justify-end items-center">
                        <span className="inline-flex items-center gap-2 text-primary/40 font-medium text-[13px] group-hover:text-primary group-hover:gap-3 transition-all duration-500">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operations Image */}

      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-2xl overflow-hidden group"
          >
          <div className="aspect-[21/9] bg-gradient-to-r from-navy-500/20 via-dark-400 to-primary/[0.04] relative">
            <img
              src={focusedWork}
              alt="Insurance Operations Workflow"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              <p className="text-white text-sm font-medium">
                End-to-end claims operations — from intake to resolution
              </p>
            </div>
          </div>
          </motion.div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mb-10">
              Every carrier is different. Let's design an operations solution tailored to your unique needs.
            </p>
            <Link to="/contact" className="btn-primary">
              <span className="flex items-center gap-2">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
