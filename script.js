const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function page4Animation(){
    var elemC=document.querySelector("#elem-container")
var fixed= document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100
  });
page4Animation()
var menu=document.querySelector("nav h3")
var full=document.querySelector("#fullscr")
var navimg=document.querySelector("nav img")
var flag=0
menu.addEventListener("click",function(){
if(flag==0){
    full.style.top=0
    navimg.style.opacity=0 
    flag=1    
}else{
    full.style.top="-100%"
    navimg.style.opacity=1 
    flag=1
}

})