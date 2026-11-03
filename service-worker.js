/* fitness2026 - service worker */
const CACHE_NAME = 'fitness2026-v1';
const REQUIRED_URLS = [
  './',
  './index.html',
  './data.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(REQUIRED_URLS))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request);
    })
  );
});