self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('beer-index-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/mobile.html',
                '/beerData.js',
                '/topBeers.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});