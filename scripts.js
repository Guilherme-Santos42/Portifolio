document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    // Configurar o IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 } // Detecta o elemento quando 20% dele está visível
    );

    // Observar cada elemento animado
    elements.forEach((el) => observer.observe(el));
});
