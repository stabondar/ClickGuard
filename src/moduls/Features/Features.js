import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Features 
{
    constructor()
    {   
        const init = () =>
        {
            const leftPin = () =>
            {
                let navHeight = $('.nav').height()
                let pinItem = $('.freatures-cards__left')
                let trigger = $('.freatures-cards__body')
                let pinHeight = pinItem.height()

                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight}`, end: 'bottom bottom', pin: pinItem, scrub: true, pinType: 'transform'
                })
            }
            leftPin()

            const activeLink = () =>
            {
                let item = $('.freatures-cards__point');
                let trigger = $('.freatures-cards__item')
                $(item).each(function(index)
                {

                    let self = $(this)
                    let currentTab = trigger.eq(index)
                    ScrollTrigger.create(                        
                    {
                        trigger: currentTab, start: 'top 50%', end: 'bottom 50%', toggleActions: 'restart none restart none',
                        onEnter: () => 
                        {
                            item.removeClass('is--active')
                            self.addClass('is--active')
                        },
                        onEnterBack: () => 
                        {
                            item.removeClass('is--active')
                            self.addClass('is--active')
                        }
                    })
                })
            }
            activeLink ()

            const animatedLine = () =>
            {
                let trigger = $('.freatures-cards__items')
                let elem = $('.freatures-cards__line-active ')
                let tl = gsap.timeline(
                {
                    scrollTrigger: { trigger: trigger, start: 'top center', end: 'bottom center', scrub: true }
                })

                tl.from(elem, { transformOrigin: 'top', scaleY: 0, ease: 'none' })

            }
            animatedLine ()
        
        window.addEventListener('load', () => init())
    }
}
