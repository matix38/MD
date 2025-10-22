/* === Carrusel funcional y fluido === */
(function() {
  const gallery = document.querySelector('.gallery--horizontal');
  if (!gallery) return;

  const viewport = gallery.querySelector('.gallery__viewport');
  const slides = Array.from(viewport.querySelectorAll('.slide'));
  const prevBtn = gallery.querySelector('.gallery-btn.prev');
  const nextBtn = gallery.querySelector('.gallery-btn.next');
  let currentIndex = 0;

  // Función que mueve el carrusel al slide actual
  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    viewport.scrollTo({
      left: slideWidth * currentIndex,
      behavior: 'smooth'
    });
  }

  // Cambiar de slide
  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    updateSlidePosition();
  }

  // Botones de navegación
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // Navegación por teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentIndex + 1);
  });

  // Actualiza el índice cuando se hace scroll manual
  viewport.addEventListener('scroll', () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    currentIndex = Math.round(viewport.scrollLeft / slideWidth);
  });

  // Recalcula la posición al cambiar el tamaño de la ventana
  window.addEventListener('resize', updateSlidePosition);
})();

/* === Cerrar hash con Escape === */
(function () {
  function onKey(e){
    if(e.key === 'Escape' && location.hash){
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }
  document.addEventListener('keydown', onKey);
  window.addEventListener('hashchange', function(e){ e.preventDefault?.(); });
})();

/* === Submenús accesibles (hover y click) === */
(function(){
  const OPEN_DELAY = 80;
  const CLOSE_DELAY = 220;
  const items = document.querySelectorAll('.menu > li[data-has-submenu]');
  const header = document.querySelector('header');
  const desktopMq = window.matchMedia('(min-width: 901px)');
  const hoverMq = window.matchMedia('(hover: hover)');

  if(!items.length) return;

  const isDesktop = () => desktopMq.matches;

  items.forEach(li => {
    const trigger = li.querySelector(':scope > a[aria-haspopup="true"]');
    const panel   = li.querySelector(':scope > .submenu');
    if (!trigger || !panel) return;

    let openTimer = null;
    let closeTimer = null;

    const commitOpen = () => {
      li.classList.add('is-open');
      trigger.setAttribute('aria-expanded','true');
      if(isDesktop()){
        trigger.classList.add('submenu-disabled');
        header && header.classList.add('submenu-open');
      }
    };

    const commitClose = () => {
      li.classList.remove('is-open');
      trigger.setAttribute('aria-expanded','false');
      trigger.classList.remove('submenu-disabled');
      if(header){
        const anyOpen = document.querySelector('.menu > li[data-has-submenu].is-open');
        if(!anyOpen){
          header.classList.remove('submenu-open');
        }
      }
    };

    const open = (immediate = false) => {
      clearTimeout(closeTimer);
      if (li.classList.contains('is-open')) return;
      const delay = (!immediate && isDesktop()) ? OPEN_DELAY : 0;
      openTimer = setTimeout(commitOpen, delay);
    };

    const close = (immediate = false) => {
      clearTimeout(openTimer);
      const delay = (!immediate && isDesktop()) ? CLOSE_DELAY : 0;
      closeTimer = setTimeout(commitClose, delay);
    };

    if(hoverMq.matches){
      li.addEventListener('mouseenter', () => open());
      li.addEventListener('mouseleave', () => close());
      trigger.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      panel.addEventListener('mouseleave', () => close());
    }

    trigger.addEventListener('focus', () => open(true));
    panel.addEventListener('focusin', () => { clearTimeout(closeTimer); });
    panel.addEventListener('focusout', (event) => {
      if (!li.contains(event.relatedTarget)) close(true);
    });

    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      if (li.classList.contains('is-open')) close(true); else open(true);
    });

    li.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        close(true);
        trigger.focus();
      }
    });
  });

  const closeAll = () => {
    items.forEach(li => {
      if(!li.classList.contains('is-open')) return;
      li.classList.remove('is-open');
      const trigger = li.querySelector(':scope > a[aria-haspopup="true"]');
      if(trigger){
        trigger.setAttribute('aria-expanded','false');
        trigger.classList.remove('submenu-disabled');
      }
    });
    if(header) header.classList.remove('submenu-open');
  };

  document.addEventListener('click', (event) => {
    if(event.target.closest('.menu > li[data-has-submenu]')) return;
    closeAll();
  });

  const handleResize = () => {
    closeAll();
  };
  if(typeof desktopMq.addEventListener === 'function'){
    desktopMq.addEventListener('change', handleResize);
  }else if(typeof desktopMq.addListener === 'function'){
    desktopMq.addListener(handleResize);
  }
})();

