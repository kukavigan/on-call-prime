import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

interface ServiceData {
  label: string;
  title: string;
  heroDesc: string;
  workflow: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceData> = {
  'claims-file': {
    label: 'Claims File Services',
    title: 'Claims File Services',
    heroDesc: 'From initial filing through final settlement, our trained claims specialists handle every aspect of claims file management with enterprise-grade accuracy and efficiency.',
    workflow: ['Claim Intake', 'Document Collection', 'Data Entry & Validation', 'Correspondence', 'Payment Processing', 'File Closure'],
    benefits: [
      '99%+ claims accuracy rate across all file types',
      '60% faster processing times through automation',
      'Seamless integration with carrier claim systems',
      'Dedicated file managers for complex claims',
      'Real-time status tracking and reporting',
      'Scalable capacity for surge events',
    ],
    faq: [
      { q: 'What types of claims do you process?', a: 'We handle the full spectrum including property, casualty, auto, workers\' compensation, and specialty lines. Our team is trained on carrier-specific guidelines and procedures.' },
      { q: 'How do you ensure data accuracy?', a: 'We employ a multi-layered QA process with automated validation checks, peer review, and supervisory audits. Our 99%+ accuracy rate is maintained through continuous monitoring and feedback loops.' },
      { q: 'Can you handle surge volumes?', a: 'Absolutely. Our Kosovo operations center is designed for elastic scaling. We can increase capacity by 300% within 48 hours for catastrophe or surge events.' },
    ],
  },
  'fnol': {
    label: 'FNOL Support',
    title: 'FNOL Support',
    heroDesc: 'Our FNOL specialists capture critical claim information accurately at the first point of contact, enabling faster response times and better policyholder experiences.',
    workflow: ['Call/Report Receipt', 'Policy Verification', 'Incident Documentation', 'Triage & Routing', 'Emergency Coordination', 'Handoff to Adjuster'],
    benefits: [
      '24/7/365 FNOL intake coverage',
      'Average handle time under 8 minutes',
      'Multi-channel intake (phone, email, portal)',
      'AI-assisted triage for priority routing',
      'Bilingual specialists available',
      'Seamless handoff to claims teams',
    ],
    faq: [
      { q: 'What channels do you support for FNOL?', a: 'We support phone, email, web portal, and mobile app intake. All channels feed into a unified queue with consistent data capture standards.' },
      { q: 'How quickly can you scale FNOL operations?', a: 'Our operations are designed for elastic scaling. We can add FNOL specialists within 24-48 hours for anticipated surge events like catastrophes.' },
      { q: 'Do you provide white-label FNOL services?', a: 'Yes. Our FNOL specialists represent your brand, answer calls with your greeting, and follow your specific scripts and procedures.' },
    ],
  },
  'customer-care': {
    label: 'Customer Care',
    title: 'Customer Care',
    heroDesc: 'Professional, empathetic policyholder support that represents your brand. From claim status inquiries to complex issue resolution, we deliver experiences that retain policyholders.',
    workflow: ['Inquiry Receipt', 'Policy/Claim Lookup', 'Issue Assessment', 'Resolution/Action', 'Follow-up', 'Satisfaction Survey'],
    benefits: [
      'White-label support representing your brand',
      'CSAT scores consistently above 90%',
      'First-call resolution rate of 85%+',
      'Omnichannel support (phone, chat, email)',
      'Proactive claim status communications',
      'Retention-focused interaction design',
    ],
    faq: [
      { q: 'How do you maintain brand consistency?', a: 'Our teams undergo extensive brand immersion training, use your scripts and tone guidelines, and are monitored for brand compliance through regular QA audits.' },
      { q: 'What metrics do you track?', a: 'We track CSAT, NPS, first-call resolution, average handle time, escalation rate, and retention impact. All metrics are available in real-time dashboards.' },
      { q: 'Can you handle complex claim inquiries?', a: 'Yes. Our specialists are trained on claims processes and can handle status inquiries, payment questions, supplement requests, and other complex interactions.' },
    ],
  },
  'back-office': {
    label: 'Back Office Operations',
    title: 'Back Office Operations',
    heroDesc: 'The operational backbone that keeps your claims engine running. From data management to compliance documentation, we handle the work that powers your front office.',
    workflow: ['Task Assignment', 'Data Processing', 'Quality Check', 'Compliance Review', 'Documentation', 'Reporting'],
    benefits: [
      '40%+ cost reduction vs. domestic operations',
      '99.5% SLA adherence across all processes',
      'Automated workflow management',
      'Real-time productivity dashboards',
      'Cross-trained teams for flexibility',
      'Continuous process optimization',
    ],
    faq: [
      { q: 'What back-office processes do you handle?', a: 'We manage data entry, compliance documentation, vendor coordination, report generation, payment processing support, and virtually any administrative process in the claims lifecycle.' },
      { q: 'How do you handle sensitive data?', a: 'All data is processed in our secure, SOC 2-aligned facility with role-based access, encryption, and full audit trails. We follow carrier-specific data handling protocols.' },
      { q: 'What are your typical SLAs?', a: 'SLAs are customized per client but typically include 24-hour turnaround for standard tasks, 4-hour for urgent items, and 99.5%+ accuracy requirements.' },
    ],
  },
  'qa-auditing': {
    label: 'QA & Auditing',
    title: 'QA & Auditing',
    heroDesc: 'Multi-layered quality assurance that ensures every claim meets your standards. From real-time monitoring to comprehensive audits, we protect your quality and compliance posture.',
    workflow: ['Sample Selection', 'Criteria Review', 'File Audit', 'Error Documentation', 'Feedback Loop', 'Trend Reporting'],
    benefits: [
      'Multi-layered QA with 4-eyes principle',
      'Real-time error detection and correction',
      'Custom audit frameworks per carrier',
      'Regulatory compliance monitoring',
      'Trend analysis and root cause identification',
      'Actionable improvement recommendations',
    ],
    faq: [
      { q: 'What audit methodologies do you use?', a: 'We employ risk-based sampling, full-file audits, transactional audits, and process audits. Methodology is customized based on carrier requirements and regulatory obligations.' },
      { q: 'How quickly are errors identified?', a: 'Our real-time monitoring catches errors during processing. For post-hoc audits, findings are typically reported within 24-48 hours with root cause analysis.' },
      { q: 'Do you support regulatory audits?', a: 'Yes. We prepare documentation and support for state regulatory audits, market conduct examinations, and internal compliance reviews.' },
    ],
  },
  'adjuster-support': {
    label: 'Adjuster Support',
    title: 'Adjuster Support',
    heroDesc: 'Reduce adjuster workload and accelerate claim resolution. From scheduling to documentation, we provide the support your field and staff adjusters need to focus on what matters.',
    workflow: ['Request Receipt', 'Task Assignment', 'Scheduling', 'Document Prep', 'Field Support', 'Report Drafting'],
    benefits: [
      '30% increase in adjuster productivity',
      'Dedicated support teams per client',
      'Same-day scheduling for inspections',
      'Complete document preparation',
      'Field investigation coordination',
      'Report drafting and review support',
    ],
    faq: [
      { q: 'What types of adjusters do you support?', a: 'We support staff adjusters, independent adjusters, and field inspectors across property, casualty, auto, and specialty lines.' },
      { q: 'How do you coordinate with field adjusters?', a: 'Our support teams use your scheduling and communication tools to coordinate appointments, prepare inspection documents, and provide real-time field support.' },
      { q: 'Can you handle catastrophe deployment support?', a: 'Yes. We rapidly scale adjuster support during catastrophe events, handling scheduling, logistics, and documentation for deployed adjuster teams.' },
    ],
  },
  'survey-reporting': {
    label: 'Survey & Reporting',
    title: 'Survey & Reporting',
    heroDesc: 'From damage assessments to trend analysis, our survey and reporting services provide the actionable insights you need to make informed decisions and optimize operations.',
    workflow: ['Survey Design', 'Field Deployment', 'Data Collection', 'Analysis', 'Report Generation', 'Insight Delivery'],
    benefits: [
      'Comprehensive field survey capabilities',
      'AI-powered analytics and trend detection',
      'Custom dashboard development',
      'Real-time reporting and alerts',
      'Predictive analytics for claim trends',
      'Executive summary and deep-dive reports',
    ],
    faq: [
      { q: 'What types of surveys do you conduct?', a: 'We conduct damage assessments, risk surveys, policyholder satisfaction surveys, vendor performance evaluations, and custom survey programs designed to your specifications.' },
      { q: 'How are reports delivered?', a: 'Reports are delivered through custom dashboards, automated email reports, and API integrations. We support real-time, daily, weekly, and monthly reporting cadences.' },
      { q: 'Can you integrate with our BI tools?', a: 'Yes. We can deliver data through APIs, data exports, and direct integrations with common BI platforms like Tableau, Power BI, and Looker.' },
    ],
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug || ''];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary"><span>Back to Services</span></Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        label={data.label}
        title={data.title}
        description={data.heroDesc}
        cta={{ label: 'Get Started', path: '/contact' }}
      />

      {/* Workflow */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="Workflow"
            title="How It Works"
            description="A streamlined process designed for efficiency and accuracy at every step."
          />

          <div className="relative">
            <div className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-px">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {data.workflow.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-[56px] h-[56px] rounded-xl bg-[#060A14] border border-white/[0.06] flex items-center justify-center mb-4">
                    <span className="text-primary/60 font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-white text-[13px] font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <SectionHeading
            label="Benefits"
            title="Why Choose OCP"
            description="Measurable impact on your claims operations."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            {data.benefits.map((benefit) => (
              <motion.div key={benefit} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-accent/60 flex-shrink-0 mt-0.5" />
                <span className="text-white/35 text-[13px] leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.005] to-transparent" />
        <div className="container-custom mx-auto relative z-10">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {data.faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-static rounded-xl p-6"
              >
                <h3 className="text-white font-semibold text-[15px] mb-3">{item.q}</h3>
                <p className="text-white/30 text-[13px] leading-relaxed">{item.a}</p>
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
              Ready to Transform Your {data.label}?
            </h2>
            <p className="text-white/30 text-lg max-w-xl mx-auto mb-10">
              Let's discuss how OCP can optimize your {data.label.toLowerCase()} operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  Schedule a Demo <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link to="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
