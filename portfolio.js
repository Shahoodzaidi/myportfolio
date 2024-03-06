
let hum = document.querySelector(".humburger");
let list = document.querySelector("ul");
let body=document.querySelector("body");
let image = document.querySelector("img");
let btn = document.querySelector("button");
let formshow = document.querySelector("#anth");
let oldfrm = document.querySelector(".old-form");
 let span = document.querySelector(".mode span");
let naame = document.getElementById("head");
let project = document.getElementById("project");
let all = document.querySelectorAll("#anchor");
let item = document.querySelectorAll(".list");
let whatsapp = document.querySelector('.whatsapp img')
var tl = gsap.timeline();

function remove (){
    oldfrm.classList.remove('newfrm');
    
}
item.forEach(item =>{
   item.addEventListener("click",()=>{
    list.classList.remove("active");
   })
})
function main (){
    formshow.addEventListener("click",function(){
        oldfrm.classList.add('newfrm')
        list.classList.remove("active");
    })
  
    btn.style.display="none";
    hum.addEventListener("click",function(){
        list.classList.toggle("active");
     
    })
    image.addEventListener("click",()=>{
        image.style.height="42vh";
        image.style.width="30%";
        image.style.marginTop="600px";
        btn.style.display="block";
    })
    btn.addEventListener("click",()=>{
        image.style.height="80%";
        image.style.width="5%";
        image.style.marginTop="";
        btn.style.display="none";
    })
    
    span.addEventListener("click",()=>{
        span.classList.toggle("dark");
       naame.classList.toggle("light")
       project.classList.toggle("light")
       
     body.classList.toggle("newcolor");
     all.forEach(all=>{
        all.classList.toggle("light")
    })
    
    })
}
main();

function anime(){
    tl.from(".loader .load1",{
        y:-900,
        duration:2.3,
        opacity:0,
        ease :"bounce"
        
    })
    tl.from(".loader .load2",{
        y:800,
        duration:2.3,
        ease :"bounce",
        opacity:0,
    })
    tl.to(".loader",{
        x:-2000,
        duration:1.5,
        delay:.2,
        ease :"power1.inout"
    })
}
anime();

function validation(){
    alert("SORRY..!! THIS FORM IS NOT SUPPOSED TO CONTACT.. IF YOU WANT TO CONTACT YOU CAN SCROLL DOWN TO BOTTOM..!!")
}


setTimeout(() => {
    whatsapp.style.display="inline"
}, 6000);

