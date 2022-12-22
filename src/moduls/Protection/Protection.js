import { gsap } from 'gsap'


export default class Protection
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isMobile = '(max-width: 991px)'

        mm.add(isMobile, () => 
        {
            const tabs = () =>
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
            tabs()
        })
    }
}