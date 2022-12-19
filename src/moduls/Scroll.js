import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default class Scroll 
{
    constructor()
    {
        ScrollSmoother.create(
        {
            smooth: 0.6,
            content: '.main',
            normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
            ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
            effects: true,
            preventDefault: true,
            smoothTouch: false
        })

        const init = () => 
        {
            gsap.set('main', { autoAlpha: 1 })
        }
        window.addEventListener('load', () => init(), ScrollTrigger.refresh())
    }
}
