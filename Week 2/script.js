var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,'pink');
grd.addColorStop(1,'purple');

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);