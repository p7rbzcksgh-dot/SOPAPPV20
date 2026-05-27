const CACHE_KILL_VERSION = 'tcg-sop-wizard-clean-20-spotfix';
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => { /* caching disabled so GitHub Pages shows updates immediately */ });
