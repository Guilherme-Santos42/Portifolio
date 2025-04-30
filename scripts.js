document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    // Reaplica a animação forçando reflow
                    el.classList.remove("visible");
                    void el.offsetWidth; // Trigger reflow
                    el.classList.add("visible");
                } else {
                    el.classList.remove("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
});
