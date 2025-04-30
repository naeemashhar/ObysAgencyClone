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
            },35);
    
        },
    });
    
    tl.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:4,
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
    tl.from("#body1 h1,#body2 h1,#body3 h2,#body3 h3,#body4 h1",{
        y:120,
        stagger:0.2,
    });
}



function cursoranime(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
    
        })
    })
    
    Shery.makeMagnet("#nav2 h4" /* Element to target.*/);
}


loadingscreen();
cursoranime();