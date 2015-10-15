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

var opt = {
   type: "basic",
   title: "Deploy",
   message: "It worked!",
   iconUrl: "Codesmith-Resized.png"
};
chrome.notifications.create("", opt, function(id) {
   console.error(chrome.runtime.lastError);
});
