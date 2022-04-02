let flag=false;
let burger=document.getElementById('burger');
burger.addEventListener('click',function(){
    if(flag==false)
    {
    let responsive_navBar=document.getElementById('NavBar');
    responsive_navBar.style.display='block';
    flag=true;
   }
    else if(flag==true){
        let responsive_navBar=document.getElementById('NavBar');
        responsive_navBar.style.display='none';
        flag=false;
    }
})