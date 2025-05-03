function locom(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadingscreen(){

    let tl= gsap.timeline();

    tl.from(".line h1",{
        y:150,
        opacity:0,
        
        duration: 0.5,
        delay : 1,
        stagger:0.2,
    });


    
    tl.from("#num ",{
        opacity:0,
        onStart:function(){
            let c= document.querySelector("#num h5");
            let grow=0;
            setInterval(function(){
                grow++;
                if ( grow <= 100 ){
                    c.innerHTML=grow;
                }
                else{
                    c.innerHTML=100;
                }
            },28);
    
        },
    });
    tl.from("#few",{
        y:150,
        opacity:0,
        duration: 0.5,
        delay : 0.4,
        stagger:0.2,
    });
    
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:2.6,
    });

    tl.from("#page1",{
        delay:0.2,
        y:1600,
        duration:0.6,
        ease: Power4,
        
    });
    
    tl.to("#loader",{
        display:"none",
    });

    tl.from("#nav",{
        opacity:0,
        
    })
    tl.from("#body1 h1,#body2 h1, #body3 h2, #body3 h3,#body4 h1",{
        y:140,
        stagger:0.2,
    });
    tl.from("#page2,#body1",{
        opacity:0,
    },"-=1.2");

    tl.from("#page3 h1",{
        y:150,
        delay:0.5,
        duration:0.7,
        stagger:0.2,
    });
    tl.from("#page3 .undline",{
        x:900,
        delay:0.3,
        duration:0.6,
        stagger:0.2,
    });


    tl.from("#page4 h1",{
        y:200,
        delay:1,
        duration:1,
        stagger:0.2,
    });
    tl.from("#page4-body .undline",{
        x:900,
        delay:0.3,
        duration:0.6,
        stagger:0.2,
    });



    tl.from("#page4 .undlinee",{
        x:1150,
        delay:0.7,
        duration:0.7,
        stagger:0.2,
    });
    tl.from("#page4 #sma",{
        y:100,
        delay:0.7,
        duration:0.7,
        stagger:0.2,
    });


}

function cursoranime(){ //medium JS used
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration:1,
    });
    
    Shery.makeMagnet("#nav2 h4" /* Element to target.*/);
    
    var videoContainerr=document.querySelector("#page2-video");
    var video=document.querySelector("#page2-video video");
    videoContainerr.addEventListener("mouseenter",function(){
        videoContainerr.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0,
            });
            gsap.to("#vid-cursor",{
                left:dets.x -570,
                y:dets.y -300,
            });
        });
    });

    videoContainerr.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1,
        });
        gsap.to("#vid-cursor",{
            top:"-10%",
            left:"80%",
        });
    });






    var flag=0
    videoContainerr.addEventListener("click",function(){
        if(flag==0){
            video.play()
            video.style.opacity =  1

            document.querySelector("#vid-cursor").innerHTML =`<i class="ri-pause-mini-fill"></i>`
            gsap.to("#vid-cursor",{
                scale:0.5,
            });
            flag=1
        
        }else{
            video.pause()
            video.style.opacity =  0

            document.querySelector("#vid-cursor").innerHTML =`<i class="ri-play-mini-fill"></i>`
            gsap.to("#vid-cursor",{
                scale:1,
            });
            flag=0
        }
        
    })
};

function sheryanime(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195864976497},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.6,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}},
        gooey:true,
        
    })
}

function mouseflag(){
    document.addEventListener("mousemove",function(det){
        gsap.to("#flag",{
            x:det.x,
            y:det.y,
    
        });
    });
    document.querySelector("#body3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1, 
        });
    });
    document.querySelector("#body3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0, 
        });
    });
};


function footerAnimation() {

    var clutterr = ""
    var clutterr2 = ""
    document.querySelector("#footer h1").textContent.split("").forEach(function (elemm) {
        clutterr += `<span>${elemm}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutterr

    document.querySelector("#footer h2").textContent.split("").forEach(function (elemm) {
        clutterr2 += `<span>${elemm}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutterr2

    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
        gsap.to("#footer h1 span", {
        opacity: 0,
        stagger: 0.05
    })
    gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
    })
    })
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
        gsap.to("#footer h1 span", {
        opacity: 1,
        stagger: 0.1,
        delay: 0.35,
    })
    gsap.to("#footer h2 span", {
        opacity: 0,
        stagger: 0.05
    })
    })
}

loadingscreen();
cursoranime();
locom();
//sheryanime();
mouseflag();
footerAnimation()



