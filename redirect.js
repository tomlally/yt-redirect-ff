chrome.webRequest.onBeforeRequest.addListener(
    function(_) {
        return {
            redirectUrl: "https://youtube.com/feed/subscriptions"
        }
    },
    {
        urls: [
            "*://youtube.com/",
            "*://*.youtube.com/"
        ],
    },
    [ "blocking" ]
);