const CACHE='ghid-auto-plus-mvp-1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg','./confidentialitate.html','./termeni.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{
    const copy=resp.clone(); if(resp.ok && new URL(e.request.url).origin===location.origin) caches.open(CACHE).then(c=>c.put(e.request,copy)); return resp;
  }).catch(()=>caches.match('./index.html'))));
});
