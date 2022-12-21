import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class FAQ
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)',
            isMobile = '(max-width: 991px)'

        const init = () =>
        {
            // Faq 
            $('.faq__item--top').on('click', function () {
                // If other item have open class => click itself
                if (!$(this).hasClass('open')) {
                    $('.faq__item--top.open').click()    
                }
                // Get bot item
                let sibling = $(this).siblings('.faq__item--bot')
                let animationDuration = 300
            
                // If this have open other items height 0
                if ($(this).hasClass('open')) {
                    sibling.animate({ height: '0px' }, animationDuration)
                    $('.faq__icon--line.is--ab').removeClass('open')
                } else {
                    sibling.css('height', 'auto')
                    let autoHeight = sibling.height()
                    sibling.css('height', '0px')
                    $(this).parent().addClass('open')
                    $(this).find('.faq__icon--line.is--ab').addClass('open')
                    sibling.animate({ height: autoHeight }, animationDuration, function () {
                        sibling.css('height', 'auto')
                    })
                }
                $(this).toggleClass('open')
            })

            let navHeight = $('.nav').height()

            mm.add(isDesktop, () => 
            {
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
            })
        }
        window.addEventListener('load', () => init())
    }
}