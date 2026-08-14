const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
 const target=document.querySelector(a.getAttribute("href")); if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
}));
