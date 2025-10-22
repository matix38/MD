import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

function FAQSection({ items }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id ?? null);

  return (
    <section id="faq" className="faq-section">
      <motion.div
        className="faq-section__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2>Resolvemos tus dudas antes de construir</h2>
        <p>
          Transparencia, asesoramiento experto y acompañamiento integral en cada fase del proyecto modular.
        </p>
      </motion.div>

      <div className="faq-accordion" role="list">
        {items.map((item) => {
          const isOpen = activeId === item.id;
          return (
            <article key={item.id} role="listitem" className={isOpen ? 'is-open' : ''}>
              <button type="button" onClick={() => setActiveId(isOpen ? null : item.id)} aria-expanded={isOpen}>
                <span className="faq-icon" aria-hidden>
                  {item.icon}
                </span>
                <span>{item.question}</span>
                <FiChevronDown aria-hidden />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    key={item.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.8, 0.25, 1] }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;
