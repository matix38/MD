import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Accesos directos de contacto">
      <motion.a
        className="floating-contact__button whatsapp"
        href="https://wa.me/34658266368"
        target="_blank"
        rel="noreferrer"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <FaWhatsapp aria-hidden />
        <span>Whatsapp</span>
      </motion.a>
      <motion.a
        className="floating-contact__button email"
        href="mailto:info@neomodulus.com"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <FaEnvelope aria-hidden />
        <span>Email</span>
      </motion.a>
    </div>
  );
}

export default FloatingContact;
