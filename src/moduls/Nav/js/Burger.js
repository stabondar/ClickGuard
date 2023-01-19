import { gsap } from 'gsap'
import Lottie from 'lottie-web';

export default class Burger
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isMobile = '(max-width: 991px)',
            isDesktop = '(min-width: 991px)'

        const noScroll = () => $('body').addClass('no-scroll')
        const addScroll = () => $('body').removeClass('no-scroll')

        let nav = $('.nav__body.is--mob'),
            trigger = nav.find('.nav__burger'),
            list = nav.find('.nav__list'),
            logo = nav.find('.nav__logo'),
            logoWhite = nav.find('.nav__logo').find('img').eq(0),
            logoBlack = nav.find('.nav__logo').find('.nav__logo--color'),
            dropContent = nav.find('.nav__dp--content'),
            back = nav.find('.nav__back'),
            navCTA = nav.find('.nav__mob-cta')

        let tl = gsap.timeline({ paused: true, defaults: { duration: 0.3, ease: 'power3' }, onStart: noScroll, onReverseComplete: addScroll }),
        sequence = { frame: 0 },
        burgerLottie = Lottie.loadAnimation(
        {
            container: document.querySelector('.nav__body.is--mob').querySelector('.nav__burger'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://uploads-ssl.webflow.com/63750a9b9f46b21855d02736/63a2017693a22bb123497f9a_Burger%20Menu.json'
        })

        
        mm.add(isDesktop, () => gsap.to(list, {display: 'flex', opacity: 1}))
        mm.add(isMobile, () => gsap.to(list, {display: 'none', opacity: 0}))
        
        burgerLottie.addEventListener('DOMLoaded', function () 
        {
            let path, tlDuration

            path = trigger.find('path')  
            tl.to(sequence, {frame: burgerLottie.totalFrames - 1, ease: 'none', onUpdate: () => burgerLottie.goToAndStop(sequence.frame, true), duration: 0.8 })
                .to(list, {display: 'block', opacity: 1}, '<')
                .to(path, {stroke: '#343741'}, '<')
                .to(logoWhite, {opacity: 0}, '<')
                .to(logoBlack, {opacity: 1}, '<')
                .from(navCTA, {opacity: 0}, '<')

            tlDuration = tl.duration()
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
        let itemLink = nav.find('.nav__dp--parent').find('.nav__item'),
            itemDrop = nav.find('.dp__item'),
            pricing = nav.find('.nav__list').find('.nav__dp--parent').siblings('.nav__item')

        mm.add(isMobile, () => 
        {

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
        })

    }
}