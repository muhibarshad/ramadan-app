let i=0;
let image=[];
let time=4000;
image[0]='image1.jpeg';
image[1]='image2.jpeg';
image[2]='image3.jpeg';
image[3]='image4.jpeg';
image[4]='image5.jpeg';
image[5]='image6.jpeg';
image[6]='image7.jpeg';

function changeImgage(){
     document.slide.src=image[i];
     if(i<image.length-1){
     i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImgage()",time);
}
window.onload=changeImgage;
