import { gsap } from 'gsap'
import Lottie from 'lottie-web';

export default class Burger
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isMobile = '(max-width: 991px)'

        mm.add(isMobile, () => 
        {
            const init = () => 
            {
                const noScroll = () => $('body').addClass('no-scroll')
                const addScroll = () => $('body').removeClass('no-scroll')

                let trigger = $('.nav__burger'),
                    list = $('.nav__list'),
                    logo = $('.nav__logo'),
                    logoWhite = $('.nav__logo').find('img').eq(0),
                    logoBlack = $('.nav__logo').find('.nav__logo--color'),
                    dropContent = $('.nav__dp--content'),
                    back = $('.nav__back'),
                    navCTA = $('.nav__mob-cta'),

                    tl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: 'power3' }, onStart: noScroll, onReverseComplete: addScroll }),
                    sequence = { frame: 0 },
                    burgerLottie = Lottie.loadAnimation(
                    {
                        container: document.querySelector('.nav__burger'),
                        renderer: 'svg',
                        loop: false,
                        autoplay: false,
                        path: 'https://uploads-ssl.webflow.com/63750a9b9f46b21855d02736/63a2017693a22bb123497f9a_Burger%20Menu.json'
                    })
    
                //  Get a path from Lottie
                let path,
                    tlDuration
                setTimeout(() => {
                    path = trigger.find('path')
                }, 1000);
        
                burgerLottie.addEventListener('DOMLoaded', function () 
                {
                    setTimeout(() => {    
                        tl.to(sequence, {frame: burgerLottie.totalFrames - 1, ease: 'none', onUpdate: () => burgerLottie.goToAndStop(sequence.frame, true), duration: 0.8 })
                          .fromTo(list,  {display: 'none', opacity: 0} , {display: 'block', opacity: 1}, '<')
                          .to(path, {stroke: '#343741'}, '<')
                          .to(logoWhite, {opacity: 0}, '<')
                          .to(logoBlack, {opacity: 1}, '<')
                          .from(navCTA, {opacity: 0}, '<')

                        tlDuration = tl.duration()
                    }, 1000);
                })

                trigger.on('click', () => 
                {
                    trigger.toggleClass('open')
                    if(trigger.hasClass('open')) 
                    {
                        tl.restart()
                    } else
                    {
                        tl.timeScale(1.5).reverse()
                        back.click()
                    }
                })

                /**
                 * Animation for each Link
                 */
                let itemLink = $('.nav__dp--parent').find('.nav__item'),
                    itemDrop = $('.dp__item'),
                    pricing = $('.nav__list').find('.nav__dp--parent').siblings('.nav__item')

                $(itemLink).each(function()
                {
                    let self = $(this),
                        index = self.index(), 
                        currentItemDrop = itemDrop.eq(index)                    
                    
                    const removeHide = () => {currentItemDrop.removeClass('hide'), dropContent.addClass('open')}
                    const addHide = () => {currentItemDrop.addClass('hide'), dropContent.removeClass('open')}

                    let itemTl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: 'power3' } })
                    
                    itemTl.to([itemLink, pricing], {xPercent: -20, opacity: 0, pointerEvents: 'none'})
                          .fromTo(currentItemDrop, {xPercent: 20, opacity: 0, display: 'none'}, 
                                                   {display: 'block', xPercent: 0, opacity: 1, onStart: removeHide, onReverseComplete: addHide, pointerEvents: 'auto'}, '<')
                          .to(logo, {opacity: 0, display: 'none'}, '<')
                          .to(back, {opacity: 1, pointerEvents: 'auto'}, '<')
                          .to(navCTA, {opacity: 0, pointerEvents: 'none', xPercent: -20}, '<')

                    self.on('click', () => itemTl.restart())
                    back.on('click', () => itemTl.reverse())
                })
            }
            window.addEventListener('load', () => init())
        })
    }
}