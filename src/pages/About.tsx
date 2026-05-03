import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Eye,
  Target,
  Globe,
  Lock,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ocpMeet from "../assets/ocp-meet.jpg";
import training from "../assets/training.jpg";
import prAbove from "../assets/pr-above.jpg";
import markDavidson from "../assets/markdavidson.jpg";
import gentMorina from "../assets/gentmorina.jpg";
import blondinBatusha from "../assets/blondinbatusha.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with transparency and hold ourselves to the highest ethical standards in every interaction.' },
  { icon: TrendingUp, title: 'Excellence', desc: 'We pursue operational perfection through continuous improvement, data-driven decisions, and relentless optimization.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We leverage technology and creative problem-solving to transform insurance operations for the modern era.' },
  { icon: Heart, title: 'Empathy', desc: 'We understand that behind every claim is a person. Our operations are designed with the policyholder in mind.' },
];

const leaders = [
  {
    name: "Mark Davidson",
    role: "Chief Executive Officer",
    bio: "Leading OCP’s vision, growth, and strategic partnerships across the insurance operations industry.",
    image: markDavidson,
  },
  {
    name: "Gent Morina",
    role: "Chief Operations Officer",
    bio: "Overseeing operational performance, team delivery, and service quality across OCP’s insurance support workflows.",
    image: gentMorina,
  },
  {
    name: "Blondin Batusha",
    role: "Chief Technology Officer",
    bio: "Driving OCP’s technology direction, digital systems, and secure operational infrastructure.",
    image: blondinBatusha,
  },
];

const compliance = [
  { icon: Lock, title: 'SOC 2 Aligned', desc: 'Security controls aligned with SOC 2 Type II requirements.' },
  { icon: Shield, title: 'ISO 27001 Processes', desc: 'Information security management processes following ISO standards.' },
  { icon: Award, title: 'HIPAA Aware', desc: 'Protocols designed with HIPAA compliance considerations for health-related claims.' },
  { icon: Globe, title: 'GDPR Compliant', desc: 'Full compliance with European data protection regulations.' },
];

