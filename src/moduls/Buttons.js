import { gsap } from 'gsap'


export default class Buttons 
{
    constructor()
    {
        const init = () =>
        {

            $('.btn').each(function()
            {   
                let size = '1.39em'
                let self = $(this)
                let arrow = self.find('.btn__arrow')
                let border = self.find('.btn__border')
                let text = self.find('p')

                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                if(!self.hasClass('text')) 
                {
                    tl.to(border, { top: '0em', right: '0em', width: size, height: size })
                }

                if(self.hasClass('text')) 
                {
                    tl.fromTo(arrow, {xPercent: -50, opacity: 0}, {xPercent: 0, opacity: 1}, '<')
                }

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse())
            })

            // Footer Link 
            $('.footer__links-link').each(function()
            {
                let self = $(this)
                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(self, {opacity: 0.3})

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse()) 
            })

            // Footer Social Link 
            $('.footer__socials-item').each(function()
            {
                let self = $(this)
                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(self, {opacity: 0.3})

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse()) 
            })

            // Pricing Link 
            $('a.nav__item').each(function()
            {
                let self = $(this)
                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(self, {opacity: 0.3})

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse()) 
            })

            // Footer Terms
            $('.footer__terms-item').each(function()
            {
                let self = $(this)
                let text = self.find('div')
                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(text, {opacity: 0.3})

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse()) 
            })

            // Nav Login 
            $('.nav__login').each(function()
            {
                let self = $(this)
                let path = self.find('path')
                let tl = gsap.timeline(
                {
                    paused: true, defaults: {duration: 0.3}
                })

                tl.to(self, {color: '#3A83F7'})
                .to(path, {fill: '#3A83F7'}, '<')

                self.on('mouseenter', () => tl.restart())
                self.on('mouseleave', () => tl.reverse()) 
            })
        }

        window.addEventListener('load', () => init())
    }
}