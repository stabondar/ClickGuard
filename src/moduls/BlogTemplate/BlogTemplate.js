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
                let text = $('.blog-template__contents--list').find('p')
                let title = $('.rich-text').find('h2')
                let navHeight = $('.nav').height()

                $(text).each(function(i)
                {
                    let self = $(this)
                    let currentTitle = title.eq(i)

                    ScrollTrigger.create(
                    {
                        trigger: currentTitle, start: 'top 30%', end: 'bottom 30%',
                        onEnter: () => 
                        {
                            text.removeClass('is--active')
                            self.addClass('is--active')
                        },
                        onEnterBack: () => 
                        {
                            text.removeClass('is--active')
                            self.addClass('is--active')
                        }
                    })
                })


                ScrollTrigger.create(
                {
                    trigger: trigger, start: `top ${navHeight + 80}`, end: 'bottom bottom', pin: elem
                })
            }
            pinScroll()

            const postHover = () =>
            {
                let item = $('.posts__item')
                $(item).each(function()
                {
                    let self = $(this)
                    const postThumbnail = self.find('.posts__thumbnail img');
                    const firstArrow = self.find('.posts__arrow .is--1');
                    const secondArrow = self.find('.posts__arrow .is--2');
                    let tl = gsap.timeline(
                    {
                        paused: true, defaults: { duration: 0.6, ease: 'power1' }
                    })

                    tl.to(postThumbnail, {scale: 1.2})
                    .to(firstArrow, {xPercent:100, yPercent:-100}, '<')
                    .from(secondArrow, {xPercent:-100, yPercent:100}, '<')

                    self.on('mouseenter', () => tl.restart())
                    self.on('mouseleave', () => tl.timeScale(1.5).reverse())
                })
            }
            postHover()
        }
        window.addEventListener('load', () => init())
    }
}