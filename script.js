gsap.registerPlugin(ScrollTrigger);
function locomotivejs() {
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        getDirection:true
    });
      locoScroll.on("scroll", ScrollTrigger.update);
     
       ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },  
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function slidesHandle() {
    let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];

    var isHovered = null;

    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            isHovered = ".openvideo" + dets.target.dataset.index;
            document.querySelector(isHovered).style.width = "100%";
        })

        elem.addEventListener("mouseleave", function (dets) {
            isHovered = ".openvideo" + dets.target.dataset.index;
            document.querySelector(isHovered).style.width = "0%";
        })
    });

    document.querySelector(".circular")
        .addEventListener("mousemove", function (dets) {
            var bndrectvals = document.querySelector(".circular").getBoundingClientRect()
            var xVal = dets.clientX - bndrectvals.x;
            var yVal = dets.clientY - bndrectvals.y;
            document.querySelector("#minicircle").style.top = yVal + "px";
            document.querySelector("#minicircle").style.left = xVal + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 10px 3px green";
        })

    document.querySelector(".circular")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";
            document.querySelector("#minicircle").style.boxShadow = "none";
        })
}
function textanimationcode(){
    gsap.from(".row h2",{
        y:100,
        duration:1,
        stagger:.2
    })
    gsap.from(".row span",{
        width:0,
        duration:2,
        delay:1
    })
}

textanimationcode();
slidesHandle();
locomotivejs()