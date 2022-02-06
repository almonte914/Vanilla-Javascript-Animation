

var currentX = 100;
var currentY = 100;
var dx = 5;
var dy = 5;

function animate(){
    document.getElementById('ball').style.left = currentX + 'px';
    document.getElementById('ball').style.top = currentY + 'px';
    currentX += dx;
    currentY += dy;
    if((currentX > 800 || currentX < 100) || (currentY > 600 || currentY < 100)){
        dx *= -1;
        dy *= -1;
    }
    setTimeout ('animate()', 10);

}
window.addEventListener('load',animate);