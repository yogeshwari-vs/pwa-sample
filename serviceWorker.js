// Can access the request and handle instanceof
// So PWAs run only on https

// Script - runs on background in separate thread

const staticPWATut = "pwa-tut-examp-v1"

const assets = [
    "/",
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