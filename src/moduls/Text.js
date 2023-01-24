import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Text
{
    constructor() 
    {   
        let enter = 'top 80%'
        const init = () => 
        {
            const lineAnimation = () => 
            {
                let item = $('[text-line]')
                let parent = item.closest('section')
                if(!parent.hasClass('hero'))
                {
                    $(item).each(function()
                    {
                        let self = $(this)
                        let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.04}})
                        tl.from(self, {y: 20, opacity: 0})
        
                        ScrollTrigger.create({
                            trigger: self,
                            start: enter,
                            onEnter: () => tl.play()
                        })
                    })
                }
            }
            lineAnimation()
    
            const charAnimation = () => 
            {
                let item = $('[text-char]')
                let parent = item.closest('section')
                if(!parent.hasClass('hero'))
                {
                    $(item).each(function()
                    {
                        let self = $(this)
                        let tl = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3', stagger: 0.02}})
                        tl.from(self, {y: 20, opacity: 0})
        
                        ScrollTrigger.create({
                            trigger: self,
                            start: enter,
                            onEnter: () => tl.play()
                        })
                    })
                }
            }
            charAnimation()
        }
        
        init()
    }
}