export default function About() {
  return (
    <div>
      <PageHero
        label="About OCP"
        title="The Future of Insurance Operations"
        description="Born from decades of insurance expertise and powered by modern technology, On Call Prime is redefining how claims operations work."
        cta={{ label: 'Join Our Team', path: '/careers' }}
      />

      {/* Story */}
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
                <span className="text-primary/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
                From Insurance Insiders<br />to Operations Innovators
              </h2>
              <div className="space-y-5 text-white/30 leading-relaxed text-[15px]">
                <p>
                  On Call Prime was founded by insurance industry veterans who experienced
                  firsthand the operational bottlenecks that plague claims processing. They saw
                  carriers spending millions on inefficient workflows, struggling with surge
                  capacity, and losing policyholders to poor claims experiences.
                </p>
                <p>
                  The solution wasn't another call center — it was a technology-first operations
                  partner that could seamlessly integrate with carrier systems, scale on demand,
                  and deliver enterprise-grade quality at every touchpoint.
                </p>
                <p>
                  Today, OCP processes over 500,000 claims annually for carriers across the
                  United States, powered by our operations center in Pristina, Kosovo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="glass-card-static rounded-2xl p-8 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-primary/[0.07] border border-primary/[0.08] flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary/70" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-[15px]">Our Mission</h3>
                      <p className="text-white/25 text-[12px]">What drives us every day</p>
                    </div>
                  </div>
                  <p className="text-white/35 leading-relaxed text-[14px]">
                    To transform insurance operations through technology and talent, delivering
                    claims experiences that protect policyholders and empower carriers.
                  </p>
                </div>

                <div className="line-glow" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-lg bg-accent/[0.07] border border-accent/[0.08] flex items-center justify-center">
                      <Eye className="w-5 h-5 text-accent/70" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-[15px]">Our Vision</h3>
                      <p className="text-white/25 text-[12px]">Where we're headed</p>
                    </div>
                  </div>
                  <p className="text-white/35 leading-relaxed text-[14px]">
                    To become the global standard for insurance operations — where every claim
                    is processed with speed, accuracy, and empathy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office & Team Images */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:col-span-2 relative rounded-2xl overflow-hidden group"
            >



              <div className="aspect-[16/9] bg-gradient-to-br from-navy-500/25 via-navy-500/8 to-primary/[0.04] relative">
                <img
                  src={ocpMeet}
                  alt="OCP Operations Center — Pristina, Kosovo"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

                <div className="absolute bottom-5 left-5 z-20">
                  <p className="text-white text-sm font-medium">
                    OCP Operations Center — Pristina, Kosovo
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-2xl overflow-hidden group"
            >

             <div className="aspect-[9/16] md:aspect-auto md:h-full bg-gradient-to-t from-primary/[0.04] via-navy-500/8 to-navy-500/20 relative">
              <img
                src={training}
                alt="Team at Work"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

              <div className="absolute bottom-5 left-5 z-20">
                <p className="text-white text-sm font-medium">
      
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            description="These principles guide every decision, every hire, and every claim we process."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="group glass-card rounded-xl p-7 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.1] group-hover:border-primary/[0.12] transition-all duration-500">
                  <v.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2.5">{v.title}</h3>
                <p className="text-white/30 text-[13px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <SectionHeading
            label="Leadership"
            title="The Team Behind OCP"
            description="Industry veterans and operations experts building the future of insurance support."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {leaders.map((leader) => (
          <motion.div key={leader.name} variants={fadeUp} className="group glass-card rounded-xl p-7 text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 border border-white/[0.08] bg-white/[0.03]">
              <img
                src={leader.image}
                alt={leader.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <h3 className="text-white font-semibold text-[15px] mb-1">{leader.name}</h3>
              <p className="text-primary/60 text-[12px] font-medium mb-3">{leader.role}</p>
              <p className="text-white/25 text-[13px] leading-relaxed">{leader.bio}</p>
          </motion.div>
          ))}
          </motion.div>
        </div>
      </section>

      {/* Kosovo Advantage */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.01]" />
        <div className="container-custom mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
                <span className="text-primary/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Strategic Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
                The Kosovo<br />Operations Edge
              </h2>
              <div className="space-y-5 text-white/30 leading-relaxed text-[15px]">
                <p>
                  Our operations center in Pristina, Kosovo provides a unique strategic
                  advantage for U.S. insurance carriers. Kosovo offers a highly educated,
                  multilingual workforce with strong English proficiency and cultural
                  alignment with Western business practices.
                </p>
                <p>
                  The 6-7 hour time difference with the U.S. East Coast enables extended
                  operations coverage, while significantly lower operational costs translate
                  to 40%+ savings for our clients without compromising quality.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Time Zone Overlap', value: '6-7 hrs EST' },
                  { label: 'English Proficiency', value: '95%+' },
                  { label: 'Cost Savings', value: '40%+' },
                  { label: 'SLA Adherence', value: '99.5%' },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card-static rounded-lg p-4">
                    <div className="text-primary font-bold text-lg mb-0.5">{stat.value}</div>
                    <div className="text-white/25 text-[11px]">{stat.label}</div>
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
              <h3 className="text-white font-semibold text-[15px] mb-7 relative z-10">Why Kosovo?</h3>
              <div className="space-y-4 relative z-10">
                {[
                  'Young, educated workforce with strong technical aptitude',
                  'Multilingual capabilities (English, Albanian, Serbian, and more)',
                  'Favorable business environment with EU alignment',
                  'Competitive cost structure with high-quality output',
                  'Growing tech ecosystem with government support',
                  'Cultural compatibility with Western business norms',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mt-1.5" />
                    <span className="text-white/35 text-[13px] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kosovo Operations Image */}
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
                src={prAbove}
                alt="Pristina Skyline — Kosovo Operations Hub"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/90 via-[#060A14]/35 to-[#060A14]/10 z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <p className="text-white text-sm font-medium">
                  Strategic location in the heart of Southeast Europe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <SectionHeading
            label="Security & Compliance"
            title="Enterprise-Grade Protection"
            description="Your data security is non-negotiable. We maintain the highest standards of compliance and protection."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {compliance.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="group glass-card rounded-xl p-7 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/[0.1] group-hover:border-primary/[0.12] transition-all duration-500">
                  <item.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-500" />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2">{item.title}</h3>
                <p className="text-white/30 text-[13px]">{item.desc}</p>
              </motion.div>
            ))}
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
              Ready to Learn More?
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mb-10">
              Discover how OCP can transform your insurance operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link to="/careers" className="btn-secondary">
                View Open Positions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
