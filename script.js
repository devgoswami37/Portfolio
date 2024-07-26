
function page2Animation(){
    gsap.from(".elemm h1",{
        y:120,
        stagger:0.2,
        duration:1.4,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page2Animation()

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image1")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var tl = gsap.timeline()
// tl.from("#lets-connect1:hover .arrowblack",{
//     x:40,
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })
// // tl.to("#loader h3",{
// //     x:-10,
// //     opacity:0,
// //     stagger:0.1,
// //     duration:1
// // })