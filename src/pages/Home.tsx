import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowRight,
  Shield,
  FileText,
  Phone,
  ClipboardCheck,
  Users,
  BarChart3,
  Search,
  Building2,
  CloudLightning,
  Umbrella,
  Briefcase,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  Activity,
  TrendingUp,
} from 'lucide-react';
import AnimatedGrid from '../components/AnimatedGrid';
import SectionHeading from '../components/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import mrikaHelp from "../assets/mrika-help.jpg";
import pcQuality from "../assets/pc-quality.jpg";
import ocpMeeting from "../assets/ocp-meeting.jpg";
import markPc from "../assets/mark-pc.jpg";
import ocpTeam from "../assets/ocp-team.jpg";

function MetricCard({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);
  const { count, start } = useCountUp(value, 2200);

  useEffect(() => {
    if (isVisible) start();
  }, [isVisible, start]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      <div className="text-center py-8">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-[-0.03em]">
          {count}
          <span className="text-primary">{suffix}</span>
        </div>
        <p className="text-white/25 text-[13px] font-medium">{label}</p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary/30 group-hover:w-12 transition-all duration-700" />
    </motion.div>
  );
}

const services = [
  { icon: FileText, title: 'Claims File Services', desc: 'End-to-end claims processing with precision and speed', path: '/services/claims-file' },
  { icon: Phone, title: 'FNOL Support', desc: '24/7 first notice of loss intake and triage', path: '/services/fnol' },
  { icon: Users, title: 'Customer Care', desc: 'White-label policyholder support and retention', path: '/services/customer-care' },
  { icon: ClipboardCheck, title: 'Back Office Operations', desc: 'Streamlined administrative and data operations', path: '/services/back-office' },
  { icon: Shield, title: 'QA & Auditing', desc: 'Rigorous quality assurance and compliance auditing', path: '/services/qa-auditing' },
  { icon: BarChart3, title: 'Adjuster Support', desc: 'Dedicated adjuster assistance and workload management', path: '/services/adjuster-support' },
  { icon: Search, title: 'Survey & Reporting', desc: 'Comprehensive field surveys and analytics reporting', path: '/services/survey-reporting' },
];

const industries = [
  { icon: Building2, title: 'Property Insurance', desc: 'Residential and commercial property claims' },
  { icon: CloudLightning, title: 'Catastrophe Claims', desc: 'Surge management for catastrophic events' },
  { icon: Umbrella, title: 'Insurance Carriers', desc: 'Carrier-grade operational support' },
  { icon: Briefcase, title: 'TPAs', desc: 'Third-party administrator solutions' },
];

