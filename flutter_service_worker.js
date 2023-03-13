'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1d3cf0b1b4e0074f76188729b668056d",
"index.html": "ad16505ec29090d30d886cb3820e4255",
"/": "ad16505ec29090d30d886cb3820e4255",
"main.dart.js": "c099cadf9c33ff69adac6c7771525c4a",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "b863a36ef23c10701149ebf82658d90c",
"icons/Icon-192.png": "f04e6fd6b4317d2a5fb42b9bb2e8e9d9",
"icons/Icon-maskable-192.png": "f04e6fd6b4317d2a5fb42b9bb2e8e9d9",
"icons/Icon-maskable-512.png": "efcc83b12003e4c0439a4928848593a7",
"icons/Icon-512.png": "efcc83b12003e4c0439a4928848593a7",
"manifest.json": "14b08a8e3b23c1633452ffc39badf26f",
".git/config": "e298884eab77f88add2c38a5db96903a",
".git/objects/68/9376061b4c8487019ce3fdf298a8fc45e85c02": "0d98e562e2e462bfe2b14a9695fcce1e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/fa27616b7fbd3883050f03db11c0c0ebcb4032": "66a3d91eeff03d0571814b3636b3a34d",
".git/objects/5a/435554e8134406458f48341836878096fb0074": "afcfa7fd0fc0607ff1d754c1a09eda83",
".git/objects/9d/4162cc67fa0da73d551b8de19f99fd61b1a34e": "afd6eb31727cf461a3f7d7588b30a033",
".git/objects/9c/7fa104ab61531f8b47c477e6948883c49b8404": "1c054404d1b30ee337ffb922f71f2767",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/1ebc0198f7c12500bc023bdb1caea4cf7f8dde": "d2f2b578647a8f04ab8fb9f754efef4f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/fb3391c592dcde13a712eee06a5d5089e86416": "2c7ae925e56626de62612cb26fbb82db",
".git/objects/e3/04dc1e7da683ec6c5c950a737257f642546165": "71e7c57e0979bda107d6598b72a4b09d",
".git/objects/c8/d87800c1b19366f7f8f9010f21ec2b0a9dd81e": "4b007c7ab5736415365c33f3344b0df1",
".git/objects/c8/6caca0d31317c517aa36de3ede9c51b7d37870": "26c24f015f355e402763187be4829af4",
".git/objects/ed/84133445f7b230229730c8fb3f265c875a5f72": "ca4b55bad803c29d55b72771d04c8399",
".git/objects/18/ed04d1d4d0cf78ae03cc8b00c6b7b04d7dcaf1": "69f336363d22af39925f9b1479cff84a",
".git/objects/29/d5d8bf55cf3937ae62792e180d6e8b72c140e4": "146dea9c46a5b3509bddc7c0271eae59",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/ec1fbf786a3d5a59cbf5b373b2bd07d604c7da": "ce92916f73d868453e72de8048c7c395",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/42eb516fadf59399380096bd64fb57969ae11d": "3395208d864d83398377a3133b66d685",
".git/objects/2a/b224d3b7fb41fa02bc93e3f12fdb5a45ff4f99": "984f8fca9f471b1cb924180d93eade40",
".git/objects/2f/26480af319a1fadaa1ba80d7fc004ea7724c43": "131310aea1985c6ba69cc1ab56766aac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/7c300e889c23137ec013b4bf1e4743e92a818b": "a544e5652138c745845344cc79c0acd3",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/39/eb338b8fd235dda318da465191abc6eef1d3af": "fdb68b660bc1df33244042b3ec37eadc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b8/c915c806eced0f2d41356f008ff4fe35319c98": "ffcae4b76f58e4afac45674e9ff50b75",
".git/objects/dc/5bf50e24ed26eadc8865902d756f01133ba3c3": "6a808cdd0c7761001ddedee467d80edb",
".git/objects/b6/0fb19ee67f46560f02dea17be46d41712cb5f1": "29ec0a5cffbbb08d27f47210bfa26160",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f7f3ce9600a1b6cbec7a54557c8dcfb5cd4562": "7928f42fdd1a1b35b9222f01ed331b83",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/90dbb8f6f96beda357eb0b5eac96c8c62c0d17": "13fcb4d1542ff0a7454cbf425f0bf195",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/abebfe0cb93b64f09a156546c4c7fefb21c329": "9775f76cc54c7fa3828ee9dfbf6ce961",
".git/objects/c2/5f141a33b480273ad9120ce572d8f66f96504c": "2b218d9c59acd21915342271471a60d5",
".git/objects/f6/500bf69d4ef825bba2814ccabb9bec6816865b": "eb15c344223424b35da87b983f27110b",
".git/objects/e9/72156691e3dd266d7b6a9486aec6039e4b82cd": "156b0d8cde535c6f53f6667577c03ebb",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1e/e9c817ec87b176c5d5f6b0ebcefd461f60ceca": "f960bf92fe7b76fc3345aa001f42e8a8",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/3dac9b5fe00a4a4048e126fd7bdbad01fb3053": "b9ba2c4112ca39e3385042fbacd5374e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c24b2afac31a99d9b0f02cccea22543",
".git/logs/refs/heads/master": "6c24b2afac31a99d9b0f02cccea22543",
".git/logs/refs/remotes/origin/master": "42b3d56624fdadb7945ff98cac9fd6c8",
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
".git/refs/heads/master": "f88be8ca6f64bba85ebc6cef7c1a3f47",
".git/refs/remotes/origin/master": "f88be8ca6f64bba85ebc6cef7c1a3f47",
".git/index": "40985c839138c414b0eb9e71f5073753",
".git/COMMIT_EDITMSG": "be0a4e20cc3b5ee3d6105aeaa7cc6973",
"assets/AssetManifest.json": "7772b2681432871e6b7bd1076b9df868",
"assets/NOTICES": "44deae6c38680b04fe5b9805829babba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b0d9f7e8cb0241d170a4fd6e8226fee5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/splash.png": "776e179258f51361a794b08b50559060",
"assets/assets/google.png": "0dd54f853a1bffb0e9979f8146268af3",
"assets/assets/leave.png": "8fb452081c9411d26c892625bdacaadc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
