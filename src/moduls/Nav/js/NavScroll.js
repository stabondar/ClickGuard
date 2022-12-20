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
                let nav = $('.nav')
                let trigger = $('main')
                let height = $('.hiring').height()
                gsap.set(nav, {top: height})
                window.addEventListener('resize', () =>
                {
                    height = $('.hiring').height()
                })
    
                let tl = gsap.timeline(
                {
                    scrollTrigger: { trigger: trigger, start: 'top top', end: `+=${height}`, scrub: true }
                })
    
                tl.to(nav, {top: 0})
            }
            window.addEventListener('load', () => init())
        })
    }
}