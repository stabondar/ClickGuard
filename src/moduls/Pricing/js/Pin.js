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

                $('.price-compare__item--top').on('click', () =>
                {
                    setTimeout(() => {
                        ScrollTrigger.refresh()
                    }, 310);
                })

                window.addEventListener('resize', () => navHeight = $('.nav').height() )
            }
            pricingPin()

            $('.price-compare__item--top').eq(0).click()
        }
        init()
    }
}