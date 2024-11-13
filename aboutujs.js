document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu function
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Add event listener to menu icon
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Hide menu when clicking outside
    document.addEventListener('click', (event) => {
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.menu-icon');
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
