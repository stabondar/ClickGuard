import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default class Anchors 
{
    constructor()
    {
        let off = window.innerHeight / 4
        const whatIsPin = () =>
            {
                let sections = gsap.utils.toArray('[anchor]')
                let item = $('.wic__left-item')
                let rightNav = $('.wic__text-links').find('a')

                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
                    })
                })

                $(rightNav).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
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
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
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
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
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
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
                    })
                })
            }
            features()

            const legals = () =>
            {
                let sections = gsap.utils.toArray('.legal__item')
                let item = $('.legal__links').find('a')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i]
                    self.on('click', () => 
                    {
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
                    })
                })
            }
            legals()

            const pressKit = () =>
            {
                let sections = gsap.utils.toArray('.legal__item')
                let item = $('[data-page="press"]').find('.legal__left-item')
                $(item).each(function(i)
                {
                    let self = $(this)
                    let currentSection = sections[i + 1]
                    self.on('click', () => 
                    {
                        gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off * 1.5} })
                    })
                })
            }
            pressKit()

            const blogTemplate = () =>
            {
                window.addEventListener('load', () => 
                {
                    setTimeout(() => {
                        let sections = gsap.utils.toArray('.rich-text h1')
                        if (sections.length < 1)
                        {
                            sections = gsap.utils.toArray('.rich-text h2')
                            if (sections.length < 1)
                            {
                                sections = gsap.utils.toArray('.rich-text h3')
                            }
                        }
                        let item = $('.blog-template__contents').find('.p--16')
                        $(item).each(function(i)
                        {
                            let self = $(this)
                            let currentSection = sections[i]
                            self.on('click', () => 
                            {
                                gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
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
                    gsap.to(window, { duration: 1, scrollTo: {y: slider, offsetY: off} })
                })
            })

            // const press = () =>
            // {
            //     let sections = gsap.utils.toArray('[anchor]')
            //     let item = $('.legal__left-item.is--press')
            //     $(item).each(function(i)
            //     {
            //         let self = $(this)
            //         let currentSection = sections[i]
            //         self.on('click', () => 
            //         {
            //             gsap.to(window, { duration: 1, scrollTo: {y: currentSection, offsetY: off} })
            //         })
            //     })
            // }
            // press()
    }
}