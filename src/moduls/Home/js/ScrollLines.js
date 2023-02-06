import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class ScrollLines
{
    constructor()
    {
        const init = () =>
        {
            let parent = $('.text-lines__body')
            let line0 = parent.find('.text-lines__line').eq(0)
            let line1 = parent.find('.text-lines__line').eq(1)
            let tl = gsap.timeline(
            {
                scrollTrigger: {trigger: parent, start: 'top bottom', end: 'bottom top', scrub: 1}
            })

            tl.to(line0, {xPercent: -40})
            .to(line1, { xPercent: 10 }, '<')
        }
        init()
    }
}