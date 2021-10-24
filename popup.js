var sss = "";
var currentUrl = "";

// LastURL mpd Query from chrome storage
chrome.storage.sync.get('lastUrl', function(data) {
    let url = "";
    if (data.lastUrl) url = data.lastUrl;
    sss = url;
    
});

// Active URL Query
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    currentUrl = url;
});

//Button for MPD.

const btnv = document.createElement('button');
btnv.className = 'mpdButton';
btnv.innerText = 'MPD';
var divee = document.getElementById("divc1");
divee.appendChild(btnv);
btnv.classList.add('button');
btnv.addEventListener('click',()=>{
var fixedURI = sss.replace("https://","");
window.open(`pxacht://${fixedURI}`,'_self')});


// Button for URL
const btn = document.createElement('button');
btn.innerText = 'URL';
btn.className = 'urlButton';
var divee = document.getElementById("divc1");
divee.appendChild(btn);
btn.classList.add('button');
btn.addEventListener('click',()=>{
var fixedURI = currentUrl.replace("https://","");
if(fixedURI.includes("hotstar")){
fixedURI = fixedURI+"~~FLAG_hotstar=True";
console.log(fixedURI);
}
window.open(`pxacht://${fixedURI}`,'_self')
});



function getStringBetween(str, start, end) {
    const result = str.match(new RegExp(start + "(.*)" + end));
  
    return result[1];
  }


// BUTTON FOR NETFLIX URLS(WIP)
const btnx = document.createElement('button');
btnx.innerText = 'NETFLIX';
btnx.className = 'urlButton';
var divee = document.getElementById("divc1");
divee.appendChild(btnx);
btnx.classList.add('button');
btnx.addEventListener('click',()=>{
var removablePart = getStringBetween(sss, 'a.nflxvideo.net/', '?o=1&')
finalURL = sss.replace(removablePart + "?","");
console.log(finalURL);
var fixedURI = currentUrl.replace("https://","");
//window.open(`pxacht://${fixedURI}`,'_self')
});