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

  items.forEach(li => {
    const trigger = li.querySelector(':scope > a[aria-haspopup="true"]');
    const panel   = li.querySelector(':scope > .submenu');
    if (!trigger || !panel) return;

    let openTimer = null;
    let closeTimer = null;

    const open = () => {
      clearTimeout(closeTimer);
      if (li.classList.contains('is-open')) return;
      openTimer = setTimeout(() => {
        li.classList.add('is-open');
        trigger.setAttribute('aria-expanded','true');
        trigger.classList.add('submenu-disabled');
        header && header.classList.add('submenu-open');
      }, OPEN_DELAY);
    };

    const close = () => {
      clearTimeout(openTimer);
      closeTimer = setTimeout(() => {
        li.classList.remove('is-open');
        trigger.setAttribute('aria-expanded','false');
        trigger.classList.remove('submenu-disabled');
        const anyOpen = document.querySelector('.menu > li[data-has-submenu].is-open');
        if (!anyOpen && header) header.classList.remove('submenu-open');
      }, CLOSE_DELAY);
    };

    li.addEventListener('mouseenter', open);
    li.addEventListener('mouseleave', close);
    trigger.addEventListener('focus', open);
    panel.addEventListener('focusin', () => { clearTimeout(closeTimer); });
    panel.addEventListener('focusout', (e) => {
      if (!li.contains(e.relatedTarget)) close();
    });

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (li.classList.contains('is-open')) close(); else open();
    });

    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    trigger.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', close);

    li.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        close();
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', (e) => {
    const anyOpen = document.querySelector('.menu > li[data-has-submenu].is-open');
    if (!anyOpen) return;
    if (!anyOpen.contains(e.target)) {
      anyOpen.classList.remove('is-open');
      const trigger = anyOpen.querySelector(':scope > a[aria-haspopup="true"]');
      trigger && trigger.setAttribute('aria-expanded','false');
      trigger && trigger.classList.remove('submenu-disabled');
      const anotherOpen = document.querySelector('.menu > li[data-has-submenu].is-open');
      const header = document.querySelector('header');
      if (!anotherOpen && header) header.classList.remove('submenu-open');
    }
  });
})();

/* === Menú responsive (móvil) === */
(function(){
  const btn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('primary-menu');
  const backdrop = document.querySelector('.menu-backdrop');

  if(!btn || !menu || !backdrop) return;

  function open(){
    btn.classList.add('is-open');
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded','true');
    backdrop.hidden = false;
  }
  function close(){
    btn.classList.remove('is-open');
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded','false');
    backdrop.hidden = true;
  }

  btn.addEventListener('click', () => {
    if(menu.classList.contains('is-open')) close(); else open();
  });
  backdrop.addEventListener('click', close);
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
  const menu     = document.querySelector('.lang-menu');

  if (!switcher || !trigger || !menu) return;

  let closeTimer = null;
  const CLOSE_DELAY = 200;

  function openMenu(){
    clearTimeout(closeTimer);
    trigger.setAttribute('aria-expanded', 'true');
    menu.style.opacity = '1';
    menu.style.pointerEvents = 'auto';
    menu.style.transform = 'translateY(0)';
  }

  function closeMenu(){
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      trigger.setAttribute('aria-expanded', 'false');
      menu.style.opacity = '0';
      menu.style.pointerEvents = 'none';
      menu.style.transform = 'translateY(-8px)';
    }, CLOSE_DELAY);
  }

  switcher.addEventListener('mouseenter', openMenu);
  switcher.addEventListener('mouseleave', closeMenu);
  switcher.addEventListener('focusin', openMenu);
  switcher.addEventListener('focusout', (e) => {
    if (!switcher.contains(e.relatedTarget)) closeMenu();
  });

  trigger.addEventListener('click', (e) => e.preventDefault());
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
