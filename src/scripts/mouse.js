import gsap from "gsap";

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function mouse() {
    const mouseElement = document.querySelector('.mouse');
    
    const xTo = gsap.quickTo('.mouse', 'x', {
        transformOrigin: 'center',
    });
    
    const yTo = gsap.quickTo('.mouse', 'y', {
        transformOrigin: 'center',
    });

    const debouncedMouseMove = debounce((e) => {
        xTo(e.pageX);
        yTo(e.pageY);
    }, 1);

    document.addEventListener('mousemove', debouncedMouseMove);

    document.querySelector('.section--info').addEventListener('mouseenter', () => {
        mouseElement.classList.add('in-section--info');
    });

    document.querySelector('.section--info').addEventListener('mouseleave', () => {
        mouseElement.classList.remove('in-section--info');
    });

    
    document.querySelector('.section--vision').addEventListener('mouseenter', () => {
        mouseElement.classList.add('in-section--vision');
        mouseElement.classList.remove('in-section--info');
    });

    document.querySelector('.section--vision').addEventListener('mouseleave', () => {
        mouseElement.classList.remove('in-section--vision');
    });

    document.querySelector('.section--team').addEventListener('mouseenter', () => {
        mouseElement.classList.add('in-section--team');
        mouseElement.classList.remove('in-section--info', 'in-section--vision');
    });

    document.querySelector('.section--team').addEventListener('mouseleave', () => {
        mouseElement.classList.remove('in-section--team');
    });

    document.querySelector('footer').addEventListener('mouseenter', () => {
        mouseElement.classList.add('in-footer');
        mouseElement.classList.remove('in-section--info', 'in-section--vision', 'in-section--team');
    });

    document.querySelector('footer').addEventListener('mouseleave', () => {
        mouseElement.classList.remove('in-footer');
    });
}

export default mouse;
