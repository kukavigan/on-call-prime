import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = `w-full bg-white/[0.02] border border-white/[0.06] rounded-lg px-4 py-3.5 text-white text-[13px] placeholder-white/15 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/10 transition-all duration-300`;

  return (
    <div>
      <PageHero
        label="Contact"
        title="Let's Build Something Remarkable"
        description="Whether you're exploring outsourcing for the first time or looking to optimize existing operations, we'd love to hear from you."
      />

      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          {/* Office Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-2xl overflow-hidden group mb-16"
          >


            <div className="relative rounded-2xl overflow-hidden group">
              <div className="aspect-[21/7] relative overflow-hidden bg-gradient-to-r from-navy-500/20 via-dark-400 to-primary/[0.04]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.0263229734232!2d21.172292176614047!3d42.65676971630393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549f3214aa42a3%3A0x7e8c34f743080daa!2sOn%20Call%20Prime%20L.L.C!5e1!3m2!1sen!2s!4v1777474443949!5m2!1sen!2s"
                  title="OCP Office — Pristina, Kosovo"
                  className="h-full w-full border-0 grayscale-[20%]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#060A14]/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                <p className="text-white text-sm font-medium">
                OCP Office — Pristina, Kosovo
                </p>
              </div>
            </div>
          </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">Get in Touch</h2>
              <p className="text-white/30 leading-relaxed text-[15px] mb-10">
                Our team is ready to discuss how OCP can transform your insurance operations.
                Reach out and we'll respond within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: Mail, label: 'Email', value: 'info@oncallprime.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (800) 555-OCP' },
                  { icon: MapPin, label: 'Office', value: 'Pristina, Kosovo\nU.S. Time Zone Coverage' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/[0.06] border border-primary/[0.06] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary/60" />
                    </div>
                    <div>
                      <h3 className="text-white/40 text-[11px] font-semibold tracking-wider uppercase mb-1">{item.label}</h3>
                      <p className="text-white/50 text-[13px] whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card-static rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-full blur-[60px]" />
                <h3 className="text-white font-semibold text-[13px] mb-2 relative z-10">Quick Response</h3>
                <p className="text-white/25 text-[12px] leading-relaxed relative z-10">
                  We respond to all inquiries within 24 business hours. For urgent
                  operational needs, call us directly.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card-static rounded-2xl p-16 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-accent/70" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                  <p className="text-white/30 mb-8 text-[15px]">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }); }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card-static rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-48 h-48 bg-primary/[0.02] rounded-full blur-[80px]" />
                  <h2 className="text-xl font-bold text-white mb-8 relative z-10">Send Us a Message</h2>

                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none text-white bg-[#0B1220]`}
                        >
                          <option value="">Select a service</option>
                          <option value="claims-file">Claims File Services</option>
                          <option value="fnol">FNOL Support</option>
                          <option value="customer-care">Customer Care</option>
                          <option value="back-office">Back Office Operations</option>
                          <option value="qa-auditing">QA & Auditing</option>
                          <option value="adjuster-support">Adjuster Support</option>
                          <option value="survey-reporting">Survey & Reporting</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-white/30 text-[11px] font-semibold tracking-wider uppercase mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
