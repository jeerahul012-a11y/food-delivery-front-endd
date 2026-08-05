// Fix broken Zomato logo — replace with working SVG text logo
const logoImg = document.querySelector('.logo img');
if (logoImg) {
    logoImg.onerror = function() {
        // if image fails, replace with text logo
        const logDiv = document.querySelector('.logo');
        logDiv.innerHTML = '<span style="font-size:28px;font-weight:800;color:#E23744;letter-spacing:-1px;">zomato</span>';
    };
    // force trigger in case already failed
    if (!logoImg.complete || logoImg.naturalWidth === 0) {
        logoImg.onerror();
    }
    // also try a working logo URL
    logoImg.src = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png';
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
});
