/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [
  ["README.md","baeeda874eb91509775312fd53753e70"],
  ["assets/css/mofo-bootstrap.css","9adbe66758724423a5a238aa2788d42a"],
  ["assets/css/style.css","0b73f80c9b4d779390505ce52a7344b3"],
  ["assets/css/styles.css","270684a106cd1c46e2bf3948e2d24190"],
  ["assets/images/darkfunnel.png","4235ff184971680e0804be93105cc031"],
  ["assets/images/devtools-tips.gif","7e04d95e76eac7011729509f1fce1e13"],
  ["assets/images/discord-logo.svg","1c8a54f25d101bdc607cec7228247a9a"],
  ["assets/images/estudioweb.png","f744af76354c9a231c08c061010f64c3"],
  ["assets/images/mozilla/logo-developer-quantum.png","48752c8f8fb0bccba6702a2b3e96640d"],
  ["assets/images/mozilla/moz-fav-bw-rgb.png","a60ee8472600018891fe7e8f48cb53c9"],
  ["assets/images/mozilla/moz-logo-bw-rgb.svg","1fc54d689e7091bb224430376c9b14c8"],
  ["assets/images/mozpe/hor/MozillaPeru_blanco.png","7dbd85c620326fab59c60118869fae8d"],
  ["assets/images/mozpe/hor/MozillaPeru_color.png","4572fee77c2df3a6f818f6310811fdb5"],
  ["assets/images/mozpe/hor/MozillaPeru_negro.png","49f35ee30bc9f9d89df43b19b11e88ea"],
  ["assets/images/mozpe/ver/MozillaPeru_blanco.png","b598fdbeb214af4db0d7cf1e30320cd8"],
  ["assets/images/mozpe/ver/MozillaPeru_color.png","7a4421d8d3721084192b781361f07751"],
  ["assets/images/mozpe/ver/MozillaPeru_negro.png","0ae3bd48cb5e022691efd0d7d648386f"],
  ["assets/images/nosotros/01.jpeg","8c8bcf7192ef1f073c1d56488590ba5c"],
  ["assets/images/nosotros/02.jpg","a35b35a8d4591351b2d1c2cad6addc93"],
  ["assets/images/nosotros/03.jpg","212822185d73002ddd798945ef8c478d"],
  ["assets/images/nosotros/mozillaperu_wordmark_bgdark_medium.png","535a17470eb009597b7dcabc07f8ba54"],
  ["assets/images/nosotros/mozillaperu_wordmark_bglight_medium.png","0e492292c577a207ae8f48a5244c43d6"],
  ["assets/images/papertoy.jpg","4e4a626edabc8fa7c33f12a2d5fca203"],
  ["blog/2018/09/17/dark-funnel.html","9f8553d4436ed09e4563c963e0b72044"],
  ["blog/2018/09/22/call.html","dd88c8d21648b7cf0c0141494e6992e3"],
  ["blog/2019/01/03/firefoxdevtools-tips.html","9468d7cd4ca26e28a918a863968206a3"],
  ["blog/2019/01/17/encuesta-2018.html","4099f61210b1be6783fe15b7e187aaeb"],
  ["cfs.html","eade1d2c4a62fd88f44a3d5e9b3c4b20"],
  ["devtools-tips.html","840546700c0288f67ce3ca9ee6287156"],
  ["devtools-tips/tip-01.html","200eeed180a922070e1a1b596cba378f"],
  ["devtools-tips/tip-02.html","3d958ed9e6d80d17b7e115363a310108"],
  ["devtools-tips/tip-03.html","906d84a58e2d3067571a7d514ff29964"],
  ["devtools-tips/tip-04.html","558f32f68cf2afeb0646d6fed1a427c0"],
  ["devtools-tips/tip-05.html","415bfe9bdd3c61c56f445848eba3e0df"],
  ["devtools-tips/tip-06.html","71914d5aaa3ad312a14b88e051446394"],
  ["devtools-tips/tip-07.html","44248423e67d1ae1af22188c4c0a8281"],
  ["download/MPEstudioWeb2011.csv","846ec08f03dc3ae544a8d911e69989e8"],
  ["download/MPEstudioWeb2011.pdf","1f8ed77bde3a1f75d97c91c0292a047e"],
  ["download/MPEstudioWeb2012.csv","4c1df48ff05831a7211efdb756999bdf"],
  ["download/MPEstudioWeb2012.pdf","5f13d6188b3f117f825cd9454395a197"],
  ["download/MPEstudioWeb2013.csv","adc06ce0ebdca22b6dc51ca5ecc76f50"],
  ["download/MPEstudioWeb2013.pdf","d8f25edecbe51f8a902e4a60a70563f7"],
  ["download/MPEstudioWeb2014.csv","ad8d0ef8261a5aa6b2637b612893b5fc"],
  ["download/MPEstudioWeb2014.pdf","2d11609d64ba54590986289e6b48ece0"],
  ["download/MPEstudioWeb2015.csv","0ba53bb21219f00182c03dc2873b48f4"],
  ["download/MPEstudioWeb2015.pdf","b34a840586559e0efecf829f1c3904e4"],
  ["download/MPEstudioWeb2016.csv","05dc79d292b69efa4df7a3ca994ffd74"],
  ["download/MPEstudioWeb2016.pdf","0e141eb8d3610aaf2b73578031f7a415"],
  ["download/MPEstudioWeb2017.csv","a539c7421d0803972792e35d245d4e77"],
  ["download/MPEstudioWeb2017.pdf","ea0986c5d341cd9851b3e1d2d88e0e0f"],
  ["download/MPEstudioWeb2018.csv","bdb3f592f56a8707103802fc67085ed4"],
  ["download/MPEstudioWeb2018.pdf","3ec02134ddc5dd8837440ff6a2277a96"],
  ["download/firefox-peruvian.pdf","fc1a878fea3bfc07952d05efdc500d60"],
  ["estudioweb.html","c2a2127ef90089eff385064eab31eeab"],
  ["estudioweb/2011.html","3378c0364009eb4fd0a4c85f06189b28"],
  ["estudioweb/2012.html","6fa5f372f089d6ce1c39e5a0ec3655ed"],
  ["estudioweb/2013.html","0d77a67715c538f1bc406bece27ea124"],
  ["estudioweb/2014.html","851a56785bf2497b81c23d930fe4bb0b"],
  ["estudioweb/2015.html","5be6a693942ec573907560b56095c3d1"],
  ["estudioweb/2016.html","6f1af5bc8ee071a1642f0d7564ee7df7"],
  ["estudioweb/2017.html","5a2c4b24469ccc9bf4b3f5bcc5dc99d1"],
  ["estudioweb/2018.html","6f73cc12f93e86f6ead0028e2d9e5f2c"],
  ["favicon.ico","d4f1f46b91f4eaa341e230b3641c6a56"],
  ["index.html","b09ddc85a4497783ce4d0938de937690"],
  ["involucrate.html","9e147e6751daa6d9a3ea701f37d65255"],
  ["nosotros.html","0664d7294ee56bf3dff54f904ad837fb"],
  ["nosotros/equipo.html","ae27f61814430471566e2090f38be1f8"],
  ["nosotros/identidad-visual.html","6f520a3a390c5efb5a38b20e5baa9aeb"],
  ["papertoy.html","b063da4fc3e7633cc29e71330d7b58fe"],
  ["redirects.json","56d5d647a9e908a2165eb398b07f1939"]
];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







