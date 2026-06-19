import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import { heroImage, featuredPhotos } from '../data/photos';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-[#141414]">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Mahelet Studio"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end max-w-6xl mx-auto px-6 lg:px-10 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="text-white/50 text-[11px] uppercase tracking-[0.35em] mb-5 font-medium">
              Boston · Photography
            </p>
            <h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-6xl text-white font-medium leading-[1.05] tracking-tight">
              Real moments,<br />
              <span className="italic font-normal text-white/90">beautifully told.</span>
            </h1>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 mt-10 text-white/80 text-sm tracking-wide border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors"
            >
              View selected work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Curated work */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#6b6560] mb-3">Selected Work</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight">A curated glimpse</h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm text-[#6b6560] hover:text-[#141414] transition-colors shrink-0"
            >
              Full gallery →
            </Link>
          </div>
        </FadeIn>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
          {featuredPhotos.map((photo, i) => (
            <FadeIn key={photo.id} delay={i * 0.08} className="mb-3 lg:mb-4 break-inside-avoid">
              <Link to="/gallery" className="group block relative overflow-hidden bg-[#e8e4df]">
                <img
                  src={photo.thumb}
                  alt={photo.title}
                  className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Story + CTA */}
      <section className="border-t border-[#e8e4df]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#6b6560] mb-4">About</p>
            <h2 className="font-serif text-2xl lg:text-3xl font-medium leading-snug mb-6">
              Photography rooted in genuine connection.
            </h2>
            <p className="text-[#6b6560] font-light leading-relaxed max-w-md">
              Graduation, portrait, and couples sessions in Boston — relaxed, natural, and focused on the moments that feel true to you.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-[#141414] border-b border-[#141414]/30 pb-0.5 hover:border-[#141414] transition-colors"
            >
              Read my story
            </Link>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="lg:text-right">
              <p className="font-serif text-xl lg:text-2xl font-medium mb-6 italic text-[#141414]/80">
                Let's create something meaningful together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#141414] text-white text-sm tracking-wide hover:bg-[#2a2a2a] transition-colors"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
