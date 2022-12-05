import './blog.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper, { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger)

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
        }
        window.addEventListener('load', () => init())
    }
}