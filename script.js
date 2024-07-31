
function page2Animation(){
    gsap.from(".elemm h1",{
        y:120,
        stagger:0.2,
        duration:1.4,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 57%",
            end:"top 56%",
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

// let time = document.getElementById("timeSpan");
// setInterval(() => {
//     let d = new Date();
//     time.innerHTML = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// }, 1000);


// let time = document.getElementById("timeSpan");
// setInterval(() => {
//     time.innerHTML = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')} GMT+5:30`;
// }, 1000);


// let time = document.getElementById("timeSpan");
// setInterval(() => {
//     let d = new Date();
//     let hours = d.getHours().toString().padStart(2, '0');
//     let minutes = d.getMinutes().toString().padStart(2, '0');
//     time.innerHTML = `${hours}:${minutes} GMT+5:30`;
// }, 1000);
function timedisp(){
let time = document.getElementById("timeSpan");
setInterval(() => {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes().toString().padStart(2, '0');
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12 || 12).toString().padStart(2, '0');
    time.innerHTML = `${hours}:${minutes} ${period} (GMT+5:30)`;
}, 1000);
}
timedisp()


function elementmovewithcursor(){
document.querySelectorAll('.magnetic').forEach(item => {
    item.addEventListener('mousemove', function(e) {
        const strength = this.getAttribute('data-strength') || 20;
        const rect = this.getBoundingClientRect();
        const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
        const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
        this.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});
}
elementmovewithcursor()