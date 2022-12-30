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
            // Currencies
            let monthlyArray = 
                [
                    ['$89', '$149', '$199'],    //usd
                    ['£89', '£149', '£199'],    //gbr
                    ['€89', '€149', '€199'],    //euro
                    ['C$89', 'C$149', 'C$199'], //cad
                    ['$89', '$149', '$199']     //aud
                ],
                annualArray = 
                [
                    ['$74', '$119', '$159'],    //usd
                    ['£74', '£119', '£159'],    //gbr
                    ['€74', '€119', '€159'],    //euro
                    ['C$74', 'C$119', 'C$159'], //cad
                    ['$74', '$119', '$159']     //aud
                ],
                monthlyVal = [],
                annualVal = []

            annualVal.push(...annualArray[0])
            monthlyVal.push(...monthlyArray[0])

            let list = $('.pricing__list'),
                price0 = list.find('.h--56').eq(0),
                price1 = list.find('.h--56').eq(1),
                price2 = list.find('.h--56').eq(2),
                toggle = $('.pricing__toggle--btn'),
                circle = toggle.find('.pricing__toggle--circle'),
                annualText = $('.pricing__toggle').find('p').eq(0),
                monthlyText = $('.pricing__toggle').find('p').eq(1),
                chars = '$1234567890',
                tl = gsap.timeline( { paused: true, defaults: { ease: 'none' } }),
                mounthlyTL = gsap.timeline( { paused: true, defaults: { ease: 'none', duration: 1 } }),
                annualTL = gsap.timeline( { paused: true, defaults: { ease: 'none', duration: 1 } })

            gsap.set(annualText, {color: '#0037ff', fontWeight: 700})

            tl.to(circle, {xPercent: 98})
            .to(monthlyText, {color: '#0037ff', fontWeight: 700}, '<')
            .to(annualText, {color: '#080736', fontWeight: 500}, '<')

            const mountlyRun = () =>
            {
                mounthlyTL.clear()
                mounthlyTL.to(price0, {scrambleText: {text: monthlyVal[0], chars: chars} })
                .to(price1, {scrambleText: {text: monthlyVal[1], chars: chars} }, '<')
                .to(price2, {scrambleText: {text: monthlyVal[2], chars: chars} }, '<')
            }

            const annualRun = () =>
            {
                annualTL.clear()
                annualTL.to(price0, {scrambleText: {text: annualVal[0], chars: chars} })
                .to(price1, {scrambleText: {text: annualVal[1], chars: chars} }, '<')
                .to(price2, {scrambleText: {text: annualVal[2], chars: chars} }, '<')
            }

            //  Double Click Function
            $(toggle).on('click', () => 
            {
                if(!toggle.hasClass('switched')) 
                { 
                    tl.restart()

                    mountlyRun()

                    mounthlyTL.restart()
                } else 
                { 
                    tl.timeScale(1.5).reverse()

                    annualRun()

                    annualTL.restart()
                }
                toggle.toggleClass('switched')
            })

            /**
             * Drop Down Fucntions
             */
            let dropdown = $('.pricing__dp'),
                dropdownTop = $('.pricing__dp--top').find('.p--14'),
                dropdownList = $('.pricing__dp--list'),
                dropdownItem = $('.pricing__dp--item'),
                dropdownArrow = $('.pricing__dp--arrow'),
                currencyText,
                dropdownTl = gsap.timeline({ paused: true, defaults: { duration: 0.3 }, onComplete: () => dropdown.addClass('open') })

            dropdownTl.from(dropdownList, {display: 'none', duration: 0})
                      .from(dropdownList, {opacity: 0, yPercent: 4}, '<')
                      .to(dropdownArrow, {rotate: 0}, '<')

            $('body').on('click', (event) => 
            {
                let target = $(event.target)
                if(target.closest(dropdown).length > 0 )
                {
                    dropdownTl.play()
                } else
                {
                    dropdownTl.reverse()
                }
            })

            $(dropdownItem).each(function(index)
            {
                let self = $(this)
                self.on('click', () => 
                {
                    currencyText = self.find('p').text()
                    monthlyVal = []
                    monthlyVal.push(...monthlyArray[index])   

                    annualVal = []
                    annualVal.push(...annualArray[index])   

                    gsap.to(dropdownTop, {scrambleText: {text: currencyText}})

                    if(toggle.hasClass('switched')) 
                    {
                        mountlyRun()
    
                        mounthlyTL.restart()
                    } else 
                    {
                        annualRun()
    
                        annualTL.restart()
                    }
                })
            })

        }
        window.addEventListener('load', () => init())
    }
}