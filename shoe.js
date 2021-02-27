const container= document.querySelector(".container");
const card= document.querySelector(".card");
const info= document.querySelector(".info");
const sneaker= document.querySelector(".sneaker");
const circle= document.querySelector(".circle");
const buttons= document.querySelector(".sizes");
const purchase= document.querySelector(".purchase")

container.addEventListener("mousemove",(e)=>{
    p=(window.innerWidth/2 - e.pageX)/15;
    q=(window.innerHeight/2 - e.pageY)/15;
 
    card.style.transform=`rotateX(${p}deg) rotateY(${q}deg)`;
})
container.addEventListener("mouseenter",(e)=>{
   info.style.transform=`translateZ(200px)`;
   card.style.transition="none";
   sneaker.style.transform=`translateZ(200px)`;
   circle.style.transform=`translateZ(100px)`;
   buttons.style.transform=`translateZ(200px)`;
   purchase.style.transform=`translateZ(200px)`  
})
container.addEventListener("mouseleave",(e)=>{
    info.style.transform=`translateZ(0px)`;
    card.style.transition="1s ease";
    sneaker.style.transform=`translateZ(0px)`;
    circle.style.transform=`translateZ(0px)`;
    card.style.transform=`rotateX(0deg) rotateY(0deg)`;
    buttons.style.transform=`translateZ(0px)` 
    purchase.style.transform=`translateZ(0px)` 
})