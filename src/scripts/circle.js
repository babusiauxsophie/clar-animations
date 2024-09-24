import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initCircle = () => {
    const $circleContainers = document.querySelectorAll("[data-animation='circle-container']");

    $circleContainers.forEach($circleContainer => {
        const $circleElements = $circleContainer.querySelectorAll("[data-element='circle']");

        const smallestCircleRadius = Math.min(...Array.from($circleElements).map(circle => parseFloat(circle.getAttribute('r'))));

        gsap.set($circleElements, {
            scale: i => smallestCircleRadius / parseFloat($circleElements[i].getAttribute('r')),
            autoAlpha: 0,
        });

        const animation = gsap.to($circleElements, {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            paused: true
        });

        ScrollTrigger.create({
            trigger: $circleContainer,
            start: "top 60%",
            end: "bottom 20%",
            onEnter: () => animation.restart(true),
            onEnterBack: () => animation.restart(true),
        });
    });
};

export default initCircle;

