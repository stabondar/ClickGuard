import './whatis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class WhatIs 
{
    constructor()
    {   
        const init = () =>
        {
            let navHeight = $('.nav').height()
            let trigger = $('.wic__body')
            let pinElem = $('.wic__left')
            let sections = gsap.utils.toArray('[anchor]')
            let navItems = $('.wic__left-item')

            ScrollTrigger.create(
            {
                trigger: trigger, start: `top ${navHeight + 50}`, end: 'bottom bottom', pin: pinElem
            })

            $(sections).each(function(i)
            {
                let self = $(this)
                let currentNavItem = navItems.eq(i)

                ScrollTrigger.create(
                {
                    trigger: self, start: 'top 60%', end: 'bottom 60%',
                    onEnter: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    },
                    onEnterBack: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    }
                })
            })
        }
        window.addEventListener('load', () => init())
    }
}