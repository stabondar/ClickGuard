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
                let trigger = $('.comp-details__info')
                let elem = $('.comp-details__left')
                let card = $('.comp-details__card')
                let point = $('.comp-details__point')
                let navHeight = $('.nav').height()

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

                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight + 80}`, end: 'bottom bottom', pin: elem
                })
            }
            pinScroll()
        }
        window.addEventListener('load', () => init())
    }
}