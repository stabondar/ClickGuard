import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class NavScroll
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)'

        mm.add(isDesktop, () => 
        {
            const init = () =>
            {
                let nav = $('.nav'),
                    trigger = $('main'),
                    navScroll = $('.nav__scroll'),
                    tl = gsap.timeline(
                    {
                        scrollTrigger: { trigger: trigger, start: 'top top', end: `+=200`, scrub: true }
                    }),
                    tlSecond = gsap.timeline(
                    {
                        scrollTrigger: { trigger: trigger, start: '300 top', end: `+=200`, scrub: true }
                    })
    
                tl.to(nav, {y: -200, ease: 'none'})
                tlSecond.to(navScroll, {y: 220})
            }
            window.addEventListener('load', () => init())
        })
    }
}