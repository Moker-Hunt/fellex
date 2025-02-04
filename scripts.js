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