const workflowSteps = [
  { label: 'Intake', icon: FileText, desc: 'Claim received & logged' },
  { label: 'Triage', icon: Zap, desc: 'Priority assessment' },
  { label: 'Process', icon: ClipboardCheck, desc: 'Documentation & validation' },
  { label: 'Review', icon: Shield, desc: 'Quality assurance check' },
  { label: 'Resolve', icon: CheckCircle2, desc: 'Settlement & closure' },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const workflowInView = useInView(workflowRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.8, stagger: 0.2, ease: 'power4.out', delay: 1 }
      );
      gsap.fromTo(
        '.hero-badge',
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedGrid />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8"
              >
                <Activity className="w-3.5 h-3.5 text-accent" />
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40">
                  Insurance Operations Redefined
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[3.25rem] sm:text-[4rem] lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-8 tracking-[-0.04em]"
              >
                Enterprise Claims
                <br />
                <span className="gradient-text">Operations.</span>
                <br />
                <span className="text-white/20">Scaled.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="text-white/30 text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
              >
                On Call Prime delivers technology-driven insurance operations and claims support
                that scales with your business. From FNOL to resolution, we power the entire
                claims lifecycle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">
                    Start a Conversation <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Services
                </Link>
              </motion.div>

              <div className="mt-20 space-y-3 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="hero-line h-px bg-gradient-to-r from-primary/25 via-primary/8 to-transparent"
                    style={{ width: `${55 - i * 12}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden xl:block absolute right-[8%] top-[28%] w-[300px]"
        >
          <div className="glass-card-static rounded-xl p-5 float-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-semibold text-white/30 tracking-wider uppercase">Claims Dashboard</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/8" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/25">Processed Today</span>
                <span className="text-[12px] font-semibold text-white">1,247</span>
              </div>
              <div className="h-1 rounded-full bg-white/[0.03] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 2, delay: 1.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent/50"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/25">Accuracy Rate</span>
                <span className="text-[12px] font-semibold text-accent">99.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/25">Avg Resolution</span>
                <span className="text-[12px] font-semibold text-primary">4.2 days</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second floating card */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden xl:block absolute right-[5%] top-[62%] w-[240px]"
        >
          <div className="glass-card-static rounded-xl p-5 float-card-delayed">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              <span className="text-[10px] font-semibold text-white/30 tracking-wider uppercase">Live Metrics</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1 tracking-[-0.03em]">40%<span className="text-accent text-lg">+</span></div>
            <p className="text-[11px] text-white/20">Cost reduction vs. domestic operations</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/8 flex items-start justify-center p-1.5"
          >
            <div className="w-0.5 h-1.5 rounded-full bg-primary/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════ METRICS ═══════ */}
      <section className="relative py-24 border-y border-white/[0.03]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.008] to-transparent" />
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value={99} suffix="%" label="Claims Accuracy Rate" delay={0} />
            <MetricCard value={40} suffix="%" label="Cost Reduction" delay={0.1} />
            <MetricCard value={24} suffix="/7" label="Operations Coverage" delay={0.2} />
            <MetricCard value={500} suffix="K+" label="Claims Processed Annually" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-transparent to-[#060A14]" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Insurance Operations"
            description="End-to-end claims support and operational services designed for modern insurance carriers and TPAs."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  to={service.path}
                  className="group glass-card rounded-xl p-6 block h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primary/[0.02] rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center mb-5 group-hover:bg-primary/[0.1] group-hover:border-primary/[0.12] transition-all duration-500">
                      <service.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h3 className="text-white font-semibold text-[14px] mb-2 group-hover:text-primary transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-white/25 text-[13px] leading-relaxed mb-5">{service.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary/40 text-[12px] font-medium group-hover:text-primary transition-all duration-500">
                      Learn more
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ WORKFLOW ═══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="How It Works"
            title="The OCP Claims Workflow"
            description="A technology-driven process that transforms claims operations from intake to resolution."
          />

          <div ref={workflowRef} className="relative">
            <div className="hidden lg:block absolute top-[36px] left-[10%] right-[10%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={workflowInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent origin-left"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-[64px] h-[64px] rounded-2xl bg-[#060A14] border border-white/[0.05] flex items-center justify-center mb-5">
                    <step.icon className="w-5 h-5 text-primary/50" />
                  </div>
                  <span className="text-[10px] text-primary/40 font-semibold tracking-[0.2em] uppercase mb-1.5">
                    Step {i + 1}
                  </span>
                  <span className="text-white font-semibold text-[13px] mb-1">{step.label}</span>
                  <span className="text-white/20 text-[12px]">{step.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OPERATIONS SHOWCASE ═══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <SectionHeading
            label="Our Operations"
            title="Where Claims Meet Technology"
            description="A look inside the operations center that powers insurance carriers across the United States."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-500/25 via-navy-500/8 to-primary/[0.04] relative">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={mrikaHelp}
                    alt="Claims Operations Center"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#060A14]/95 via-[#060A14]/60 to-transparent">
                <p className="text-white/80 text-sm font-medium">
                  Claims specialists processing files in real-time
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-gradient-to-bl from-navy-500/20 via-navy-500/6 to-accent/[0.03] relative">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={pcQuality}
                      alt="FNOL Support Team"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="aspect-[16/9] bg-gradient-to-r from-primary/[0.04] via-navy-500/8 to-navy-500/20 relative">
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={ocpMeeting}
                      alt="Analytics & Reporting"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY OCP ═══════ */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <SectionHeading
            label="Why OCP"
            title="Built for Enterprise Insurance"
            description="We combine deep insurance expertise with modern technology to deliver operations that scale."
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
                icon: Globe,
                title: 'Global Talent, Local Impact',
                desc: 'Our Kosovo operations center provides highly skilled, multilingual talent at competitive rates, with full U.S. time-zone overlap.',
              },
              {
                icon: Zap,
                title: 'Technology-First Operations',
                desc: 'AI-powered triage, automated workflows, and real-time analytics that accelerate claims processing by 60%.',
              },
              {
                icon: Lock,
                title: 'Enterprise Security & Compliance',
                desc: 'SOC 2 aligned, ISO 27001 processes, HIPAA-aware protocols. Your data is protected at every layer.',
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

      {/* ═══════ INDUSTRIES ═══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="Industries"
            title="Serving the Insurance Ecosystem"
            description="From property carriers to catastrophe response teams, we support the full spectrum of insurance operations."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {industries.map((ind) => (
              <motion.div key={ind.title} variants={fadeUp}>
                <div className="glass-card rounded-xl p-7 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-primary/[0.05] border border-primary/[0.05] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.08] group-hover:border-primary/[0.1] transition-all duration-500">
                    <ind.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="text-white font-semibold text-[14px] mb-1.5">{ind.title}</h3>
                  <p className="text-white/25 text-[13px]">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-14"
          >
            <Link to="/industries" className="btn-secondary">
              View All Industries <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TEAM & CULTURE ═══════ */}
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
                <span className="text-primary/50 text-[11px] font-semibold tracking-[0.2em] uppercase">Our Team</span>
              </div>
              <h2 className="text-[2rem] sm:text-[2.5rem] font-bold text-white mb-6 tracking-[-0.03em] leading-[1.15]">
                People Who Power<br />Your Operations
              </h2>
              <p className="text-white/25 text-[14px] leading-relaxed mb-8">
                Behind every claim processed, every call answered, and every quality audit
                completed is a team of dedicated professionals. Our people are the foundation
                of the trust our clients place in OCP.
              </p>
              <Link to="/careers" className="btn-secondary">
                Join Our Team <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-2 gap-4"
            >

              <div className="relative rounded-xl overflow-hidden group">
                <div className="aspect-[3/4] bg-gradient-to-b from-navy-500/20 to-navy-500/8 relative">
                  <img
                    src={markPc}
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
              </div>

              <div className="relative rounded-xl overflow-hidden group mt-8">
                <div className="aspect-[3/4] bg-gradient-to-t from-primary/[0.04] to-navy-500/15 relative">
                  <img
                    src={ocpTeam}
                    alt="Company Culture"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

                  <div className="absolute bottom-5 left-5 z-20">
                    <p className="text-white text-sm font-medium">
                      Company Culture
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.015]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.025] rounded-full blur-[120px]" />
        </div>
        <div className="container-custom mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-primary/40 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
              Ready to Scale?
            </span>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white mb-5 tracking-[-0.03em]">
              Transform Your Claims Operations
            </h2>
            <p className="text-white/25 text-[15px] sm:text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Join leading insurance carriers who trust OCP to power their claims lifecycle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Schedule a Demo <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
