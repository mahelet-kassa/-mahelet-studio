import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import { heroImage, featuredPhotos } from '../data/photos';

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Featured photograph"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white font-medium leading-[1.1] max-w-3xl">
              Capturing Moments<br />
              <span className="italic font-normal">That Matter</span>
            </h1>
            <p className="mt-6 text-white/60 text-base lg:text-lg max-w-lg leading-relaxed font-light">
              Graduation, portrait & couples photography based in Boston.
            </p>
            <div className="mt-8">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors rounded-sm"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-10 bg-white/40"
          />
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {featuredPhotos.map((photo, i) => (
            <FadeIn key={photo.id} delay={i * 0.1}>
              <Link to="/gallery" className="group block relative overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={photo.thumb}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors font-medium"
            >
              View Full Gallery
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Simple CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
        <FadeIn>
          <h2 className="font-serif text-2xl lg:text-3xl font-medium mb-4">
            Interested in working together?
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-8 font-light leading-relaxed">
            I'd love to hear from you. Let's chat about what you have in mind.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors rounded-sm"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
