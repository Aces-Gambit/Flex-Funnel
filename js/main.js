// Form Banner Behavior
document.addEventListener("DOMContentLoaded", function() {
    const mainForm = document.getElementById('mainForm');
    const fixedFormBar = document.getElementById('fixedFormBar');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0 // Trigger when even one pixel is visible
    };

    const toggleFormBarVisibility = (entry) => {
        fixedFormBar.classList.toggle('visible', entry.boundingClientRect.bottom < 0);
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(toggleFormBarVisibility);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(mainForm);
});