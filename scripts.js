document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    //Configura o observer para monitorar os elementos
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                   // Para evitar reaplicação da animação
                }
            });
        },
        { threshold: 0.1 } // Detecta quando pelo menos 10% do elemento está visível
    );

    elements.forEach((el) => observer.observe(el));
});
