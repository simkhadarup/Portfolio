const cursor = document.querySelector('.cursor');
const magnetics = document.querySelectorAll('.magnetic');
const heroImage = document.querySelector('.magnetic-hero');
const heroImg = document.querySelector('.hero-img');

// 1. Cursor Follower
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX - cursor.offsetWidth/2}px, ${e.clientY - cursor.offsetHeight/2}px, 0)`;
});

// 2. Click Crush Effect
document.addEventListener('mousedown', () => cursor.classList.add('crush'));
document.addEventListener('mouseup', () => cursor.classList.remove('crush'));

// 3. Magnetic Interaction
magnetics.forEach(m => {
    m.addEventListener('mousemove', function(e) {
        const pos = m.getBoundingClientRect();
        const x = e.clientX - pos.left - pos.width / 2;
        const y = e.clientY - pos.top - pos.height / 2;
        
        m.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    });
    
    m.addEventListener('mouseleave', function() {
        m.style.transform = `translate(0px, 0px)`;
        cursor.style.width = '35px';
        cursor.style.height = '35px';
    });
});

// 4. Hero Image Parallax & Distortion
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 20;
    const y = (window.innerHeight / 2 - e.clientY) / 20;
    
    if(heroImage) {
        heroImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        heroImg.style.transform = `scale(1.2) translate(${-x}px, ${-y}px)`;
    }
});