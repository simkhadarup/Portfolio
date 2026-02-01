const cursor = document.querySelector('.cursor');
const heroImage = document.querySelector('.hero-image-wrapper');
const heroImg = document.querySelector('.hero-img');

// CURSOR FOLLOW
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// INTERACTIVE EFFECTS
document.querySelectorAll('.magnetic').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const box = item.getBoundingClientRect();
        const x = e.clientX - box.left - box.width / 2;
        const y = e.clientY - box.top - box.height / 2;
        item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        cursor.classList.add('crush');
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = `translate(0, 0)`;
        cursor.classList.remove('crush');
    });
});

// HERO 3D PARALLAX
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    if(heroImage) {
        heroImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        heroImg.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`;
    }
});

// INTERSECTION OBSERVER (REVEAL & SKILL BARS)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            const bars = entry.target.querySelectorAll('.skill-progress');
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-info-item, .skill-category').forEach(el => {
    observer.observe(el);
});