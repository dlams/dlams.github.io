
animateCircle = function() {
  var ctx = document.querySelector('#myCanvas').getContext('2d');
  var end = Math.PI * 2;
  var time = -1;
  for (var i = 0; i <= 100; i++) {
    draw(i);
  };
  document.getElementById("demo").innerHTML = "0초";
  function draw(delay) {
    setTimeout(function() {

      ctx.clearRect(0, 0, 100, 100);
      ctx.lineWidth = 10;
      ctx.lineCap = 'round'
      ctx.strokeStyle = "#E1E1E1";
      ctx.beginPath();
      ctx.arc(60, 60, 50, 0, Math.PI*2);
      ctx.stroke();

      ctx.strokeStyle = "orange";
      ctx.beginPath();
      ctx.arc(60, 60, 50, Math.PI*1.5, end / 100 * delay + Math.PI*1.5);
      ctx.stroke();
      ;
      if ((delay % 20) == 0) {
        time++;
        document.getElementById("demo").innerHTML = time + "초"
      }
    }, delay * 60);
  }
};
