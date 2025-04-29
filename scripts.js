<script>
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // para que a animação se repita
      }
    });
  }, {
    threshold: 0.1 // ativa quando 10% do elemento estiver visível
  });

  // Observar todos os elementos animáveis
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    observer.observe(el);
  });
});
</script>
