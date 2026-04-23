import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProjectShowcaseCarousel({ images, className, projectName }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const count = images?.length ?? 0;
  const safeIndex = count ? ((index % count) + count) % count : 0;

  const go = (dir) => {
    if (!count) return;
    setIndex((i) => (i + dir + count) % count);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null || !count) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const delta = end - start;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) go(1);
    else go(-1);
  };

  if (!count) return null;

  const current = images[safeIndex];

  return (
    <div
      className={cn(
        'relative rounded-2xl border border-gray-200 bg-gray-900/5 overflow-hidden shadow-inner',
        className
      )}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label={projectName ? `${projectName} photo gallery` : 'Project photo gallery'}
    >
      <div className="relative aspect-[16/10] sm:aspect-[21/9] bg-gray-900">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src + safeIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <img
              src={current.src}
              alt={current.alt || 'Project photograph'}
              className="w-full h-full object-cover"
              loading={safeIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg ring-1 ring-black/5 transition hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg ring-1 ring-black/5 transition hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                i === safeIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === safeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
