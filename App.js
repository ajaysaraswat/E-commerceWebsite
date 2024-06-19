const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const cross=document.getElementById("close");
const shopimg=document.querySelectorAll(".pro");
let loader=document.getElementById("preloader");

if(bar){
    bar.addEventListener("click",()=>{
     nav.classList.add("active");   
    });
}

if(cross){
    cross.addEventListener("click",()=>{
     nav.classList.remove("active");   
    });
}
// let MainImg=document.getElementById("MainImg");
// let smallimg=document.getElementsByClassName("small-img");

// smallimg[0].onclick=function(){
//   MainImg.src=smallimg[0].src;
// }
// smallimg[1].onclick=function(){
//   MainImg.src=smallimg[1].src;
// }
// smallimg[2].onclick=function(){
//   MainImg.src=smallimg[2].src;
// }
// smallimg[3].onclick=function(){
//   MainImg.src=smallimg[3].src;
// }

// shopimg[0].addEventListener('click',function(){
   
//     window.location.href='sproduct.html';
// });
setTimeout(()=>{
   
        loader.style.display="none";
     
},2000);


