window.onload =function(){
    var urlParams = new URLSearchParams(window.location.search);
    var ans=urlParams.get('ans');
    document.getElementById('result').innerText="Your Overall Income Will Be:"+ans;
}
function goBack() {
    
    window.location.href = "index.html";
}