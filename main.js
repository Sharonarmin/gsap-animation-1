const circle = document.querySelector(".circle");
const frame = document.querySelector(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener('mousemove',(dets)=>{
    gsap.to(circle,{
        x: dets.clientX,
        y: dets.clientY,
        duration:.2,
        ease:Expo
    })
})

frame.addEventListener('mousemove',(dets)=>{

    var dims = frame.getBoundingClientRect();
    var xstart = dims.x;
    var xend = dims.x + dims.width;
    var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);

    gsap.to(circle,{
        scale:8
    })
    gsap.to('.frame span',{
        color:'#fff',
        duration:.5,
        y: '-5vw'
    })
    gsap.to('.frame span',{
        x: lerp(-50, 50, zeroone),
        duration:.2
    })

})

frame.addEventListener('mouseleave',()=>{
    gsap.to(circle,{
        scale:1
    })
    gsap.to('.frame span',{
        color:'#000',
        duration:.5,
        y:0
    })
})