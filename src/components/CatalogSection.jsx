import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function CatalogSection({ section, onSelectModel }) {
  if (!section) return null;

  return (
    <motion.section
      id={section.id}
      className="catalog-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <header className="catalog-section__header">
        <div className="catalog-section__eyebrow">{section.badge}</div>
        <h2>{section.title}</h2>
        <p>{section.lead}</p>
      </header>

      <div className="catalog-grid">
        {section.items.map((item, index) => (
          <motion.article
            key={item.id}
            className="catalog-card"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="catalog-card__media">
              <img src={item.image} alt={item.alt ?? item.name} loading="lazy" />
              <button
                className="catalog-card__cta"
                type="button"
                onClick={() => onSelectModel?.({ ...item, category: section.title })}
              >
                Ver detalles <FiArrowUpRight aria-hidden />
              </button>
            </div>
            <div className="catalog-card__meta">
              <h3>{item.name}</h3>
              <p className="catalog-card__size">{item.size}</p>
              <p className="catalog-card__description">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default CatalogSection;
