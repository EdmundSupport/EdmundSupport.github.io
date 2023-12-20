'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94a1b5ac407a822223cce725a129983d",
"assets/AssetManifest.bin.json": "07e5a2261d9c13dd034e14a9702ab881",
"assets/AssetManifest.json": "adf3464b22b02b0d863f1feeaa569956",
"assets/assets/0.png": "09d985cb889e9d7af1be6eadecb9b93a",
"assets/assets/1.png": "9f1d768afe4c59f0fba7ceb502d3c3c7",
"assets/assets/10.png": "4a9b042172b20aa356abdf2ceae303b9",
"assets/assets/11.png": "9444c1713628281846f2f8ab5c80c486",
"assets/assets/12.png": "5b148b8fa38846178d9945aa10b7c441",
"assets/assets/13.png": "966761180994257426e59c2017c68623",
"assets/assets/14.png": "c3174b9175a2dafca6fc9a929619bc69",
"assets/assets/15.png": "e701f8d0a92140dff4c3db3c9703a85e",
"assets/assets/16.png": "020bb92fc67415eb6610008683e16ac1",
"assets/assets/17.png": "bb48c7175791f130736b4ca7fc2bd815",
"assets/assets/18.png": "e21cd36dede40a79477c563352ee32a9",
"assets/assets/19.png": "0941778928aec36768b821f3d841d3a3",
"assets/assets/2.png": "33a033139542acd6503236af7becac97",
"assets/assets/20.png": "bb51ee7a1c2643ea771ab17f6bb99356",
"assets/assets/21.png": "7711a5763253802d9bb354c25112f3af",
"assets/assets/22.png": "ff10f153c75a7910abefd913b1e60e9a",
"assets/assets/23.png": "2fb491253047dd0c9178dc72957ea3f6",
"assets/assets/24.png": "4c2e166fb26e2d776d3b4a8b2248b8c5",
"assets/assets/25.png": "451edb86d6adbb128303fdae2b9ffab0",
"assets/assets/26.png": "9febc7892c4852d890e85e10debce72c",
"assets/assets/27.png": "21e24869ab5089eabda1e9d0d76e7eb4",
"assets/assets/28.png": "a3174a1d9271df8276f9e3fdca11048b",
"assets/assets/29.png": "ab6ec0e69221d416049cf1a593bbb626",
"assets/assets/3.png": "de41fef48ea8446670a9c5e6334d4e20",
"assets/assets/30.png": "30c4203f3bd73b75777b5edd6b6fb2c6",
"assets/assets/31.png": "a69088f4a50864b26fabc342e3c5fdd4",
"assets/assets/32.png": "f7d70a389d5b6828631dddf883d3e7f6",
"assets/assets/33.png": "2b10e738a0f8fd2379285aa58a26ab25",
"assets/assets/34.png": "93a1386cf6dd616936ff5c0b507ebea2",
"assets/assets/35.png": "63fa36f0c9e20283c96c1a17a36804a7",
"assets/assets/36.png": "22b8ee441fda5ee6d5d238506be280c3",
"assets/assets/37.png": "085527ec778f59b3299c0f62768aa457",
"assets/assets/38.png": "96add91fb8a20847b80546ab72ebd416",
"assets/assets/39.png": "959b0a282175589b8738eb34f54c8a16",
"assets/assets/4.png": "bb0d323270be1670ddd447effcda6f64",
"assets/assets/40.png": "77d1ba304eafb15a76796c3aac7eb9c9",
"assets/assets/41.png": "e0871f3847c834c1920dcca65e323f25",
"assets/assets/42.png": "667d2c3ca081bda03abac5d4808f0339",
"assets/assets/43.png": "f04802920dd0f5263a3923b9f86c729c",
"assets/assets/44.png": "f324e20ab70fe126dc8a93b52143265f",
"assets/assets/45.png": "93f96130b853386a899e739e8ef87be1",
"assets/assets/46.png": "cd4870d5689431ff7c90396ffd0fa07e",
"assets/assets/47.png": "699f1272ba4674d7bae083120443c026",
"assets/assets/48.png": "f2ff0213e8abbab525b9a70bbd561a13",
"assets/assets/49.png": "f1bac6c01a6315298e115c0982ed9ecc",
"assets/assets/5.png": "67d3ef0673b378abcadbc16ad05e2270",
"assets/assets/50.png": "5ed2ab151955ac13167e7117fb207adc",
"assets/assets/51.png": "6bb46b8f4a9df0662c98a49339b8a848",
"assets/assets/52.png": "f61a39302565f1d9766e819b96db196b",
"assets/assets/53.png": "2354f65316a7314ac225b551a389d1cf",
"assets/assets/6.png": "1d13278a7e64ce40a1f7fd71a094fccb",
"assets/assets/7.png": "b63a6180bcf4da7c97512559c85ebdd4",
"assets/assets/8.png": "17602b5d82a01597abe7d6a1e0fd8527",
"assets/assets/9.png": "55b1b7f49147e11456ce3788d226ac81",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "3cea4f3ba632690b58383f07163d7ca8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a39841ca22906b9a9775307c443eb655",
"/": "a39841ca22906b9a9775307c443eb655",
"main.dart.js": "419284d995d08d8826f2e1806db08c1b",
"manifest.json": "07484b340f306be6bfc0eafbb9d1f3fb",
"version.json": "9b73134380862760db12f7fe8deec743"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
