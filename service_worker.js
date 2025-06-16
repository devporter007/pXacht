var currentTab = null;
chrome.storage.sync.set({batchMode: true}, function() {});
chrome.storage.sync.set({tabs: {}}, function() {});

function saveURL(url){
  chrome.storage.sync.get(['batchMode', 'urls'], function(data) {
    if(data.batchMode){
      let urls = [];
      if(data.urls) urls = data.urls;
      urls.push(url);
      chrome.storage.sync.set({urls: urls}, function() {});
    }
  });
  chrome.storage.sync.set({lastUrl: url}, function() {});
}

// MPD
var saveMpd = function(details) {
  var url = details.url;
  if(url.includes('.mpd') || url.includes('nflxvideo.net/range/0-')){
    saveURL(url);
    //Save the url for this tab
    chrome.storage.sync.get(['tabs', 'batchMode'], function(data) {
      let tabs = data.tabs;
      let tabId = details.tabId;
      if(data.batchMode) tabs[tabId] = true;
      else tabs = {[tabId]: true};
      chrome.storage.sync.set({
        tabs: tabs
    }, function() {
        updateBadge();
    });
    });
  }
};
/*if(url.includes('nflxvideo.net/range/0-20951?o=1')){
    
}*/

function updateBadge() {
  chrome.storage.sync.get(['tabs', 'batchMode'], function(data) {
      if (data.tabs[currentTab]) {
          chrome.action.setBadgeText({
              text: 'MPD'
          });
      }
      else {
          chrome.action.setBadgeText({
              text: 'URL'
          });
      }
  });
};


chrome.webRequest.onBeforeRequest.addListener(saveMpd, {urls: ["<all_urls>"]}, []);
// Listen for reloading pages
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo.status == "loading"){
    chrome.storage.sync.get('tabs', function(data) {
      let tabs = data.tabs;
      tabs[tabId] = false;
      chrome.storage.sync.set({
        tabs: tabs
    }, function() {
        updateBadge();
    });
    });
  }
});

// Listen for changing tabs
chrome.tabs.onActivated.addListener(function(activeInfo) {
  currentTab = activeInfo.tabId;
  updateBadge();
});
