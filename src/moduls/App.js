import { gsap } from 'gsap'

export default class App 
{
    constructor()
    {
        const init = () =>
        {
            gsap.set('main', { autoAlpha: 1 })
        }
        window.addEventListener('load', () => init())
    }
}