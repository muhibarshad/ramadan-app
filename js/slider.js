let i=0;
let image=[];
let time=4000;
image[0]='/images/image1.jpeg';
image[1]='/images/image2.jpeg';
image[2]='/images/image3.jpeg';
image[3]='/images/image4.jpeg';
image[4]='/images/image5.jpeg';
image[5]='/images/image6.jpeg';
image[6]='/images/image7.jpeg';

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
