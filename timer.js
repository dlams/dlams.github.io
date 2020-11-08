animateCircle = function() {
  var ctx = document.querySelector('#myCanvas').getContext('2d');
  var end = Math.PI * 2;
  var time = 0
  var endtime = 12
  var x = setInterval(function() {
    time++;
    document.getElementById("demo").innerHTML = endtime - time;
    ctx.clearRect(0, 0, 200, 200);
    ctx.lineWidth = 5;
    ctx.lineCap = 'round'
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2 / endtime * time);
    ctx.stroke();
    if (endtime - time <= 0) {
      clearInterval(x);
    }
  }, 1000);
};
