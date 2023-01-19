import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class NavScroll
{
    constructor()
    {
        const init = () =>
        {
            let nav = $('.nav'),
                trigger = $('main'),
                navScroll = $('.nav__scroll'),
                y = -200,
                tl = gsap.timeline(
                {
                    scrollTrigger: { trigger: trigger, start: 'top top', end: `+=200`, scrub: true }
                }),
                tlSecond = gsap.timeline(
                {
                    scrollTrigger: { trigger: trigger, start: '300 top', end: `+=200`, scrub: true }
                })

            let mm = gsap.matchMedia(),
                breakPoint = 991
        
            mm.add(
            {
                isDesktop: `(min-width: ${breakPoint}px)`,
                isMobile: `(max-width: ${breakPoint - 1}px)`,
            }, (context) => 
            {
                let { isDesktop, isMobile } = context.conditions;
                tl.to(nav, {y: isDesktop ? -200 : 0, ease: 'none'})
            })

            tlSecond.to(navScroll, {y: 220})
        }
        window.addEventListener('load', () => init())
    }
}