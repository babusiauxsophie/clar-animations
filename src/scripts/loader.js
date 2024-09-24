import gsap from "gsap";

function initLoaderAnimation() {
    const timeline = gsap.timeline();

    gsap.set(".loader h2", { y: 50, autoAlpha: 0 });

    timeline.to(
        ".loader h2", 
        { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }
    );

    timeline.to(
        ".loader", 
        { x: '100%', duration: 0.5, ease: "power2.in", onComplete: () => {
            document.querySelector('.loader').style.display = 'none';
            initStaggeredFadeIn(); 
        }}
    );
}

function initStaggeredFadeIn() {
    gsap.set(".fade-in-up span", { y: 50, autoAlpha: 0 });

    gsap.to(
        ".fade-in-up span", 
        { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.5, 
            ease: "power2.out",
            stagger: 0.3
        }
    );
}

document.addEventListener("DOMContentLoaded", initLoaderAnimation);

export default initLoaderAnimation;
