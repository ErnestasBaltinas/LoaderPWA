const cacheName = 'loader-v1';

const staticAssets = [
  './LoaderPWA/',
  './LoaderPWA/app.js',
  './LoaderPWA/styles.css'
];

self.addEventListener('install', async function () {
  const cache = await caches.open(cacheName);
  cache.addAll(staticAssets);
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    if (url.origin === location.origin) {
      event.respondWith(cacheFirst(request));
    }
  });
  
  async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
  }
  