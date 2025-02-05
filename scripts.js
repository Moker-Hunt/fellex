// Cookie consent functionality
function acceptCookies() {
    document.getElementById('cookie-consent').classList.add('hidden');
    localStorage.setItem('cookiesAccepted', 'true');
}

// Check if cookies were previously accepted
window.addEventListener('load', () => {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-consent').classList.remove('hidden');
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
});
