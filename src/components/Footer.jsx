import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      id="contacto"
      className="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-footer__grid">
        <div>
          <h3>Neomodulus</h3>
          <p>Arquitectura modular inteligente con acabados premium y eficiencia energética.</p>
        </div>
        <div>
          <h4>Contacto directo</h4>
          <ul>
            <li>
              <a href="mailto:info@neomodulus.com">
                <FaRegEnvelope aria-hidden /> info@neomodulus.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/34658266368" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden /> +34 658 26 63 68
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Síguenos</h4>
          <div className="site-footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram aria-hidden />
            </a>
            <a href="https://wa.me/34658266368" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <p className="site-footer__copy">© {year} Neomodulus. Todos los derechos reservados.</p>
    </motion.footer>
  );
}

export default Footer;
