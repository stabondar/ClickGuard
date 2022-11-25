import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(TextPlugin, ScrambleTextPlugin)

export default class PricingToggle 
{
    constructor()
    {
        const init = () =>
        {
            let list = $('.pricing__list')
            let price0 = list.find('.h--56').eq(0)
            let price1 = list.find('.h--56').eq(1)
            let price2 = list.find('.h--56').eq(2)
            let toggle = $('.pricing__toggle--btn')
            let circle = toggle.find('.pricing__toggle--circle')
            let annual = $('.pricing__toggle').find('p').eq(0)
            let monthly = $('.pricing__toggle').find('p').eq(1)
            let chars = '$1234567890'
            let tl = gsap.timeline(
            {
                paused: true
            })

            gsap.set(annual, {color: '#0037ff', fontWeight: 700})

            tl.to(price0, {scrambleText: {text: '$89', chars: chars}, duration: 1 })
            .to(price1, {scrambleText: {text: '$149', chars: chars}, duration: 1 }, '<')
            .to(price2, {scrambleText: {text: '$199', chars: chars}, duration: 1 }, '<')
            .to(circle, {xPercent: 98}, '<')
            .to(monthly, {color: '#0037ff', fontWeight: 700}, '<')
            .to(annual, {color: '#080736', fontWeight: 500}, '<')

            //  Double Click Function
            $(function () 
            {
                let burgerClicks = [function () 
                {
                    tl.restart()
                },

                function () 
                { 
                    setTimeout(function () 
                    {
                        counter = 0;
                    }, 200); 
                    tl.timeScale(1.5).reverse()
                } ]

                let counter = 0
                $(toggle).on('click', function () {
                    if (counter >= 2) return false
                    burgerClicks[counter]()
                    counter++
                })
            })
        }
        window.addEventListener('load', () => init())
    }
}