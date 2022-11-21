import { gsap } from 'gsap'

export default class Loader 
{
    constructor()
    {
        const init = () => 
        {
            let loader = $('.loader')

            // const onStart = () => { loader.css('display', 'block') }
            const onComplete = () => { loader.css('display', 'none') }

            let tlIn = gsap.timeline({onComplete: onComplete})
            tlIn.to(loader, { opacity: 0, duration: 0.4 })

            const navLoader = () =>
            {
                let tlNav = gsap.timeline(
                {
                    defaults: {duration: 0.8, ease: 'power3', stagger: 0.1}, delay: 0.3
                })
                let logo = $('.nav__logo')
                let menu = $('.nav__item')
                let login = $('.nav__login')
                let btn = $('.nav').find('.btn')

                tlNav.from([logo, menu, login, btn], {opacity: 0})
            }
            navLoader()
        }

        window.addEventListener('load', () => init())
    }
}