import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initHorizontalScroll = () => {
    const $scrollContainers = document.querySelectorAll("[data-animation='horizontal-scroll']");

    $scrollContainers.forEach($scrollContainer => {
        const $scrollElement = $scrollContainer.querySelector("[data-element='horizontal-element']");
        
        const getScrollAmount = () => {
            const windowWidth = window.innerWidth;
            console.log(windowWidth)
            const elementWidth = $scrollElement.scrollWidth;
        };

        const scrollAnimation = gsap.to($scrollElement, {
            x: () => getScrollAmount() * -1,
            ease: 'none'
        });

        ScrollTrigger.create({
            animation: scrollAnimation,
            scrub: true,
            trigger: $scrollContainer,
            pin: true,
            start: "0% 0%",
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
            markers: true
        });
    });
};

export default initHorizontalScroll;

