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
            let list = $('.pricing__list'),
                price0 = list.find('.h--56').eq(0),
                price1 = list.find('.h--56').eq(1),
                price2 = list.find('.h--56').eq(2),
                toggle = $('.pricing__toggle--btn'),
                circle = toggle.find('.pricing__toggle--circle'),
                annual = $('.pricing__toggle').find('p').eq(0),
                monthly = $('.pricing__toggle').find('p').eq(1),
                chars = '$1234567890',
                tl = gsap.timeline(
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

            /**
             * Drop Down Fucntions
             */
            let dropdown = $('.pricing__dp'),
                dropdownTop = $('.pricing__dp--top'),
                dropdownList = $('.pricing__dp--list'),
                dropdownItem = $('.pricing__dp--item'),
                dropdownArrow = $('.pricing__dp--arrow'),
                dropdownTl = gsap.timeline({ paused: true, defaults: { duration: 0.3 }, onComplete: () => dropdown.addClass('open') })

            dropdownTl.from(dropdownList, {display: 'none', duration: 0})
                      .from(dropdownList, {opacity: 0, yPercent: 4}, '<')
                      .to(dropdownArrow, {rotate: 0}, '<')

            $('body').on('click', (event) => 
            {
                let target = $(event.target)
                if(target.closest('.pricing__dp').length > 0 )
                {
                    dropdownTl.play()
                } else
                {
                    dropdownTl.reverse()
                }
            })

        }
        window.addEventListener('load', () => init())
    }
}