/* === Menú responsive (móvil) === */
(function(){
  const btn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('primary-menu');
  const backdrop = document.querySelector('.menu-backdrop');
  const root = document.documentElement;
  const body = document.body;
  const mq = window.matchMedia('(max-width: 900px)');

  if(!btn || !menu || !backdrop) return;

  const activateBackdrop = () => {
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add('is-active'));
  };

  const deactivateBackdrop = () => {
    backdrop.classList.remove('is-active');
    setTimeout(() => {
      if(!menu.classList.contains('is-open')){
        backdrop.hidden = true;
      }
    }, 220);
  };

  function open(){
    btn.classList.add('is-open');
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded','true');
    activateBackdrop();
    root.classList.add('menu-open');
    body.classList.add('menu-open');
  }
  function close(){
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded','false');
    deactivateBackdrop();
    root.classList.remove('menu-open');
    body.classList.remove('menu-open');
  }

  btn.addEventListener('click', () => {
    if(menu.classList.contains('is-open')) close(); else open();
  });

  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && menu.classList.contains('is-open')){
      close();
    }
  });

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if(!link) return;
    const parentItem = link.closest('li[data-has-submenu]');
    const controlsSubmenu = link.getAttribute('aria-haspopup') === 'true';
    if(parentItem && controlsSubmenu){
      return;
    }
    if(menu.classList.contains('is-open')){
      close();
    }
  });

  const handleChange = (e) => { if(!e.matches) close(); };
  if(typeof mq.addEventListener === 'function'){
    mq.addEventListener('change', handleChange);
  }else if(typeof mq.addListener === 'function'){
    mq.addListener(handleChange);
  }
})();

/* === Año automático en el footer === */
(function(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* === Menú de idioma con retardo suave (hover) === */
(function(){
  const switcher = document.querySelector('.lang-switcher');
  const trigger  = document.querySelector('.lang-trigger');

  if (!switcher || !trigger) return;

  let closeTimer = null;
  const CLOSE_DELAY = 200;
  const hoverMq = window.matchMedia('(hover: hover)');
  const touchMq = window.matchMedia('(pointer: coarse)');

  const openMenu = () => {
    clearTimeout(closeTimer);
    switcher.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = (useDelay = hoverMq.matches) => {
    clearTimeout(closeTimer);
    const run = () => {
      switcher.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    if(useDelay){
      closeTimer = setTimeout(run, CLOSE_DELAY);
    }else{
      run();
    }
  };

  if(hoverMq.matches){
    switcher.addEventListener('mouseenter', openMenu);
    switcher.addEventListener('mouseleave', () => closeMenu(true));
  }

  switcher.addEventListener('focusin', openMenu);
  switcher.addEventListener('focusout', (event) => {
    if (!switcher.contains(event.relatedTarget)) closeMenu(false);
  });

  const toggleOnClick = (event) => {
    event.preventDefault();
    if (switcher.classList.contains('is-open')) {
      closeMenu(false);
    } else {
      openMenu();
    }
  };

  if(touchMq.matches || !hoverMq.matches){
    trigger.addEventListener('click', toggleOnClick);
    document.addEventListener('click', (event) => {
      if (!switcher.contains(event.target)) {
        closeMenu(false);
      }
    });
  }else{
    trigger.addEventListener('click', (event) => event.preventDefault());
  }

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
      closeMenu(false);
    }
  });
})();

/* === Scroll suave para anclas internas === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
