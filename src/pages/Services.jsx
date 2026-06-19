import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      <section className="pt-32 lg:pt-36 pb-16 px-6 lg:px-10 max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#6b6560] mb-4">Services</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight mb-5">Sessions</h1>
          <p className="text-[#6b6560] font-light leading-relaxed max-w-md">
            Every session is tailored to you. Reach out and we'll plan something that fits.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-10 max-w-6xl mx-auto pb-28">
        <div className="divide-y divide-[#e8e4df] border-t border-[#e8e4df]">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 0.08}>
              <div className="py-10 lg:py-14 grid lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-4">
                  <h2 className="font-serif text-2xl lg:text-3xl font-medium">{service.name}</h2>
                  <p className="mt-3 text-[#6b6560] font-light leading-relaxed text-sm lg:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-[#6b6560] font-light flex gap-3">
                        <span className="text-[#141414]/30">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-3 lg:flex lg:items-end lg:justify-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm text-[#141414] border-b border-[#141414]/30 pb-0.5 hover:border-[#141414] transition-colors"
                  >
                    Let's connect
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
