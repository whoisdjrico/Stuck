function showIndex() {
       var index_url = "http://www.eyebleach.me/kittens/";
       chrome.tabs.create({
       url: index_url
    });
 }

var doc = document.getElementById('#index');

addEventListener("click", showIndex);

// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.tabs.create({
//         url: "http://google.com"
//     });
// });
