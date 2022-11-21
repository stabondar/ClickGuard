import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class HomeFeatures
{
    constructor()
    {
        const init = () =>
        {
            let body = $('.features__body')
            let right = body.find('.features__right-column')
            let item = body.find('.feature__item')
            let img = right.find('.feature__img')
            let bgColor
            let bodyHeight = body.height()
            let deltaHeight = bodyHeight - window.innerHeight

            // Pin
            ScrollTrigger.create(
            {
                trigger: body, start: 'top 0%', end: `+=${deltaHeight}`, pin: right
            })



            $(item).each(function(index)
            {
                if(index === 0) {bgColor = '#B5F7DE'}
                if(index === 1) {bgColor = '#B5D9F7'}
                if(index === 2) {bgColor = '#9993E6'}
                if(index === 3) {bgColor = '#F8D1AF'}

                let self = $(this)
                let currentImg = img.eq(index)
                let tl = gsap.timeline(
                {
                    scrollTrigger: 
                    {
                        trigger: self, start: 'top 60%', end: 'bottom 60%', scrub: 1,
                        onEnter: () => 
                        {
                            img.removeClass('active')
                            currentImg.addClass('active')
                        },
                        onEnterBack: () => 
                        {
                            img.removeClass('active')
                            currentImg.addClass('active')
                        }
                    }
                })
                tl.to(right, {backgroundColor: bgColor, duration: 0.2})
            })
        }
        window.addEventListener('load', () => init())
    }
}