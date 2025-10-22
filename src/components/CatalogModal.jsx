import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const panel = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { opacity: 0, y: 16, transition: { duration: 0.2 } }
};

function CatalogModal({ model, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    if (model) {
      window.addEventListener('keydown', handleKey);
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [model, onClose]);

  return (
    <AnimatePresence>
      {model && (
        <motion.div
          className="catalog-modal__backdrop"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
          onClick={() => onClose?.()}
        >
          <motion.div
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-modal-title"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="catalog-modal__close" onClick={() => onClose?.()} aria-label="Cerrar">
              <FiX aria-hidden />
            </button>

            <header>
              <div className="catalog-modal__badge">{model.size}</div>
              {model.category ? <p className="catalog-modal__category">{model.category}</p> : null}
              <h3 id="catalog-modal-title">{model.name}</h3>
              <p>{model.description}</p>
            </header>

            {model.gallery?.length ? (
              <div className="catalog-modal__gallery" role="list">
                {model.gallery.map((image) => (
                  <figure key={image.src} role="listitem">
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

            {model.features?.length ? (
              <ul className="catalog-modal__features">
                {model.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : null}

            <div className="catalog-modal__footer">
              <a
                className="primary"
                href={`mailto:info@neomodulus.com?subject=${encodeURIComponent(`Información ${model.name}`)}`}
              >
                Solicitar información <FiArrowRight aria-hidden />
              </a>
              <a className="secondary" href="https://wa.me/34658266368" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden /> Hablar ahora
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CatalogModal;
