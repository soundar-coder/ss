var sidenavbar=document.querySelector(".sidenavbar")
var toolbar=document.querySelector(".toolbar")
var sidenavbarclose=document.querySelector(".side")
console.log(sidenavbarclose)
 toolbar.addEventListener("click",function(){
    sidenavbar.style.display="block"
})
sidenavbarclose.addEventListener("click",function(){
    sidenavbar.style.display="none"
})