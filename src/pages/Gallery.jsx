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
    () => activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium mb-3">Portfolio</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-medium mb-4">Gallery</h1>
          <p className="text-neutral-500 max-w-lg font-light leading-relaxed">
            A curated collection of my work — {filtered.length} photos.
          </p>
        </FadeIn>
      </section>

      {/* Category Filters */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const count = cat === 'All' ? photos.length : photos.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-medium rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-transparent text-neutral-500 border-neutral-300 hover:border-neutral-900 hover:text-neutral-900'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* Photo Grid */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group block relative overflow-hidden rounded-sm w-full cursor-zoom-in"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={photo.thumb}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
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
