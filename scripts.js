document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .slide-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    // Texto estilo hacker (digitando)
    const hackerText = "Transformando Segurança em Soluções Digitais";
    let i = 0;
    const typing = () => {
        if (i < hackerText.length) {
            document.getElementById("hacker-text").innerHTML += hackerText.charAt(i);
            i++;
            setTimeout(typing, 80);
        }
    };
    typing();
});
