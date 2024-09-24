import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initFadeDown = () => {
    const $fadeContainers = document.querySelectorAll("[data-animation='fade-down-container']");

    $fadeContainers.forEach($fadeContainer => {
        const $fadeElements = $fadeContainer.querySelectorAll("[data-element='fade-down']");

        gsap.set($fadeElements, { x: -20, y: 30, autoAlpha: 0 });

        const animation = gsap.to($fadeElements, {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
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

export default initFadeDown;
