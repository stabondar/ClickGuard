import { gsap } from 'gsap'

export default class Loader 
{
    constructor()
    {
        const init = () => 
        {
            let loader = $('.loader')
            let trigger = $(`.nav__logo, .dp__products--btn, .dp__solution--btn, a.nav__item`)

            const onComplete = () => { loader.css('display', 'none') }

            let tlIn = gsap.timeline({onComplete: onComplete})
            tlIn.to(loader, { opacity: 0, duration: 0.4 })

            let tlOut = gsap.timeline({paused: true, defaults: {duration: 0.8, ease: 'power3'}})

            tlOut.to(loader, {display: 'block', duration: 0})
            .to(loader, {opacity: 1, duration: 0.4})

            let duration = tlOut.duration() * 1000 + 50

            $(trigger).on('click', function(e)
            {
                tlOut.restart()
                e.preventDefault();
                let goTo = this.getAttribute("href");

                setTimeout(function () {
                  window.location = goTo;
                }, duration);
            })


            // const navLoader = () =>
            // {
            //     let tlNav = gsap.timeline(
            //     {
            //         defaults: {duration: 0.8, ease: 'power3', stagger: 0.1}, delay: 0.3
            //     })
            //     let logo = $('.nav__logo')
            //     let menu = $('.nav__item')
            //     let login = $('.nav__login')
            //     let btn = $('.nav').find('.btn')

            //     tlNav.from([logo, menu, login, btn], {opacity: 0})
            // }
            // navLoader()
        }

        window.addEventListener('load', () => init())
    }
}