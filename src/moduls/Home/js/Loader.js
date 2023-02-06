import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

export default class Loader 
{
    constructor()
    {
        const init = () => 
        {
            let hero = $('.hero')
            let title = hero.find('h1')
            let descr = hero.find('.hero__descr').find('p')
            let btn = hero.find('.btn')
            let img = hero.find('.hero__img')
            let items = hero.find('.hero__logo--item')
            let tl = gsap.timeline(
            {
                defaults: {duration: 0.8, ease: 'power3', stagger: 0.02}, delay: 0.3
            })

            tl.from(title, {y: 20, opacity: 0})
            .from(descr, {y: 20, opacity: 0}, '<0.2')
            .fromTo(btn, {opacity: 0}, {opacity: 1}, '<0.4')
            .fromTo(img, {opacity: 0}, {opacity: 1}, '<0.2')
            .fromTo(items, {opacity: 0}, {opacity: 1, stagger: 0.1}, '<0.2')
        }

        init()
    }
}