import { gsap } from 'gsap'

export default class Hover
{
    constructor()
    {
        let mm = gsap.matchMedia(),
        isDesktop = '(min-width: 991px)'

        mm.add(isDesktop, () => 
        {
            const init = () =>
            {
                $('.dp__products--btn').each(function()
                {
                    let self = $(this)
                    let tl = gsap.timeline(
                    {
                        paused: true, defaults: {duration: 0.3}
                    })
    
                    tl.to(self, {opacity: 1})
    
                    self.on('mouseenter', () => tl.restart())
                    self.on('mouseleave', () => tl.reverse()) 
                })
    
                $('.dp__solution--btn').each(function()
                {
                    let self = $(this)
                    let tl = gsap.timeline(
                    {
                        paused: true, defaults: {duration: 0.3}
                    })
    
                    tl.to(self, {opacity: 1})
    
                    self.on('mouseenter', () => tl.restart())
                    self.on('mouseleave', () => tl.reverse()) 
                })
            }
            window.addEventListener('load', () => init()) 
        })
    }
}