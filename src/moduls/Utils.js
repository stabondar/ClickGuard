import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Utils
{
    constructor()
    {
        const init = () => 
        {
            gsap.set('main', { autoAlpha: 1 })
            setTimeout(() => {
                
                ScrollTrigger.refresh()
            }, 100);
        }
        init()
    }
}   