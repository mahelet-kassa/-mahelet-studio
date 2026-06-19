import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import FadeIn from '../components/FadeIn';
import Lightbox from '../components/Lightbox';
import { photos, categories } from '../data/photos';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <PageTransition>
      <section className="pt-32 lg:pt-36 pb-8 px-6 lg:px-10 max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight mb-4">Work</h1>
          <p className="text-[#6b6560] font-light leading-relaxed max-w-md">
            A carefully selected collection — each image chosen for its story, light, and emotion.
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#9a938c]">
            Straight out of camera — none of these images are edited or retouched.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-10 max-w-6xl mx-auto mb-10">
        <FadeIn delay={0.1}>
          <nav className="flex gap-8 border-b border-[#e8e4df]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-3 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors relative ${
                  activeCategory === cat
                    ? 'text-[#141414]'
                    : 'text-[#6b6560] hover:text-[#141414]'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="gallery-tab"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#141414]"
                  />
                )}
              </button>
            ))}
          </nav>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-10 max-w-6xl mx-auto pb-28">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
          <AnimatePresence>
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.2) }}
                className="mb-3 lg:mb-4 break-inside-avoid"
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group block relative overflow-hidden w-full cursor-zoom-in bg-[#e8e4df]"
                >
                  <img
                    src={photo.thumb}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onPrev={() => setLightboxIndex((prev) => Math.max(0, prev - 1))}
          onNext={() => setLightboxIndex((prev) => Math.min(filtered.length - 1, prev + 1))}
        />
      )}
    </PageTransition>
  );
}
