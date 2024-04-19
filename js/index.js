gsap.registerPlugin(ScrollTrigger);

gsap.from('.Pic1',{
    y: 200, 
    opacity: 0, 
    duration: 2,
    ease: 'power4.out',
    scrollTrigger: {
        trigger:'.pic-anim',
        start: "top 90%",
        end:"bottom 90%",
        scrub: 2,
    }
})
gsap.from('.soc', {
    xPercent:100,
    duration: 2.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger:'.soc-anim',
        start: "top 90%",
        end:"bottom 90%",
        scrub: 2,
    }
})
gsap.from('.butt2', {
    xPercent:100,
    duration: 2.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger:'.butt2-anim',
        start: "top 90%",
        end:"bottom 90%",
        scrub: 2,
    }
})
gsap.from('.history', {
    xPercent:-100,
    duration: 2.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger:'.his-anim',
        start: "top 90%",
        end:"bottom 90%",
        scrub: 2,
    }
})
gsap.from('.order', {
    xPercent:-100,
    duration: 2.5,
    ease: 'power4.out',
    scrollTrigger: {
        trigger:'.or-anim',
        start: "top 90%",
        end:"bottom 90%",
        scrub: 2,
    }
})