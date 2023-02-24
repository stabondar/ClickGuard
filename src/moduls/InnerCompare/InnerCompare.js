import './inner-compare.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export default class InnerCompare 
{
    constructor()
    {   
        const init = () =>
        {
            const pinScroll = () =>
            {
                let card = $('.comp-details__card')
                let point = $('.comp-details__point')

                $(point).each(function(i)
                {
                    let self = $(this)
                    let currentCard = card.eq(i)

                    ScrollTrigger.create(
                    {
                        trigger: currentCard, start: 'top 30%', end: 'bottom 30%',
                        onEnter: () => 
                        {
                            point.removeClass('is--active')
                            self.addClass('is--active')
                        },
                        onEnterBack: () => 
                        {
                            point.removeClass('is--active')
                            self.addClass('is--active')
                        }
                    })
                })
            }
            pinScroll()

            const tooltip = () => 
            {
                const elem = $('.compare__tooltip')
                $(elem).each(function()
                {
                    let self = $(this),
                        content = self.find('.compare__tooltip--content'),
                        tl = gsap.timeline({paused: true})

                    tl.fromTo(content, { display: 'none' }, {display: 'block', duration: 0})
                    .from(content, {yPercent: 10, opacity: 0})

                    self.on('mouseenter', () => tl.play())
                    self.on('mouseleave', () => tl.reverse())
                })
            }
            tooltip()
        }
        init()
    }
}