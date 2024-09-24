import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPinAside = () => {
    const $pinContainers = document.querySelectorAll("[data-animation='pin-aside']");

    $pinContainers.forEach($pinContainer => {
        const $pinElement = $pinContainer.querySelector("[data-element='pin']");


        ScrollTrigger.create({
                trigger: $pinContainer,
                start: "top top",
                end: "118% bottom",
                pin: $pinElement,
                pinSpacing: false,
                scrub: true,

        })

    });
};

export default initPinAside;