import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

let locoScroll
export default class SmoothScroll 
{
    constructor()
    {
        /**
         * Setup Loco And Gsap
         */
        if(window.innerWidth > 991) 
        {
            gsap.registerPlugin(ScrollTrigger)
            
            locoScroll = new LocomotiveScroll({
                el: document.querySelector('.main'),
                smooth: true,
                multiplier: 1.2,
                lerp: 0.23
            });
            locoScroll.on('scroll', ScrollTrigger.update);

            ScrollTrigger.scrollerProxy('.main', {
                scrollTop(value) {
                    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: document.querySelector('.main').style.transform ? 'transform' : 'fixed'
            });

            const wrapper = document.querySelector('.main')
            new ResizeObserver(() => locoScroll.update()).observe(wrapper)

            ScrollTrigger.defaults({
                scroller: '.main'
            })
            
            window.addEventListener('load', () => 
            {
                ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
                locoScroll.update()
                setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 100);
            })

            // let triggerUpdate = $(`.compare__item--top, .faq__item--top, 
            // .w-pagination-next, .text-review .btn, 
            // .posts__pagination--item, .posts__next, .posts__previous, 
            // .compare__dp--item`)

            // triggerUpdate.on('click', () => 
            // {
            //     setTimeout(() => {
            //         locoScroll.update()               
            //     }, 300);
            // })

            let halfSceen = - window.innerHeight / 4
            let off = { offset: halfSceen }

            const whatIsPin = () =>
            {
                let sections = gsap.utils.toArray('[anchor]')
                let item = $('.wic__left-item')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        locoScroll.scrollTo(currentSection, off)
                    })
                })
            }
            whatIsPin()

            const integrationPage = () =>
            {
                let sections = gsap.utils.toArray('.accordion__block')
                let item = $('.integration-accordion__point')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        locoScroll.scrollTo(currentSection, off)
                    })
                })
            }
            integrationPage()

            const compareInner = () =>
            {
                let sections = gsap.utils.toArray('.comp-details__card')
                let item = $('.comp-details__point')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        locoScroll.scrollTo(currentSection, off)
                    })
                })
            }
            compareInner()

            const features = () =>
            {
                let sections = gsap.utils.toArray('.freatures-cards__item')
                let item = $('.freatures-cards__point')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        locoScroll.scrollTo(currentSection, off)
                    })
                })
            }
            features()

            const blogTemplate = () =>
            {
                window.addEventListener('load', () => 
                {
                    setTimeout(() => {
                        let sections = gsap.utils.toArray('.rich-text h2')
                        if (sections.length < 1)
                        {
                            sections = gsap.utils.toArray('.rich-text h3')
                        }
                        let item = $('.blog-template__contents').find('.p--16')
                        $(item).each(function(i)
                        {
                            let self = $(this)
                            let currentSection = sections[i]
                            self.on('click', () => 
                            {
                                locoScroll.scrollTo(currentSection, off)
                            })
                        })
                    }, 100)
                })
            }
            blogTemplate()

            // Pricing Scroll to Compare 
            $('.pricing__see-all').each(function(i)
            {
                let self = $(this)
                let btn = self.find('.btn')
                const slider = $(".price-compare")[i]
                $(btn).on("click", function () {
                    locoScroll.scrollTo(slider, off)
                })
            })
        
            let windowWidth = window.innerWidth

            const checkWidth = () =>
            {
                let afterWidth = window.innerWidth
                if (windowWidth !== afterWidth)
                {
                    ScrollTrigger.refresh()
                    locoScroll.update() 
                }
                windowWidth = window.innerWidth
            }

            function debounce(func) {
                var timer;
                return function (event) {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(func, 300, event);
                };
                }
        
            window.addEventListener("resize", debounce(function (e) {checkWidth()}))
        }

        const init = () => 
        {
            /**
             * GSAP no blick
             */
            gsap.set('main', { autoAlpha: 1 })
        
        }
        window.addEventListener('load', () => init(), locoScroll.update())
    }
}
