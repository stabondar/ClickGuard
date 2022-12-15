import './blog.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import Swiper, { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

export default class Blog 
{
    constructor()
    {   
        const init = () =>
        {
            $('.hero__slider--parent').each(function()
            {
                let slider = $(this).find('.hero__slider')[0]
                const swiper = new Swiper(slider, {
                    modules: [Pagination],
                    slidesPerView: 'auto',
                    keyboard: true,
                    // direction: "horizontal",
                    spaceBetween: 24,
                    speed: 800,
                    grabCursor: true,
                    breakpoints: {
                      320: {
                        centeredSlides: true,
                        spaceBetween: 40
                      },
                      480: {
                        centeredSlides: true,
                        spaceBetween: 60
                      },
                      991: {
                        centeredSlides: false,
                        spaceBetween: 24
                      }
                    },
                    pagination: {
                        el: $('.hero__slider--bullets')[0],
                        clickable: true,
                        bulletClass: 'hero__slider--bullet',
                        bulletActiveClass: 'is-active',
                        bulletElement: 'button'
                    }
                })

                setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 200);
            })


            // const postHover = () =>
            // {
            //     let item = $('.posts__item')
            //     $(item).each(function()
            //     {
            //         let self = $(this)
            //         const postThumbnail = self.find('.posts__thumbnail img');
            //         const firstArrow = self.find('.posts__arrow .is--1');
            //         const secondArrow = self.find('.posts__arrow .is--2');
            //         let tl = gsap.timeline(
            //         {
            //             paused: true, defaults: { duration: 0.6, ease: 'power1' }
            //         })

            //         tl.to(postThumbnail, {scale: 1.2})
            //         .to(firstArrow, {xPercent:100, yPercent:-100}, '<')
            //         .from(secondArrow, {xPercent:-100, yPercent:100}, '<')

            //         self.on('mouseenter', () => tl.restart())
            //         self.on('mouseleave', () => tl.timeScale(1.5).reverse())
            //     })
            // }
            // postHover()

            const changeTitle = () =>
            {
                const item = $('.blog-tags__item')
                const title = $('[change-title]')
                $(item).each(function()
                {
                    let self = $(this)
                    let text = self.find('.p--18').text()

                    self.on('click', () => 
                    {
                        gsap.to(title, {scrambleText: {text: text}, duration: 1 })
                    })
                })

                $('[fs-cmsfilter-element="reset"]').each(function()
                {
                    let self = $(this)

                    self.on('click', () => 
                    {
                        gsap.to(title, {scrambleText: {text: 'All blog posts'}, duration: 1 })
                    })
                })                
            }
            changeTitle()
        }
        window.addEventListener('load', () => init())

        const addButton = () => 
        {
            const list = $('.blog-tags__list')
            list.append(`<div class="blog-tags__item w-dyn-item" fs-cmsfilter-element="reset">
                <label class="blog-tags__radio--parent w-radio">
                    <input type="radio" data-name="Radio" id="radio-2" name="radio" value="Radio" class="w-form-formradioinput blog-tags__radio--icon w-radio-input">
                    <span class="p--18 weight--700 w-form-label" for="radio">Reset</span>
                </label>
            </div>`)

            const btn = $('[fs-cmsfilter-element="reset"]')
            btn.on('click', () => $('.blog-tags__radio--parent').removeClass('is-active'))
        }
        addButton()
    }
}