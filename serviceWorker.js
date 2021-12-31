// Can access the request and handle instanceof
// So PWAs run only on https

// Script - runs on background in separate thread

const staticPWATut = "pwa-tut-site-v1"

const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.jss",
    "/Pictures/pic1.PNG",
    "/Pictures/pic2.PNG",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPWATut), then(caches => {
            caches.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>{
            return res || fetch(fetchEvent.request)
        })
    )
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }