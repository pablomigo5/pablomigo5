// Handle Section Navigation
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

// Particle.js Configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#00ffcc" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000" }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1 }
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
    },
    retina_detect: true
});

// Animate Stats Counter
document.addEventListener("DOMContentLoaded", () => {
    let stats = document.querySelectorAll('.stat .count');
    stats.forEach(stat => {
        let count = 0;
        let target = parseInt(stat.innerText);
        let interval = setInterval(() => {
            count += 1;
            stat.innerText = count;
            if (count >= target) clearInterval(interval);
        }, 40);
    });
});
