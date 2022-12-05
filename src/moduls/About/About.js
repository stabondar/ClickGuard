import './about.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class About 
{
    constructor()
    {   
        const init = () =>
        {
            const scrollLine = () =>
            {
                let trigger = $('.time__cards')
                let elem = $('.time__line--animated')
                let tl = gsap.timeline(
                {
                    scrollTrigger: { trigger: trigger, start: 'top center', end: 'bottom center', scrub: true }
                })

                tl.from(elem, { transformOrigin: 'top', scaleY: 0, ease: 'none' })
            }
            scrollLine()

            const cardHover = () =>
            {
                let item = $('.team__card')
                $(item).each(function()
                {
                    let self = $(this)
                    let cover = self.find('.team__card-hover')
                    let coverItems = self.find('.team__card-hover-item')
                    let coverLink = self.find('.team__card-hover-link')
                    let tl = gsap.timeline(
                    {
                        paused: true, defaults: { duration: 0.4, ease: 'power2' }
                    })

                    tl.from(cover, {opacity: 0})
                    .from(coverItems, {opacity: 0, y: 20}, '<0.2')
                    .from(coverLink, {opacity: 0, y: 20}, '<0.1')

                    cover.removeClass('hide')

                    self.on('mouseenter', () => tl.restart())
                    self.on('mouseleave', () => tl.reverse())
                })
            }
            cardHover()
        }
        window.addEventListener('load', () => init())
    }
}