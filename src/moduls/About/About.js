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


                let horintalLine = $('.line__animated')
                let circle = $('.circle')
                let bg, origin

                $(circle).each(function(i)
                {
                    if(i === 0) {bg = '#b5d9f7', origin = 'right'}
                    if(i === 1) {bg = '#9993e6', origin = 'left'}
                    if(i === 2) {bg = '#b5f7de', origin = 'right'}


                    let self = $(this)
                    let currentLine = horintalLine.eq(i)
                    let tlCircle = gsap.timeline(
                    {
                        scrollTrigger: { trigger: self, start: 'center center', end: 'center center', toggleActions: 'play none reverse none' }
                    })

                    tlCircle.from(currentLine, { transformOrigin: origin, scaleX: 0 })
                    .to([elem, currentLine], {backgroundColor: bg}, '<')
                })

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
        init()
    }
}