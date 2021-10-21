var sss = "";
var currentUrl = "";
chrome.storage.sync.get('lastUrl', function(data) {
    let url = "";
    if (data.lastUrl) url = data.lastUrl;
    sss = url;
    
});

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    currentUrl = url;
});
const btnv = document.createElement('button');
btnv.className = 'mpdButton';
btnv.innerText = 'MPD';
var divee = document.getElementById("divc1");
divee.appendChild(btnv);
btnv.classList.add('button');
btnv.addEventListener('click',()=>{
var fixedURI = sss.replace("https://","");
window.open(`pxacht://${fixedURI}`,'_self')});



const btn = document.createElement('button');
btn.innerText = 'URL';
btn.className = 'urlButton';
var divee = document.getElementById("divc1");
divee.appendChild(btn);
btn.classList.add('button');
btn.addEventListener('click',()=>{
var fixedURI = currentUrl.replace("https://","");
window.open(`pxacht://${fixedURI}`,'_self')
});

const btnx = document.createElement('button');
btnx.innerText = 'NETFLIX';
btnx.className = 'urlButton';
var divee = document.getElementById("divc1");
divee.appendChild(btnx);
btnx.classList.add('button');
btnx.addEventListener('click',()=>{
var fixedURI = currentUrl.replace("https://","");
window.open(`pxacht://${fixedURI}`,'_self')
});