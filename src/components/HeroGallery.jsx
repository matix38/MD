import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const SLIDE_DURATION = 7_000;

function HeroGallery({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const orderedSlides = useMemo(() => slides ?? [], [slides]);
  const activeSlide = orderedSlides[activeIndex] ?? orderedSlides[0];

  useEffect(() => {
    if (shouldReduceMotion || orderedSlides.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % orderedSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [orderedSlides.length, shouldReduceMotion]);

  const handleNext = () => {
    if (orderedSlides.length <= 1) return;
    setActiveIndex((prev) => (prev + 1) % orderedSlides.length);
  };

  const handlePrev = () => {
    if (orderedSlides.length <= 1) return;
    setActiveIndex((prev) => (prev - 1 + orderedSlides.length) % orderedSlides.length);
  };

  if (!activeSlide) {
    return null;
  }

  return (
    <section id="hero" className="hero-gallery" aria-label="Galería destacada">
      <div className="hero-gallery__inner">
        <button className="hero-gallery__control" type="button" onClick={handlePrev} aria-label="Anterior">
          <FiArrowLeft aria-hidden />
        </button>

        <div className="hero-gallery__viewport">
          <AnimatePresence mode="wait">
            <motion.figure
              key={activeSlide.id}
              className="hero-gallery__slide"
              id={`hero-slide-${activeSlide.id}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={activeSlide.image} alt={activeSlide.alt} loading="lazy" />
              <figcaption>
                <motion.h1
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {activeSlide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {activeSlide.caption}
                </motion.p>
                <div className="hero-gallery__progress" aria-hidden>
                  <motion.span
                    key={activeSlide.id}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : SLIDE_DURATION / 1000,
                      ease: 'linear'
                    }}
                  />
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <button className="hero-gallery__control" type="button" onClick={handleNext} aria-label="Siguiente">
          <FiArrowRight aria-hidden />
        </button>
      </div>

      <div className="hero-gallery__dots" role="tablist" aria-label="Seleccionar imagen destacada">
        {orderedSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={index === activeIndex ? 'is-active' : ''}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`hero-slide-${slide.id}`}
          >
            <span className="sr-only">{slide.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default HeroGallery;
