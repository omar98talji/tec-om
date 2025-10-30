const CACHE_NAME = 'ai-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/ai-style.css',
    '/css/normalize.css',
    '/js/ai-script.js',
    '/ai-personalized.jpg',
    '/hero-ai-education.jpg',
    '/ai-assessment.jpg',
    '/ai-virtual-tutor.jpg',
    '/ar-education.jpg',
    '/ai-future-education.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
