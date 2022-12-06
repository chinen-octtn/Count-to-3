self.addEventListener("fetch", function (e) {
  // ここは空でもOK
  console.log("Service Worker");
});

// Workboxライブラリのインポート
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

// ファイルのキャッシュ
workbox.precaching.precacheAndRoute([
  {
    url: "/index.html",
    revision: "123",
  },
  {
    url: "/assets/css/style.css",
    revision: "123",
  },
  {
    url: "/assets/js/script.js",
    revision: "123",
  },
]);