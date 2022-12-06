import { gsap } from 'gsap'

export default class IntegrationLogos
{
    constructor()
    {
        const init = () =>
        {
            let parent = $('.integrations__logos--parent')
            $(parent).each(function(i)
            {
                let move = -100
                if(i === 1) { move = 100 }

                let self = $(this)
                let line = self.find('.integrations__logos-line')
                let tl = gsap.timeline(
                {
                    defaults: { duration: 25, ease: 'none', }, repeat: -1
                })

                tl.to(line, {xPercent: move})
            })
        }
        window.addEventListener('load', () => init())
    }
}