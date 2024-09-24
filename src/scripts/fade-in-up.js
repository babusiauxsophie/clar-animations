import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initFadeInUp = () => {
    const $fadeContainers = document.querySelectorAll("[data-animation='fade-container']");

    $fadeContainers.forEach($fadeContainer => {
        const $fadeElements = $fadeContainer.querySelectorAll("[data-element='fade-in-up']");

        gsap.set($fadeElements, { y: 100, autoAlpha: 0 });

        const animation = gsap.to($fadeElements, {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.3,
            paused: true
        });

        ScrollTrigger.create({
            trigger: $fadeContainer,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => animation.restart(true),
            onEnterBack: () => animation.restart(true),
        });
    });
};

export default initFadeInUp;


