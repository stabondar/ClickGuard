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

        }
        
        window.addEventListener('load', () => init())
    }
}
