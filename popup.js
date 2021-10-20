var sss = "";

chrome.storage.sync.get('lastUrl', function(data) {
    let url = "";
    if (data.lastUrl) url = data.lastUrl;
    sss = url;
    
});

const btn = document.createElement('button');
btn.innerText = 'RIP';
document.body.appendChild(btn);
btn.addEventListener('click',()=>{
var fixedURI = sss.replace("https://","");
window.open(`pxacht://${fixedURI}`,'_self')
});

