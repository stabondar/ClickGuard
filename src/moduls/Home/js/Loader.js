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
            let titleSplit = new SplitText(title, {type: 'words, lines'})
            let descr = hero.find('.hero__descr').find('p')
            let descrSplit = new SplitText(descr, {type: 'lines'})
            let btn = hero.find('.btn')
            let img = hero.find('.hero__img')
            let items = hero.find('.hero__logo--item')
            let tl = gsap.timeline(
            {
                defaults: {duration: 0.8, ease: 'power3', stagger: 0.02}, delay: 0.3
            })

            gsap.set(titleSplit.lines, {overflow: 'hidden'})

            tl.from(titleSplit.words, {yPercent: 100, opacity: 0})
            .from(descrSplit.lines, {yPercent: 100, opacity: 0}, '<0.2')
            .from(btn, {opacity: 0}, '<0.4')
            .from(img, {opacity: 0}, '<0.2')
            .from(items, {opacity: 0, stagger: 0.1}, '<0.2')
        }

        window.addEventListener('load', () => init())
    }
}