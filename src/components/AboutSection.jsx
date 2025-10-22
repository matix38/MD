import { motion } from 'framer-motion';
import { FaLeaf, FaCubes, FaDraftingCompass } from 'react-icons/fa';

const valueCards = [
  {
    icon: <FaCubes aria-hidden />,
    title: 'Experiencia Modular',
    description:
      'Más de una década creando soluciones prefabricadas que reducen tiempos de ejecución y elevan la calidad final.'
  },
  {
    icon: <FaDraftingCompass aria-hidden />,
    title: 'Diseño Personalizado',
    description:
      'Cada proyecto se adapta a la identidad del cliente combinando funcionalidad, bienestar y estética coherente.'
  },
  {
    icon: <FaLeaf aria-hidden />,
    title: 'Sostenibilidad real',
    description:
      'Materiales responsables, eficiencia energética y procesos limpios para minimizar la huella ambiental.'
  }
];

function AboutSection() {
  return (
    <section id="nosotros" className="about-section">
      <motion.div
        className="about-section__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Sobre nosotros</p>
        <h2>Arquitectura modular para una vida flexible</h2>
        <p>
          En <strong>Neomodulus</strong> combinamos ingeniería, diseño y tecnología para crear espacios que evolucionan con las
          personas. Apostamos por sistemas modulares precisos, confortables y responsables con el planeta.
        </p>
      </motion.div>

      <div className="about-section__values">
        {valueCards.map((card, index) => (
          <motion.article
            key={card.title}
            className="about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about-card__icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
