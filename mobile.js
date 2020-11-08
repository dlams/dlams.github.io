function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
    alert('모바일');
    document.getElementById("stylesheet").href = “timer.css”;

} else {
    alert('PC');
    document.getElementById("stylesheet").href = “timer2.css”;

}
