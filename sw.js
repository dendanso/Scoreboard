const cacheName = 'cacheItems'

//Chaching items...

const cacheAssets = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/gsap.js',
    '/js/index.js',
    '/js/timer.js',
    'fonts/CollegeSlabSC.otf',
    'fonts/Arvo-Regular.ttf',
    'audio/buzzer.wav',
    'audio/female_countdown.wav',
    'audio/male_countdown.wav',
    'images/check-mark-black.png',
    'images/check-mark.png',
    'images/pause.png',
    'images/play.png',
    'images/Polygon -1@2x.png',
    'images/Polygon -2@2x.png',
    'images/Polygon 1@2x.png',
    'images/Polygon 2@2x.png',
    'images/reset.png',
    'images/setting@2x.png',
   


]

//Install service worker...

self.addEventListener('install', e=>{

     e.waitUntil(
        caches.open(cacheName).then(cache=>{
            console.log("files loaded to cache")
            cache.addAll(cacheAssets)
        })

    )
})

//Activate service worker...
self.addEventListener('activate', e=>{
    console.log('service worker activated')
}
)

//Fetch Events
self.addEventListener('fetch', e=>{
    console.log('fetched', e)

    e.respondWith(caches.match(e.request).then(res=>{
        return res || fetch(e.request)
    }))
})