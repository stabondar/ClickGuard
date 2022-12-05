import './blog-template.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class BlogTemplate 
{
    constructor()
    {   
        const init = () =>
        {
            const rightSide = () =>
            {
                let title = $('.rich-text').find('h2')
                let textParent = $('.blog-template__contents--list')
                $(title).each(function()
                {
                    let self = $(this)
                    let selfText = self.text()
                    textParent.append(`<p class='p--16 weight--700'>${selfText}</p>`)
                })
            }
            rightSide()

            const pinScroll = () =>
            {
                let trigger = $('.blog-template__content')
                let elem = $('.blog-template__contents')
                let navHeight = $('.nav').height()


                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight + 80}`, end: 'bottom bottom', pin: elem
                })
            }
            pinScroll()
        }
        window.addEventListener('load', () => init())
    }
}