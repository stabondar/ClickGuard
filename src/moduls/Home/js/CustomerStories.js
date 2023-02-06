import { gsap } from 'gsap'

export default class CustomerStories
{
    constructor()
    {
        const init = () =>
        {
            let infoWrapper = $('.stories__info--wrapper')
            let infoList = infoWrapper.find('.stories__info--list')
            let infoElem = infoWrapper.find('.stories__info')
            let btn = $('.stories__tab')
            let allBorder = btn.find('.stories__tab--border.is--active')
            
            gsap.set(infoElem, {display: 'none', opacity: 0})
            gsap.set($(infoElem).eq(0), {display: 'flex', opacity: 1})
            gsap.set($(allBorder).eq(0), {scaleX: 1})

            $(btn).each(function(index)
            {
                let self = $(this)
                let activeBorder = self.find('.stories__tab--border.is--active')
                let currentInfoElem = infoElem.eq(index)

                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(infoElem, {display: 'none', opacity: 0, duration: 0.3})
                .to(currentInfoElem, {display: 'flex', opacity: 1, duration: 0.3})
                .to(allBorder, {scaleX: 0, duration: 0.2}, 0)
                .to(activeBorder, {scaleX: 1, duration: 0.2}, '<')
                .to(btn, {pointerEvents: 'auto'}, 0)
                .to(self, {pointerEvents: 'none'}, 0)

                self.on('click', () => 
                {
                    tl.restart()
                })
            })
        }
        init()
    }
}