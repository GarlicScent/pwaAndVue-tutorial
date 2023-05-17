const sCacheName = "hello-pwa-v1";
const aFilesToCache = [
	"./",
	"./index.html",
	"./manifest.json",
	"./images/hello-pwa.png",
	"./images/icons/favicon.ico",
	"./images/icons/android-chrome-192x192.png",
];

self.addEventListener("install", (e) => {
	console.log("서비스 워커 설치함!");
	e.waitUntil(
		caches.open(sCacheName).then((pCache) => {
			console.log("파일을 캐시에 저장함!");
			return pCache.addAll(aFilesToCache);
		})
	);
});

self.addEventListener("activate", (e) => {
	console.log("서비스 워커 동작 시작됨!");
});

self.addEventListener("fetch", (e) => {
	e.respondWith(
		caches
			.match(e.request)
			.then((response) => {
				if (!response) {
					console.log("네트워크에서 데이터 요청!", e.request);
					return fetch(e.request);
				}
				console.log("캐시에서 데이터 요청!", e.request);
				return response;
			})
			.catch((error) => console.log(error))
	);
});
