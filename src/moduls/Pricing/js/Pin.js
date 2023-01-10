import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class PricingPin
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)',
            isMobile = '(max-width: 991px)'

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

                mm.add(isDesktop, () =>
                {
                    ScrollTrigger.create(
                    {
                        trigger: trigger, start: `top ${navHeight}`, end: 'bottom center', pin: pinItem, scrub: true, pinType: 'transform'
                    })
                })

                mm.add(isMobile, () =>
                {
                    ScrollTrigger.create(
                    {
                        trigger: trigger, start: `top ${navHeight}`, end: 'bottom center', pin: pinItem, scrub: true
                    })
                })

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
        window.addEventListener('load', () => init())
    }
}