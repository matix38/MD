document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".menu > li > a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // evita que el enlace recargue la página

      let parentLi = this.parentElement;

      // Cerrar otros submenús
      document.querySelectorAll(".menu li").forEach(li => {
        if (li !== parentLi) {
          li.classList.remove("open");
        }
      });

      // Alternar el submenú actual
      parentLi.classList.toggle("open");
    });
  });
});
