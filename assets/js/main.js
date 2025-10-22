(() => {
  const root = document.documentElement;
  if (root) {
    root.classList.remove('no-js');
    root.classList.add('js');
  }

  const heroSlides = [
    {
      id: 'oceano',
      image: 'assets/gallery/scroll-playa.png',
      alt: 'Casa modular frente al mar con grandes ventanales',
      title: 'Habitamos el paisaje con arquitectura modular',
      caption:
        'Diseñamos viviendas prefabricadas premium con estructuras ligeras y envolventes de alto rendimiento.'
    },
    {
      id: 'valle',
      image: 'assets/gallery/scroll-prado.png',
      alt: 'Módulo habitacional compacto integrado en un valle verde',
      title: 'Flexibles, escalables y listas para crecer contigo',
      caption:
        'Nuestros módulos permiten ampliaciones rápidas, personalización total y montaje en tiempo récord.'
    },
    {
      id: 'metrica',
      image: 'assets/gallery/scroll-bloque.png',
      alt: 'Conjunto de viviendas modulares con paneles solares',
      title: 'Eficiencia energética y diseño contemporáneo',
      caption:
        'Integramos soluciones pasivas, energía fotovoltaica y acabados de alto nivel para potenciar el confort.'
    },
    {
      id: 'montana',
      image: 'assets/gallery/lago-nieve.png',
      alt: 'Casa modular acristalada en un entorno nevado',
      title: 'Espacios saludables para cualquier clima',
      caption: 'Materiales nobles, aislamiento avanzado y control domótico para disfrutar de cada estación.'
    }
  ];

  const catalogSections = [
    {
      id: 'casas',
      title: 'Casas prefabricadas',
      badge: 'Colección Signature',
      lead:
        'Viviendas modulares completas con distribución optimizada, acabados premium y eficiencia energética de alto nivel.',
      items: [
        {
          id: 'x-o1',
          name: 'X-O1',
          size: '18 m²',
          image: 'assets/catalog/x-o1/frente.png',
          alt: 'Modelo X-O1 con fachada acristalada',
          summary: 'Estudio compacto con terraza desplegable y climatización eficiente.',
          description:
            'Ideal como segunda residencia o suite independiente. Estructura de acero ligero, fachada ventilada y aislamiento térmico reforzado.',
          gallery: [
            {
              src: 'assets/catalog/x-o1/frente.png',
              alt: 'Vista frontal de la X-O1',
              caption: 'Fachada principal con ventanales panorámicos.'
            },
            {
              src: 'assets/catalog/x-o1/lado.png',
              alt: 'Vista lateral de la X-O1',
              caption: 'Paneles aislados y lamas de control solar.'
            },
            {
              src: 'assets/catalog/x-o1/atras.png',
              alt: 'Vista posterior de la X-O1',
              caption: 'Terraza técnica y acceso de mantenimiento.'
            }
          ],
          features: [
            'Entrega en 10 semanas con interiorismo incluido',
            'Climatización aerotérmica y ventilación cruzada',
            'Acabados exteriores en madera tecnológica'
          ]
        },
        {
          id: 'x-o2',
          name: 'X-O2',
          size: '26 m²',
          image: 'assets/catalog/x-o2/frente.png',
          alt: 'Modelo X-O2 en entorno natural',
          summary: 'Suite de un dormitorio con baño completo y cocina integrada.',
          description:
            'Distribución pensada para alquiler vacacional o ampliación residencial. Incluye sistema domótico y cubierta preparada para fotovoltaica.',
          gallery: [
            {
              src: 'assets/catalog/x-o2/frente.png',
              alt: 'Vista frontal X-O2',
              caption: 'Volumen principal con porche protegido.'
            },
            {
              src: 'assets/catalog/x-o2/lado.png',
              alt: 'Vista lateral X-O2',
              caption: 'Control solar mediante paneles microperforados.'
            },
            {
              src: 'assets/catalog/x-o2/atras.png',
              alt: 'Vista posterior X-O2',
              caption: 'Acceso técnico y módulo de instalaciones.'
            }
          ],
          features: [
            'Baño premium con iluminación integrada',
            'Opción de mobiliario a medida y almacenamiento oculto',
            'Preinstalación fotovoltaica y recarga para vehículo eléctrico'
          ]
        },
        {
          id: 'x-o3',
          name: 'X-O3',
          size: '36 m²',
          image: 'assets/catalog/x-o3/frente.png',
          alt: 'Modelo X-O3 con doble módulo',
          summary: 'Dos módulos combinados con suite principal y espacio de trabajo.',
          description:
            'Perfecto para teletrabajo o vivienda permanente compacta. Incluye cerramientos de triple vidrio y cubierta verde opcional.',
          gallery: [
            {
              src: 'assets/catalog/x-o3/frente.png',
              alt: 'Vista frontal X-O3',
              caption: 'Entrada principal con marquesina integrada.'
            },
            {
              src: 'assets/catalog/x-o3/lado.png',
              alt: 'Vista lateral X-O3',
              caption: 'Volumen ampliado con estancia multiusos.'
            },
            {
              src: 'assets/catalog/x-o3/atras.png',
              alt: 'Vista posterior X-O3',
              caption: 'Salida a terraza posterior y zona técnica.'
            }
          ],
          features: [
            'Suite principal con vestidor oculto',
            'Espacio de trabajo insonorizado con conectividad total',
            'Sistema de climatización inteligente multizona'
          ]
        },
        {
          id: 'x-o4',
          name: 'X-O4',
          size: '54 m²',
          image: 'assets/catalog/x-o4/frontal.png',
          alt: 'Modelo X-O4 con dos plantas',
          summary: 'Vivienda familiar con dos dormitorios y salón panorámico.',
          description:
            'Combina una planta social abierta con un nivel superior privado. La estructura permite ampliaciones modulares sin obra húmeda.',
          gallery: [
            {
              src: 'assets/catalog/x-o4/frontal.png',
              alt: 'Vista frontal X-O4',
              caption: 'Doble altura acristalada con conexión exterior.'
            },
            {
              src: 'assets/catalog/x-o4/lateral.png',
              alt: 'Vista lateral X-O4',
              caption: 'Voladizo perimetral para protección solar.'
            },
            {
              src: 'assets/catalog/x-o4/atras.png',
              alt: 'Vista posterior X-O4',
              caption: 'Zona de servicios integrada y acceso secundario.'
            }
          ],
          features: [
            'Escalera escultórica y lucernario central',
            'Habitaciones configurables con panelería modular',
            'Sistema acústico premium para máximo confort'
          ]
        },
        {
          id: 'x-o5',
          name: 'X-O5',
          size: '72 m²',
          image: 'assets/catalog/x-o5/frontal.png',
          alt: 'Modelo X-O5 de tres módulos',
          summary: 'Residencia modular de tres dormitorios con terrazas integradas.',
          description:
            'Un hogar completo con cocina profesional, suite principal y gran salón conectado al exterior mediante puertas plegables.',
          gallery: [
            {
              src: 'assets/catalog/x-o5/frontal.png',
              alt: 'Vista frontal X-O5',
              caption: 'Fachada con lamas regulables y terraza techada.'
            },
            {
              src: 'assets/catalog/x-o5/render-1.png',
              alt: 'Interior X-O5',
              caption: 'Zona de día con iluminación natural continua.'
            },
            {
              src: 'assets/catalog/x-o5/render-2.png',
              alt: 'Dormitorio X-O5',
              caption: 'Suite principal con acabados en madera natural.'
            }
          ],
          features: [
            'Aislamiento reforzado para climas extremos',
            'Sistema domótico completo con control remoto',
            'Módulos configurables para usos mixtos'
          ]
        }
      ]
    },
    {
      id: 'apple-home',
      title: 'Apple House',
      badge: 'Colección Boutique',
      lead: 'Unidades compactas premium con interiorismo mediterráneo y tecnología integrada.',
      items: [
        {
          id: 'apple-27',
          name: 'Apple House 27',
          size: '27 m²',
          image: 'assets/catalog/apple-27/ah1.png',
          alt: 'Apple House 27 con fachada blanca',
          summary: 'Suite minimalista con ventanales de suelo a techo.',
          description:
            'Pensada para proyectos hoteleros boutique o extensiones residenciales. Madera natural, iluminación ambiental y domótica completa.',
          gallery: [
            {
              src: 'assets/catalog/apple-27/ah1.png',
              alt: 'Apple House 27 exterior',
              caption: 'Volumen compacto con celosía de madera.'
            },
            {
              src: 'assets/catalog/apple-27/ah3.png',
              alt: 'Apple House 27 interior',
              caption: 'Dormitorio con mobiliario integrado.'
            },
            {
              src: 'assets/catalog/apple-27/ah5.png',
              alt: 'Apple House 27 detalle',
              caption: 'Baño revestido en piedra sin juntas.'
            }
          ],
          features: [
            'Iluminación LED regulable y control por voz',
            'Climatización silenciosa y eficiente',
            'Entrega llave en mano en 8 semanas'
          ]
        },
        {
          id: 'apple-36',
          name: 'Apple House 36',
          size: '36 m²',
          image: 'assets/catalog/apple-36/ah36.1.png',
          alt: 'Apple House 36 con doble módulo',
          summary: 'Suite de dos estancias con cocina completa y porche exterior.',
          description:
            'Pensada para alquiler vacacional premium o vivienda de uso temporal. Incluye sistemas de audio multiroom y mobiliario a medida.',
          gallery: [
            {
              src: 'assets/catalog/apple-36/ah36.1.png',
              alt: 'Apple House 36 exterior',
              caption: 'Fachada bicolor con celosía metálica.'
            },
            {
              src: 'assets/catalog/apple-36/ah36.2.png',
              alt: 'Apple House 36 interior',
              caption: 'Salón diáfano con cocina integrada.'
            },
            {
              src: 'assets/catalog/apple-36/ah36.3.png',
              alt: 'Apple House 36 dormitorio',
              caption: 'Suite con cabecero retroiluminado.'
            }
          ],
          features: [
            'Puertas correderas ocultas para sectorizar espacios',
            'Suelos radiantes y carpintería de aluminio negro',
            'Paneles solares integrados opcionales'
          ]
        }
      ]
    },
    {
      id: 'space-home',
      title: 'Space House',
      badge: 'Edición limitada',
      lead: 'Concepto futurista con geometrías puras y envolvente de alta eficiencia.',
      items: [
        {
          id: 'space-home-36',
          name: 'Space House',
          size: '36 m²',
          image: 'assets/catalog/space-house/space-house.jpg',
          alt: 'Space House con líneas futuristas',
          summary: 'Living modular inspirado en arquitectura espacial, pensado para destinos singulares.',
          description:
            'Estructura de aluminio aeronáutico, iluminación ambiental dinámica y cerramiento fotocromático. Incluye mobiliario tecnológico.',
          gallery: [
            {
              src: 'assets/catalog/space-house/space-house.jpg',
              alt: 'Space House exterior',
              caption: 'Geometría futurista con iluminación ambiental.'
            }
          ],
          features: [
            'Paneles autoportantes de aluminio con aislamiento aerogel',
            'Iluminación RGB dinámica integrada en fachada',
            'Sistema inteligente de control ambiental'
          ]
        }
      ]
    },
    {
      id: 'modulos',
      title: 'Estructuras modulares',
      badge: 'Soluciones a medida',
      lead: 'Sistemas modulares adaptables para oficinas, retail, hospitality o equipamientos temporales.',
      items: [
        {
          id: 'mod-base',
          name: 'Módulo Base Pro',
          size: '15 - 45 m²',
          image: 'assets/catalog/modulos/modulo-1.png',
          alt: 'Módulo polivalente con fachada acristalada',
          summary: 'Configurable como oficina, aula o punto de venta itinerante.',
          description:
            'Estructura modular que crece en altura y longitud. Opciones de fachada en madera, composite o metal microperforado.',
          gallery: [
            {
              src: 'assets/catalog/modulos/modulo-1.png',
              alt: 'Render módulo base',
              caption: 'Módulo acristalado con marquesina lateral.'
            },
            {
              src: 'assets/catalog/modulos/modulo-3.png',
              alt: 'Interior módulo base',
              caption: 'Espacio diáfano convertible en sala de reuniones.'
            },
            {
              src: 'assets/catalog/modulos/thumbnail.png',
              alt: 'Detalle estructura modular',
              caption: 'Paneles estructurales prefabricados listos para montaje.'
            }
          ],
          features: [
            'Montaje en 72 horas con equipos certificados',
            'Cableado plug & play y climatización industrial',
            'Posibilidad de apilamiento hasta tres alturas'
          ]
        }
      ]
    }
  ];

  const faqItems = [
    {
      id: 'fabricacion',
      question: '¿Cuánto tardáis en fabricar un módulo o edificio prefabricado?',
      answer:
        'Los plazos habituales oscilan entre 8 y 16 semanas según complejidad, acabados y logística. Nuestro proceso industrializado garantiza calidad constante en cada fase.'
    },
    {
      id: 'movilidad',
      question: '¿Vuestros productos son móviles o fijos?',
      answer:
        'Disponemos de soluciones transportables y permanentes. Adaptamos la cimentación y las conexiones para que puedas reubicar tus módulos o fijarlos de forma definitiva.'
    },
    {
      id: 'materiales',
      question: '¿Con qué materiales trabajáis?',
      answer:
        'Usamos paneles sándwich de alto aislamiento, estructuras metálicas ligeras y revestimientos sostenibles para garantizar confort térmico y acústico de primer nivel.'
    },
    {
      id: 'permisos',
      question: '¿Necesito permiso de obras?',
      answer:
        'Depende de la normativa municipal y el uso final. Te asesoramos con la documentación técnica necesaria para agilizar licencias y trámites urbanísticos.'
    },
    {
      id: 'logistica',
      question: '¿Gestionáis el transporte hasta la parcela?',
      answer:
        'Sí, contamos con partners logísticos especializados que se encargan del transporte, izado y colocación en la ubicación final.'
    },
    {
      id: 'personalizacion',
      question: '¿Se pueden personalizar los módulos?',
      answer:
        'Partimos de catálogos base pero adaptamos acabados, distribución, tecnología integrada y equipamiento según las necesidades del proyecto.'
    },
    {
      id: 'usos',
      question: '¿Qué usos pueden tener vuestros productos?',
      answer:
        'Realizamos viviendas, oficinas, espacios comerciales, hospitality, equipamientos efímeros y soluciones sanitarias modulares.'
    },
    {
      id: 'mantenimiento',
      question: '¿Qué mantenimiento necesitan?',
      answer:
        'El mantenimiento es mínimo: revisión anual de juntas, limpieza de filtros y chequeos eléctricos. Ofrecemos planes preventivos personalizados.'
    },
    {
      id: 'garantia',
      question: '¿Tienen garantía?',
      answer:
        'Todos nuestros proyectos cuentan con garantía estructural y de acabados, además de soporte técnico durante todo el ciclo de vida.'
    },
    {
      id: 'reubicacion',
      question: '¿Se pueden reubicar los módulos una vez instalados?',
      answer:
        'Sí, diseñamos conexiones rápidas y estructuras atornilladas para que puedas reubicar tus módulos cuando el proyecto lo requiera.'
    }
  ];

  const modelsById = new Map();
  let heroIndex = 0;
  let heroTimer = null;

  const select = (selector, scope = document) => scope.querySelector(selector);
  const selectAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  function renderHero() {
    const slidesContainer = select('[data-hero-slides]');
    const thumbsContainer = select('[data-hero-thumbs]');

    if (!slidesContainer || !thumbsContainer) {
      return;
    }

    heroSlides.forEach((slide, index) => {
      const slideEl = document.createElement('figure');
      slideEl.className = 'hero__slide';
      if (index === 0) {
        slideEl.classList.add('is-active');
      }

      const image = document.createElement('img');
      image.src = slide.image;
      image.alt = slide.alt;
      image.loading = index === 0 ? 'eager' : 'lazy';
      slideEl.appendChild(image);

      const caption = document.createElement('figcaption');
      caption.innerHTML = `<h3>${slide.title}</h3><p>${slide.caption}</p>`;
      slideEl.appendChild(caption);

      slidesContainer.appendChild(slideEl);

      const thumbButton = document.createElement('button');
      thumbButton.type = 'button';
      thumbButton.className = 'hero__thumb';
      if (index === 0) {
        thumbButton.classList.add('is-active');
      }
      thumbButton.setAttribute('aria-label', slide.title);
      thumbButton.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>`;
      thumbButton.addEventListener('click', () => {
        setHeroSlide(index);
        restartHeroTimer();
      });
      thumbsContainer.appendChild(thumbButton);
    });

    startHeroTimer();
    slidesContainer.addEventListener('pointerenter', stopHeroTimer);
    slidesContainer.addEventListener('pointerleave', startHeroTimer);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopHeroTimer();
      } else {
        startHeroTimer();
      }
    });
  }

  function setHeroSlide(index) {
    heroIndex = clamp(index, 0, heroSlides.length - 1);
    const slides = selectAll('.hero__slide');
    const thumbs = selectAll('.hero__thumb');

    slides.forEach((slide, position) => {
      slide.classList.toggle('is-active', position === heroIndex);
    });

    thumbs.forEach((thumb, position) => {
      thumb.classList.toggle('is-active', position === heroIndex);
    });
  }

  function startHeroTimer() {
    if (heroTimer || heroSlides.length <= 1) {
      return;
    }
    heroTimer = window.setInterval(() => {
      const nextIndex = (heroIndex + 1) % heroSlides.length;
      setHeroSlide(nextIndex);
    }, 6000);
  }

  function stopHeroTimer() {
    if (heroTimer) {
      window.clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  function restartHeroTimer() {
    stopHeroTimer();
    startHeroTimer();
  }

  function renderCatalog() {
    const catalogRoot = select('[data-catalog]');
    if (!catalogRoot) return;

    catalogSections.forEach((section) => {
      const sectionEl = document.createElement('section');
      sectionEl.className = 'catalog__section reveal-on-scroll';
      sectionEl.id = section.id;

      const sectionHeader = document.createElement('header');
      sectionHeader.className = 'catalog__header';
      sectionHeader.innerHTML = `
        <div class="catalog__tag">${section.badge}</div>
        <h3>${section.title}</h3>
        <p>${section.lead}</p>
      `;

      const grid = document.createElement('div');
      grid.className = 'catalog__grid';

      section.items.forEach((item, index) => {
        modelsById.set(item.id, item);

        const card = document.createElement('article');
        card.className = 'model-card reveal-on-scroll';
        card.innerHTML = `
          <figure class="model-card__media">
            <img src="${item.image}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
          </figure>
          <div class="model-card__body">
            <div class="model-card__meta">
              <span class="model-card__size">${item.size}</span>
            </div>
            <h4>${item.name}</h4>
            <p>${item.summary}</p>
            <button class="model-card__link" type="button" data-model="${item.id}">
              Ver detalles
            </button>
          </div>
        `;

        grid.appendChild(card);
      });

      sectionEl.appendChild(sectionHeader);
      sectionEl.appendChild(grid);
      catalogRoot.appendChild(sectionEl);
    });
  }

  function renderFaq() {
    const faqRoot = select('[data-faq]');
    if (!faqRoot) return;

    faqItems.forEach((item, index) => {
      const details = document.createElement('details');
      details.className = 'faq__item';
      if (index === 0) {
        details.open = true;
      }

      const summary = document.createElement('summary');
      summary.innerHTML = `<span>${item.question}</span>`;
      details.appendChild(summary);

      const answer = document.createElement('div');
      answer.className = 'faq__answer';
      answer.innerHTML = `<p>${item.answer}</p>`;
      details.appendChild(answer);

      faqRoot.appendChild(details);
    });
  }

  function initScrollEffects() {
    const header = select('[data-header]');
    const floatingContact = select('[data-floating-contact]');
    const mobileNav = select('[data-mobile-nav]');

    function onScroll() {
      const scrollY = window.scrollY;
      header?.classList.toggle('is-condensed', scrollY > 24);
      floatingContact?.classList.toggle('is-visible', scrollY > 280);
      if (scrollY > 0 && mobileNav?.classList.contains('is-active')) {
        toggleMobileNav(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initSmoothScroll() {
    const links = selectAll('[data-scroll]');

    const header = select('[data-header]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId?.startsWith('#')) return;
        const target = select(targetId);
        if (!target) return;

        event.preventDefault();
        const mobileNav = select('[data-mobile-nav]');
        if (mobileNav?.classList.contains('is-active')) {
          toggleMobileNav(false);
        }

        const headerOffset = (header?.offsetHeight ?? 88) + 12;
        const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });
      });
    });
  }

  function toggleMobileNav(forceState) {
    const header = select('[data-header]');
    const mobileNav = select('[data-mobile-nav]');
    const navToggle = select('[data-nav-toggle]');
    const modalOpen = select('[data-modal]')?.getAttribute('aria-hidden') === 'false';

    if (!mobileNav || !navToggle || !header) return;

    const willOpen = typeof forceState === 'boolean' ? forceState : !mobileNav.classList.contains('is-active');

    mobileNav.classList.toggle('is-active', willOpen);
    header.classList.toggle('has-mobile-open', willOpen);
    navToggle.classList.toggle('is-active', willOpen);
    navToggle.setAttribute('aria-expanded', String(willOpen));
    document.body.classList.toggle('no-scroll', willOpen || modalOpen);
  }

  function initMobileNav() {
    const navToggle = select('[data-nav-toggle]');
    const mobileNav = select('[data-mobile-nav]');

    if (!navToggle || !mobileNav) return;

    navToggle.addEventListener('click', () => {
      toggleMobileNav();
    });
  }

  function initModal() {
    const modal = select('[data-modal]');
    const modalContent = select('[data-modal-content]');
    if (!modal || !modalContent) return;

    function closeModal() {
      modal.setAttribute('aria-hidden', 'true');
      modal.hidden = true;
      const mobileNavOpen = select('[data-mobile-nav]')?.classList.contains('is-active');
      if (!mobileNavOpen) {
        document.body.classList.remove('no-scroll');
      }
    }

    function openModal(modelId) {
      const model = modelsById.get(modelId);
      if (!model) return;

      modalContent.innerHTML = `
        <header class="modal-hero">
          <figure>
            <img src="${model.image}" alt="${model.alt}" loading="eager" />
          </figure>
          <div>
            <span class="modal-hero__size">${model.size}</span>
            <h3>${model.name}</h3>
            <p>${model.description}</p>
          </div>
        </header>
        <section class="modal-section">
          <h4>Características clave</h4>
          <ul class="modal-feature-list">
            ${model.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </section>
        <section class="modal-section">
          <h4>Galería</h4>
          <div class="modal-gallery">
            ${model.gallery
              .map(
                (item) => `
                  <figure>
                    <img src="${item.src}" alt="${item.alt}" loading="lazy" />
                    <figcaption>${item.caption}</figcaption>
                  </figure>
                `
              )
              .join('')}
          </div>
        </section>
      `;

      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
      const closeButton = select('[data-modal-close]', modal);
      closeButton?.focus();
    }

    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-model]');
      if (trigger) {
        const modelId = trigger.getAttribute('data-model');
        if (modelId) {
          openModal(modelId);
        }
      }
    });

    selectAll('[data-modal-close]').forEach((button) => {
      button.addEventListener('click', () => {
        closeModal();
      });
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        closeModal();
      }
    });
  }

  function initRevealOnScroll() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    const revealElements = selectAll('.reveal-on-scroll, .model-card, .catalog__section');
    revealElements.forEach((el) => observer.observe(el));
  }

  function setCurrentYear() {
    const yearEl = select('[data-year]');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderCatalog();
    renderFaq();
    initModal();
    initMobileNav();
    initSmoothScroll();
    initScrollEffects();
    initRevealOnScroll();
    setCurrentYear();
  });
})();
