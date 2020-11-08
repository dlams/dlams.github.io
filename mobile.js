function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    alert('모바일');


} else {
    alert('PC');
    document.getElementById("mycss").href = "timer.css";

}
