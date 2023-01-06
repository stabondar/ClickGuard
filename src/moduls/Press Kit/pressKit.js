import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class pressKit 
{
    constructor()
    {   
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)',
            isMobile = '(max-width: 991px)'

        const init = () =>
        {
            let navHeight = $('.nav').height()
            let trigger = $('.legal__body')
            let pinElem = $('.legal__right')
            let sections = gsap.utils.toArray('[anchor]')
            let navItems = $('.legal__left-item.is--press')

            ScrollTrigger.create(
            {
                trigger: trigger, start: `top ${navHeight + 50}`, end: 'bottom bottom', pin: pinElem
            })

            mm.add(isDesktop, () => 
            {
                $(sections).each(function(i)
                {
                    let self = $(this)
                    let currentNavItem = navItems.eq(i)
    
                    ScrollTrigger.create(
                    {
                        trigger: self, start: 'top 25%', end: 'bottom 25%',
                        onEnter: () => 
                        {
                            navItems.removeClass('active')
                            currentNavItem.addClass('active')
                        },
                        onEnterBack: () => 
                        {
                            navItems.removeClass('active')
                            currentNavItem.addClass('active')
                        }
                    })
                })
            })
        }
        window.addEventListener('load', () => init())
    }
}