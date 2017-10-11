let cacheName = 'react-pwa';
let urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/sockjs-node',
    'http://felix.care.local/garbageAdresses.json',
    '/sockjs-node'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    // Claim any clients immediately, so that the page will be under SW control without reloading.
    console.log('SW active!');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});