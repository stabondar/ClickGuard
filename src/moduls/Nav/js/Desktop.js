import { gsap } from 'gsap'

export default class Desktop
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)'

        mm.add(isDesktop, () => 
        {
            const init = () =>
            {
                let parent = $('.nav__dp--parent'),
                    menuLink = parent.find('.nav__item'),
                    content = $('.dp__item').removeClass('hide'),
                    menuBG = $('.dp__list'),
                    dropdownWrap = $('.nav__dp--content'),
                    menuArrow = $('.dp__arrow--parent')

                gsap.defaults({ duration: 0.3, ease: 'power2' })

                function revealDropdown  (currentLink, currentContent) 
                {
                    dropdownWrap.css('display', 'flex')
                    showDropdown.restart()

                    gsap.set(menuArrow, { width: currentLink.outerWidth(), x: currentLink.offset().left})
                    gsap.set(menuBG, { width: currentContent.outerWidth(), height: currentContent.outerHeight() })
                    gsap.set(content, { opacity: 0 })
                    gsap.set(currentContent, { opacity: 1, x: '0em' })
                }

                function switchDropdown  (currentLink, previousContent, currentContent)
                {
                    gsap.to(menuArrow, { width: currentLink.outerWidth(), x: currentLink.offset().left })
                    gsap.to(menuBG, { width: currentContent.outerWidth(), height: currentContent.outerHeight() })
                    // invert moveDistance if needed
                    let moveDistance = 10
                    if (currentContent.index() < previousContent.index()) {
                    moveDistance = moveDistance * -1
                    }
                    gsap.fromTo( previousContent, { opacity: 1, x: '0em' }, { opacity: 0, x: moveDistance * -1 + 'em', duration: 0.3 })
                    gsap.fromTo( currentContent, { opacity: 0, x: moveDistance + 'em' }, { opacity: 1, x: '0em', duration: 0.3 })
                }
                
                // Open dropdown animation
                let showDropdown = gsap.timeline(
                { 
                    paused: true,
                    onReverseComplete: () => 
                    {
                        dropdownWrap.css('display', 'none')
                        menuLink.removeClass('active')
                    }
                })

                showDropdown.from(dropdownWrap, { opacity: 0, rotateX: -10, duration: 0.2 }).to(menuArrow, { opacity: 1, duration: 0.2 }, '<')
                
                // Link Hover In
                $(menuLink).on('mouseenter', function() 
                {
                    let self = $(this)
                    // get elements
                    let previousLink = menuLink.filter('.active').removeClass('active')
                    let currentLink = self.addClass('active')
                    let previousContent = content.filter('.active').removeClass('active')
                    let currentContent = content.eq(self.index()).addClass('active')
                    // play animations
                    if (previousLink.length === 0) {
                        revealDropdown(currentLink, currentContent)
                    } else if (previousLink.index() !== currentLink.index()) {
                        switchDropdown(currentLink, previousContent, currentContent)
                    }
                })

                
                // Menu Hover Out
                $('.nav__dp--parent').on('mouseleave', function () {
                    showDropdown.reverse()
                })
            }
            window.addEventListener('load', () => init())
        })
    }
}