import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class PricingPin
{
    constructor()
    {
        const init = () =>
        {
            let navHeight = $('.nav').height()
            // Pricing Pin
            const pricingPin = () =>
            {
                let pinItem = $('.price-compare__top')
                let topItem = $('.price-compare__top--parent')
                topItem.height(pinItem.outerHeight())
                let trigger = $('.price-compare__chart')

                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight}`, end: 'bottom bottom', pin: pinItem, scrub: true, pinType: 'transform'
                })

                $('.price-compare__item--top').on('click', () =>
                {
                    setTimeout(() => {
                        ScrollTrigger.refresh()
                    }, 310);
                })
            }
            pricingPin()

            $('.price-compare__item--top').eq(0).click()
        }
        window.addEventListener('load', () => init())
    }
}