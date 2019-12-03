const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

// TweenLite.to(object, time, {animate})
const tl = new TimelineLite({paused:true});

tl.to('.cover', 1, {
    width: '60%',
    ease: "power2.out",
})
.to('nav', 1, {
    height: '100%',
    ease: "bounce.out"
}, '-= 0.5')
.fromTo('.nav-open', 1, {
    opacity: 0,
    y: -400,
},
{
    opacity: 1,
    y: 0,
    ease: "power2.out",
    onComplete: ()=>{
        navOpen.style.pointerEvents = "auto";
    }
})

navButton.addEventListener('click', () => {
    tl.play();
});

