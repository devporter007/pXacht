let link = document.querySelector('#check_code');
if (link){
    var target = link.getAttribute('value')
}
document.getElementById('username').value = "admin";
document.getElementById('verification_code').value = target;