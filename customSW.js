importScripts("/advesa/precache-manifest.4239127c02a4058452a5f2e9118ea8af.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* 
    Custom SW using Workbox 
*/
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const urlsCache = [
  './favicon.ico'
];

const imgsCache = [
  './loading.svg',
  './user.png'
];

//Pre-cache the static assets
workbox.precaching.precacheAndRoute([
  ...self.__precacheManifest,
  ...urlsCache,
  ...imgsCache
] || []);
workbox.precaching.cleanupOutdatedCaches();

//Caching 3rd party
workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js)'),
  new workbox.strategies.CacheFirst()
)

//Caching API
workbox.routing.registerRoute(
  /.*(?:jsonplaceholder.typicode)\.com.*$/,
  new workbox.strategies.CacheFirst({
      cacheName: 'api-advesa',
      plugins: [
          new workbox.expiration.Plugin({
              //Only cache request for 2 hours.
              maxAgeSeconds: 2 * 60 * 60,
              //Only cache 50 requests.
              maxEntries: 50
          })
      ]
  })
)
