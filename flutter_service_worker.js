'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e8bebddcc6337b8c96ea34e779fcb5e",
"version.json": "f5e8f1e114e4f3c40c6e659b3767d255",
"index.html": "f74563727a20820293c3fc722c95296c",
"/": "f74563727a20820293c3fc722c95296c",
"main.dart.js": "21dfc391bc40d19995863edc833f93de",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "b28726fafd42d383f2a18faa3ed8d5c6",
"icons/Icon-192.png": "00c93a3fe8c7b3d06c0bc877737eff10",
"icons/Icon-maskable-192.png": "8fc3285bb16a13d42edc520095149129",
"icons/Icon-maskable-512.png": "f1c1a5350b0baecc4d744f6dd8e83ce3",
"icons/Icon-512.png": "00c93a3fe8c7b3d06c0bc877737eff10",
"manifest.json": "0925c7654ddccea28803a3c7f82877fe",
".git/config": "3d0530a28887f0df61cb5e3426966fa6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/51/77b7c24486dd3f7419ce97c4ee675c7e120d65": "88eb2c1799b92f49488808c045fcf96d",
".git/objects/5a/db291e3f30d614e38913a20f21a84db00c5e43": "638d8602364211c440415d292dcf024a",
".git/objects/d7/f5658f7708e6738aa8af51886d18410e34d34f": "86364aca5518759da929e88cbf7968b6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/cbc268f7514b16c5fa6ec0bf2e8beab27c2257": "167b1927aa7cde2f4f97402bef407d04",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/f3/78e38bfb737cec240f3d1e93be14a0dbe3c6ff": "29c46189161ded524babdfadb7b16a7e",
".git/objects/eb/59527da340b1650c9dcedd7076adff2cd1fbbe": "4658e92f83504f18aeffc7e7d5ed6473",
".git/objects/c0/ae4c12042276b353e1fd0ca9e76d6d508c3e75": "817bf8054324257ef5fe3d6a2909114f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4e/83d108e1a77edf062f025833e5981ecd9d5b52": "58f5ca57d14646824bc9cf99959df561",
".git/objects/4b/16fec45b9773edd8fa6791d8caa26866ae497b": "ddea6f2cf1630f9f4ab58a27140ed620",
".git/objects/7c/34032177c778054d600aaecb803bf12d22172e": "8b25827efe5da4d3be32ff7ee460fd69",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/cf19220b615373218d839600713033d32a6099": "078fb66704c6680a787651fc2b5bc11a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/c7d3a3913041637bed6ff9bc7fa51670631779": "5e70e99b513bba4ce41002bb99a347d1",
".git/objects/38/7df206ca056d708d31146730ebd2397cc09f87": "e91670f560b03d3de87981dc8ddbf068",
".git/objects/36/c26549ff61bd666ff349fa52b9897c663c8355": "b1df0e3d95225e227d864a6121828d65",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/37/1650707155e4d346f17908f2c24d9651e4df08": "995ce7a46153e4b34d6bc60dbb9d7212",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/55/47b4faeaeabde39b65f92ae3cbd94b32c344a7": "6727cf9b4c78b5eb2461546d69b233c6",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/967bebb7507ed79b3a72e7f19f0bcd1af26999": "9a376d98ffc04c39f9680e064222870e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/e02a6e4ca4011e0f869d840656bc963f604a9f": "06972c037da28fb9aa1064d67b68ff50",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b9/6eb732bfcad90738c317dce2ac9a34270dcd70": "ce68b6f8540fa66fdc0d79131b99c576",
".git/objects/ea/c7e26ec6abc421730e35e1a4d206426ead4978": "7cee4233a3c4443e27d1bfc4a09f95c9",
".git/objects/e1/06aa8c53ce92959d91d70c2295446558b04ea2": "16e8d852a81331c485bbc31b9c4ad217",
".git/objects/f7/2fdd40987c2db6028c4ed53608c0e06d39023d": "d94ff53dc5d7f018501bfa8cb38fc3de",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e0/f2bf2a24df9776a9800c75f588fa80a9d3d40e": "603dfabaa3306c85acbf6af2ed3e7c07",
".git/objects/79/92b232ff86e47b2b9674fc1435f94a7861bdab": "b536f1c6d1da26d28c5a67e9de9f8b64",
".git/objects/2d/813f3b0cf0fd1d908298396a96b5a65b7f030d": "99a9ae177604b443afd8d1d58a6894ee",
".git/objects/83/c4e4d92826be5ce41df3829876a80d670a3a6a": "a53188f43d574d7d325e2a376ac6b215",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "171d715cad65f852fede71b1990af92b",
".git/logs/refs/heads/main": "6fc2ef8673109816ef644c9951b7e16c",
".git/logs/refs/remotes/origin/main": "7a4a65469d636d31c8acbe0eb0c15267",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d931531d8f52789637fc0c68c09d9d5e",
".git/refs/remotes/origin/main": "d931531d8f52789637fc0c68c09d9d5e",
".git/index": "794f33eb088a736a508feed159de276a",
".git/COMMIT_EDITMSG": "097cf191a376517f0403b415ce7d1e03",
"assets/images/ajlogo.png": "00c93a3fe8c7b3d06c0bc877737eff10",
"assets/AssetManifest.json": "d8cd0aebf9fdafd8fb4664b554c42419",
"assets/NOTICES": "26e6d4a7f61fb17d6af129b1941837f9",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "c3c1f0fa0d0be16d346f3d780f60bf29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a5747f16340555b37963d4620c943eb8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7b94bf0f6eae58c9a9ca5edde572fd0",
"assets/fonts/MaterialIcons-Regular.otf": "4b46a348bc662c0c797bbb89055c3bdf",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
