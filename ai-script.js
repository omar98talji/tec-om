document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const lazyImg = entry.target;
                        lazyImg.src = lazyImg.dataset.src || lazyImg.src;
                        observer.unobserve(lazyImg);
                    }
                });
            });
            observer.observe(img);
        }
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker مسجل بنجاح:', registration.scope);
        }).catch(err => {
            console.log('فشل تسجيل Service Worker:', err);
        });
    });
}
