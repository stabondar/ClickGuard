import './integration.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Integration 
{
    constructor()
    {   
        const init = () =>
        {
            const leftPin = () =>
            {
                let navHeight = $('.nav').height()
                let pinItem = $('.integration-accordion__left')
                let trigger = $('.integration-accordion__info')
                let pinHeight = pinItem.height()

                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight}`, end: 'bottom bottom', pin: pinItem, scrub: true, pinType: 'transform'
                })
            }
            leftPin()

            const accordion = () =>
            {
                // Pricing Compare
                $('.accordion__item--top').on('click', function () {
                    // If other item have open class => click itself
                    if (!$(this).hasClass('open')) {
                        $('.accordion__item--top.open').click()    
                    }
                    // Get bot item
                    let sibling = $(this).siblings('.accordion__item--bot')
                    let animationDuration = 300
                
                    // If this have open other items height 0
                    if ($(this).hasClass('open')) {
                        sibling.animate({ height: '0px' }, animationDuration)
                        $('.faq__item--icon').removeClass('open')
                    } else {
                        sibling.css('height', 'auto')
                        let autoHeight = sibling.height()
                        sibling.css('height', '0px')
                        $(this).parent().addClass('open')
                        $(this).find('.faq__item--icon').addClass('open')
                        sibling.animate({ height: autoHeight }, animationDuration, function () {
                            sibling.css('height', 'auto')
                        })
                    }
                    $(this).toggleClass('open')
                })
            }
            accordion()



            const activeLink = () =>
            {
                {
                let body = $('.integration-accordion__body');
                let left = body.find('.integration-accordion__left');
                let item = left.find('.integration-accordion__point');
                let bodyHeight = body.height();

            $(item).each(function(index)
            {

                let self = $(this)
                let currentTab = item.eq(index)
                let tl = gsap.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: self, start: 'top 60%', end: 'bottom 60%', toggleActions: 'restart none restart none',
                        onEnter: () => 
                        {
                            item.removeClass('active')
                            currentTab.addClass('active')
                        },
                        onEnterBack: () => 
                        {
                            item.removeClass('active')
                            currentTab.addClass('active')
                        }
                    }
                })
            })
        }

        }
        activeLink ()
        
        window.addEventListener('load', () => init())
    }
}


