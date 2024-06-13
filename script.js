document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const destinationsLink = document.querySelector('a[href="#destinations"]');
    const destinationsHeading = document.getElementById('destinations-heading');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    destinationsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationsSection = document.getElementById('destinations');
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            destinationsHeading.classList.add('visible');
        }, 300); // Adjust timeout as needed to synchronize with scrolling
    
    });
    
});
