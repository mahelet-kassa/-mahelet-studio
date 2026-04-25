import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Camera, AtSign, Mail, MapPin, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClasses = 'w-full px-0 py-3 bg-transparent border-b border-neutral-300 text-neutral-900 text-sm placeholder-neutral-400 outline-none focus:border-neutral-900 transition-colors font-light';

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">Contact</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">Let's Connect</h1>
          <p className="text-neutral-500 max-w-lg font-light leading-relaxed">
            Have something in mind? I'd love to hear from you. Send me a message and I'll get back to you soon.
          </p>
        </FadeIn>
      </section>

      {/* Content */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <FadeIn>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-neutral-500 font-light">Thanks for reaching out — I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                      What are you interested in?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} cursor-pointer`}
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="graduation">Graduation</option>
                      <option value="portrait">Portraits</option>
                      <option value="couples">Couples</option>
                      <option value="other">Just saying hi / Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me a little about what you're looking for..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors rounded-sm"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="lg:sticky lg:top-28 space-y-10">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-5">Reach Me</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-neutral-400" />
                      <a href="mailto:hello@maheletstudio.com" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                        hello@maheletstudio.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-600">Boston, MA</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-5">Social</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/mahelet_studio' },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
