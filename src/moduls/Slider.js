import '../styles/slider.css'

import Swiper from 'swiper'
import 'swiper/css'

export default class Slider 
{
    constructor()
    {
        let swiper = new Swiper(".swiper", {
            slidesPerView: "auto",
            keyboard: true,
            direction: "horizontal",
            spaceBetween: 24,
            speed: 800,
            touchEventsTarget: "container",
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
                spaceBetween: null
              }
            }
        })

        $('.slider__arrow').eq(1).on('click', () =>
        {
            swiper.slideNext()
        })

        $('.slider__arrow').eq(0).on('click', () =>
        {
            swiper.slidePrev()
        })
    }
}