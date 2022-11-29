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

            const faqPin = () =>
            {
                let pinItem = $('.faq__left')
                let trigger = $('.faq__wrapper')
                let pinHeight = pinItem.height()

                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight+80}`, end: `bottom ${window.innerHeight - pinHeight - navHeight}`, pin: pinItem, scrub: true, pinType: 'transform'
                })

                $('.faq__item--top').on('click', () =>
                {
                    setTimeout(() => {
                        ScrollTrigger.refresh()
                    }, 310);
                })
            }
            faqPin()
        }
        window.addEventListener('load', () => init())
    }
}