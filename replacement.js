
// creates an array which hold all of the image objects for us

var imgArray = new Array();

//creates a loop that will add all of the images files into individual files in the array

for(i = 0; i<24; i++){
    imgArray[i] = new Image();
    imgArray[i].src = 'images/ball' + i + '.gif';
}
// creates  a variable that holds the vaule of our current frame
var counter = 0;

//function that does the rotating for us
function rotate(){
//creates a loop that never ends keeping the baseball spinning
    if(counter > imgArray.length-1)
//sets the animation over again    
        counter = 0;
    document.getElementById('ball').src = imgArray[counter].src;
    counter++;
    setTimeout('rotate()',50);
}
// load events works after everythign loads, so all of the frames downlaod
window.addEventListener('load', rotate);

