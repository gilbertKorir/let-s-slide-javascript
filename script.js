var i =0; 
var time = 3000;
var images = [];
const body = document.body;

body.style.backgroundColor = "lightgreen";
document.getElementById('de1').style.color = "magenta";
document.getElementById('de2').style.color = "blue";

images[0] = 'im1.jpeg';
images[1] = 'im2.jpeg';
images[2] = 'im3.jpeg';
images[3] = 'im4.jpeg';
images[4] = 'im5.jpeg';

//play with images
function slideImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
setTimeout("slideImg()", time);
}

window.onload = slideImg;