import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

let locoScroll
export default class SmoothScroll 
{
    constructor()
    {
        /**
         * Setup Loco And Gsap
         */
        if(window.innerWidth > 991) 
        {
            gsap.registerPlugin(ScrollTrigger)
            
            locoScroll = new LocomotiveScroll({
                el: document.querySelector('.main'),
                smooth: true,
                multiplier: 0.6,
                lerp: 0.23
            });
            locoScroll.on('scroll', ScrollTrigger.update);

            ScrollTrigger.scrollerProxy('.main', {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed'
            });

            ScrollTrigger.defaults({
                scroller: '.main'
            })
            
            window.addEventListener('load', () => 
            {
                ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
                locoScroll.update()
                setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 10);
            })
        
            let windowWidth = window.innerWidth

            const checkWidth = () =>
            {
                let afterWidth = window.innerWidth
                if (windowWidth !== afterWidth)
                {
                    ScrollTrigger.refresh()
                    locoScroll.update() 
                }
                windowWidth = window.innerWidth
            }

            function debounce(func) {
                var timer;
                return function (event) {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(func, 300, event);
                };
                }
        
            window.addEventListener("resize", debounce(function (e) {checkWidth()}))
        }

        const init = () => 
        {
            /**
             * GSAP no blick
             */
            gsap.set('main', { autoAlpha: 1 })
        
        }
        window.addEventListener('load', () => init(), locoScroll.update())
    }
}