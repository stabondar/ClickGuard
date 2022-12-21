import { gsap } from 'gsap'

export default class Tabs 
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isMobile = '(max-width: 991px)'

        mm.add(isMobile, () => 
        {
            const automatically = () =>
            {
                let arrowLeft = $('.automatically__tabs--arrow').eq(0),
                    arrowRight = $('.automatically__tabs--arrow').eq(1),
                    activeLink = $('.automatically__tabs-link.w--current'),
                    link = $('.automatically__tabs-link'),
                    length = link.length,
                    activeIndex = activeLink.index()

                arrowRight.on('click', () =>
                {
                    if(activeIndex != length - 1)
                    {
                        activeLink.next().click()
                    } else 
                    {
                        link.first().click()
                    }
                    activeLink = $('.automatically__tabs-link.w--current')
                    activeIndex = activeLink.index()
                })

                arrowLeft.on('click', () =>
                {
                    if(activeIndex != 0)
                    {
                        activeLink.prev().click()
                    } else
                    {
                        link.last().click()
                    }
                    activeLink = $('.automatically__tabs-link.w--current')
                    activeIndex = activeLink.index()
                })

            }

            const why = () =>
            {
                let item = $('.tabs__link'),
                    tab = $('.tabs-item')
                    
                $(item).each(function(index) 
                {
                    let self = $(this),
                        currentImg = tab.eq(index).find('.tabs__item-bg')
                    
                    currentImg.clone().appendTo(self)
                })
            }

            window.addEventListener('load', () => automatically(), why())    
        })
    }
}