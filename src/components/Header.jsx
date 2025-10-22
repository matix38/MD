import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { catalogSections } from '../data/catalog.js';

const modelLinks = catalogSections.map((section) => ({
  label: section.title,
  href: `#${section.id}`
}));

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Modelos', submenu: modelLinks },
  { label: 'Sobre nosotros', href: '#nosotros' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' }
];

const mobileVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } }
};

function Header({ onNavigate }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavigate = (href) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    onNavigate?.();

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLink = (link) => {
    if (link.submenu) {
      return (
        <li key={link.label} className="nav-item has-submenu">
          <button
            type="button"
            className="nav-link"
            onClick={() => setOpenDropdown((prev) => (prev === link.label ? null : link.label))}
            aria-haspopup="true"
            aria-expanded={openDropdown === link.label}
          >
            <span>{link.label}</span>
            <FiChevronDown aria-hidden />
          </button>
          <AnimatePresence>
            {openDropdown === link.label && (
              <motion.ul
                className="nav-submenu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                {link.submenu.map((item) => (
                  <li key={item.href}>
                    <button type="button" onClick={() => handleNavigate(item.href)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      );
    }

    return (
      <li key={link.href} className="nav-item">
        <button type="button" className="nav-link" onClick={() => handleNavigate(link.href)}>
          {link.label}
        </button>
      </li>
    );
  };

  return (
    <header className={isScrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="site-header__inner">
        <a className="brand" href="#hero" onClick={(event) => {
          event.preventDefault();
          handleNavigate('#hero');
        }}>
          <img src="/assets/logo/logo.png" alt="Neomodulus" />
        </a>

        <nav className="desktop-nav" aria-label="Principal">
          <ul>{navLinks.map((link) => renderLink(link))}</ul>
        </nav>

        <div className="header-actions">
          <a className="whatsapp" href="https://wa.me/34658266368" target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden />
            <span>Whatsapp</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="mobile-menu" variants={mobileVariants} initial="hidden" animate="visible" exit="exit">
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.submenu ? (
                    <details open={openDropdown === link.label}>
                      <summary onClick={(event) => {
                        event.preventDefault();
                        setOpenDropdown((prev) => (prev === link.label ? null : link.label));
                      }}>
                        {link.label}
                        <FiChevronDown aria-hidden />
                      </summary>
                      <div className="mobile-submenu">
                        {link.submenu.map((item) => (
                          <button key={item.href} type="button" onClick={() => handleNavigate(item.href)}>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <button type="button" onClick={() => handleNavigate(link.href)}>
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <div className="mobile-cta">
              <a href="mailto:info@neomodulus.com">
                <FaEnvelope aria-hidden /> info@neomodulus.com
              </a>
              <a href="https://wa.me/34658266368" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden /> +34 658 26 63 68
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
