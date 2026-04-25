import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">Services</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">What I Offer</h1>
          <p className="text-neutral-500 max-w-md mx-auto font-light leading-relaxed">
            Here's what a session with me looks like. Reach out and we'll plan something that fits you.
          </p>
        </FadeIn>
      </section>

      {/* Service Cards */}
      <section className="px-6 lg:px-8 max-w-6xl mx-auto pb-24">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative flex flex-col h-full rounded-sm border border-neutral-200 bg-white text-neutral-900 transition-shadow duration-300 hover:shadow-xl hover:shadow-neutral-200/60"
              >
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-medium mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm leading-relaxed font-light text-neutral-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-neutral-100 pt-6 mb-8 flex-1">
                    <ul className="space-y-3.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-neutral-900" />
                          <span className="text-sm font-light text-neutral-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-sm font-medium tracking-wide rounded-sm bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                  >
                    Let's Connect
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 text-center">
        <FadeIn>
          <div className="border-t border-neutral-200 pt-12">
            <h3 className="font-serif text-xl font-medium mb-3">Not sure what you need?</h3>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6">
              That's totally fine — just reach out and we'll figure it out together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Send Me a Message
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
