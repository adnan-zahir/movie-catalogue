/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
self.addEventListener('install', (event) => {
  console.log('Insatlling Service Worker ...');

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/Get fetch request to/from caches
});
