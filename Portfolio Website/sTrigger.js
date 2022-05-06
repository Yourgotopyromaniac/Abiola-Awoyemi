gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia(
{   
    "(max-width: 1023px)": () => 
    {
        let tl1 =  gsap.timeline(
        {
            scrollTrigger: 
            {
                trigger: ".about",
                start: "center center",
                end: "center top",
                scrub: true,
                markers : false,
                pin : false
            }
        })
        tl1.from(".skill1", {x: innerWidth * 1})
        tl1.from(".skill2", {x: innerWidth * 1})
        tl1.from(".skill3", {x: innerWidth * 1})
        tl1.from(".skill4", {x: innerWidth * 1})
        tl1.from(".skill6", {x: innerWidth * 1})
        tl1.from(".skill5", {x: innerWidth * 1})


        
    },
    "(min-width: 1024px)": () => 
    {
        let tl1 =  gsap.timeline(
        {
            scrollTrigger: 
            {
                trigger: ".about",
                start: "+=0px",
                end: "bottom center",
                scrub: true,
                markers : false,
                pin : true
            }
        })
        tl1.from(".skill1", {x: innerWidth * 1})
        tl1.from(".skill2", {x: innerWidth * 1})
        tl1.from(".skill3", {x: innerWidth * 1})
        tl1.from(".skill4", {x: innerWidth * 1})
        tl1.from(".skill6", {x: innerWidth * 1})
        tl1.from(".skill5", {x: innerWidth * 1})


        
    },

    "all": () => 
    {
        let tl2 = gsap.timeline(
            {
                scrollTrigger: 
                {
                    trigger: ".hero",
                    start: "+=200px",
                    end: "+=300px",
                    scrub: true
                }
            })
            tl2.to(".hero", {autoAlpha: 0})
    
            const boxes = gsap.utils.toArray('.project-case');
    
            boxes.forEach((box, i) => 
            {
                const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: 1.5, autoAlpha: 1, y: 0});
    
                ScrollTrigger.create(
                {
                    trigger: box,
                    animation: anim,
                    toggleActions: 'play none none none',
                    once: true,
                });
            });

    }
    
})


