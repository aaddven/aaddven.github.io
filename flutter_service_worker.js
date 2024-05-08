'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "20b1c9c882f861692b113a0c744ab59b",
"main.dart.js": "5401a8a6db0d5731f6025348658e4624",
"index.html": "f7e3e5dd9de110f355f2bbe3cccd73db",
"/": "f7e3e5dd9de110f355f2bbe3cccd73db",
"Intial%20Commit/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"Intial%20Commit/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Intial%20Commit/.git/config": "5b603c2c0801a9ded3b79159fc38b404",
"Intial%20Commit/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Intial%20Commit/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Intial%20Commit/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Intial%20Commit/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Intial%20Commit/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Intial%20Commit/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Intial%20Commit/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Intial%20Commit/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Intial%20Commit/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Intial%20Commit/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Intial%20Commit/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Intial%20Commit/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Intial%20Commit/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Intial%20Commit/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Intial%20Commit/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "71fad5453cfcc0f6dc34c07cabcd738c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/refs/heads/master": "2b80c3289d442dc50259033fb5a27c5c",
".git/refs/remotes/origin/master": "2b80c3289d442dc50259033fb5a27c5c",
".git/COMMIT_EDITMSG": "0b2ba2852738da7c0a8eaab0281a6b8b",
".git/index": "b6c680a7163dcc5455d12a1c5b63454b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/35/cd111e99b26384dc595c3d2baca91287abe245": "828e7c6cb28dd735221c874903420e72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/84697f97ff79dd65a317467914f18d52170c66": "e724718a426979c5d15e3be9ffe3aceb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/53/6d6e77e29286cd2a07f50df67285cec0e624a3": "e97bf6f8c0ead4d6e287b34dcc4943da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/36/b56d0b85be8304b0ecf3aa3fe7ddc710e41d7b": "a36c406808935df5d91a9aae594951df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fb6192e16f72a9c5ac95b8c0cc3c56a",
".git/logs/refs/heads/master": "6fb6192e16f72a9c5ac95b8c0cc3c56a",
".git/logs/refs/remotes/origin/master": "57617e8ac2ab49691b1c46caaa7e9300",
".git/config": "d224b06a2d63002f6c991a751a7ddbdb",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/NOTICES": "6aa82e11ff4568ac3a7de8a295a6d1ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e8772aae7410ff2a6c41f3f8b1a2d90e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "6e67eb08ed9bfa8054d556f0e06593f6",
"assets/fonts/MaterialIcons-Regular.otf": "ace6ca64f5bfb1e4bc4ff661e8d66466",
"assets/assets/images/database/f_p_tops_2.png": "108810d7b89b52d5b9543467389ea0f6",
"assets/assets/images/database/f_f_jeans_2.png": "7961be065498c364bd739bc523ca038b",
"assets/assets/images/database/m_f_tshirt_2.png": "845c4ed651e123e924411c5fdf9f2de9",
"assets/assets/images/database/m_f_shirt_2.png": "182d12783a62790d20179f023e48989b",
"assets/assets/images/database/m_p_tshirt_3.png": "9cf1ed8e5db9e142b3d0ba06e78f1bd9",
"assets/assets/images/database/f_c_tops_3.png": "2ec792556ea8a77e3db9b93bbcbe4972",
"assets/assets/images/database/m_c_tshirt_1.png": "a96a73b7ce9b8594350e1452800418dc",
"assets/assets/images/database/m_p_tshirt_2.png": "7a2fda72e33b1c3511d4285455457828",
"assets/assets/images/database/f_f_skirt_1.png": "03ed415993ca8fbc5b8a20a5b482926f",
"assets/assets/images/database/m_p_jeans_1.png": "b7b0e7a9ecc6df3f1db32fa52a30d879",
"assets/assets/images/database/m_c_tshirt_3.png": "0020f51b496c680b705bc1b414301dad",
"assets/assets/images/database/f_f_jeans_1.png": "04e6e4990fd910226f2b6d2cca1bedc6",
"assets/assets/images/database/m_c_shirt_3.png": "6d0155401418f4c50079963b65e472fe",
"assets/assets/images/database/f_p_jeans_2.png": "50351d635be2d787b361a5bd41c38a80",
"assets/assets/images/database/f_c_skirt_1.png": "445281aa53202c067b1419b2b70125fc",
"assets/assets/images/database/f_f_tops_2.png": "839ff1ea5f82f7adc2b7792cb54b9a69",
"assets/assets/images/database/m_c_tshirt_2.png": "f2f7310c53c108e8275985b22bc563cf",
"assets/assets/images/database/m_p_jeans_2.png": "24f2e65e9be59fafb7a068f9b910ee1d",
"assets/assets/images/database/f_f_skirt_3.png": "95dd06b56ba0e3470599a007b2319ec4",
"assets/assets/images/database/m_p_tshirt_1.png": "30db46daa6af75d6a9ecba87b7450573",
"assets/assets/images/database/m_f_tshirt_3.png": "a8d717d933563400db7e1e0180dcc0d1",
"assets/assets/images/database/f_f_tops_3.png": "639450ebbeaa7f22acab4c8deda65d10",
"assets/assets/images/database/m_c_jeans_2.png": "d9fd7676110e3cff3e279ce47b55d763",
"assets/assets/images/database/m_f_shirt_3.png": "789835d84c49aca7cde084504af1729c",
"assets/assets/images/database/f_c_skirt_2.png": "47693c739c10af71f8cbe7c174bd0114",
"assets/assets/images/database/m_f_tshirt_1.png": "b8aced7f01512221450614d2bc2f8b1b",
"assets/assets/images/database/m_f_jeans_1.png": "33ae1e83ab15369a30afe2b1af2a5f5a",
"assets/assets/images/database/m_p_jeans_3.png": "e82cc1203fa5b2a7f4ae6652d4063c81",
"assets/assets/images/database/f_c_tops_2.png": "3e611551812641f612e5b0415a9dd496",
"assets/assets/images/database/f_c_jeans_3.png": "70fa4eaf81f5e783bd8d0f66ebaff81f",
"assets/assets/images/database/f_c_skirt_3.png": "531147f03bcea4716c259065101e7520",
"assets/assets/images/database/m_c_jeans_3.png": "386a76872951aac02824faca726539a2",
"assets/assets/images/database/m_p_shirt_3.png": "0eb8b7a78f329b6e43c0f06afd002495",
"assets/assets/images/database/m_f_jeans_2.png": "b93cd0e1306edd371d082a84bb3b276c",
"assets/assets/images/database/m_c_shirt_2.png": "e8697b5495d9d5290041ab1cd19957e8",
"assets/assets/images/database/m_f_shirt_1.png": "ec17b119124f0c9018feac580952168a",
"assets/assets/images/database/f_f_jeans_3.png": "00f90a3ea35f0994aa51e8a21b9897fc",
"assets/assets/images/database/f_c_jeans_1.png": "205b03bbf7cd1139d85ef202a7c5b99c",
"assets/assets/images/database/m_p_shirt_2.png": "dcf2e77a7dbee058f37484f8712a2f04",
"assets/assets/images/database/f_p_jeans_1.png": "5796bdb6dfff90d7959d296b28bcad24",
"assets/assets/images/database/f_p_jeans_3.png": "00ccbb82599b5c82f0fc92416adced66",
"assets/assets/images/database/f_c_jeans_2.png": "c1f8309bb5049dacb5f31a4dda373228",
"assets/assets/images/database/m_c_shirt_1.png": "96c94e2e02102d09634d7b7320fca18f",
"assets/assets/images/database/f_c_tops_1.png": "83e95b89a04125194a41e681f5715c83",
"assets/assets/images/database/f_p_skirt_1.png": "6411aed394e681ac4996b19398d51053",
"assets/assets/images/database/f_f_skirt_2.png": "20e77e1aebba1bd8eb6c7434bb80cce5",
"assets/assets/images/database/f_p_skirt_2.png": "2ecff8f16981d3057c565de5da592489",
"assets/assets/images/database/m_f_jeans_3.png": "76cb80debf8247a135a96126ac61b78a",
"assets/assets/images/database/f_p_skirt_3.png": "eba90b7db174fb69a788918579622314",
"assets/assets/images/database/m_p_shirt_1.png": "b462908bd305acbb978bde76b3589227",
"assets/assets/images/database/m_c_jeans_1.png": "e3fa68283381bc3733001d5f52ad6578",
"assets/assets/images/database/f_f_tops_1.png": "bbb458da0805dfc6de33fcb51edf3510",
"assets/assets/images/database/f_p_tops_1.png": "58293feb46e499cc21a9597f01f59570",
"assets/assets/images/database/f_p_tops_3.png": "cc45248098ebd3bb07ed9c16528fa52d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "916426d4e302b9edb645eab2e7927b02",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
