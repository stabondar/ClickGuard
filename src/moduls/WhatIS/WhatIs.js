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
            let sections = gsap.utils.toArray('[anchor]')
            let navItems = $('.wic__left-item')
            let rightNav = $('.wic__text-links').find('a')

            $(sections).each(function(i)
            {
                let self = $(this)
                let currentNavItem = navItems.eq(i)

                ScrollTrigger.create(
                {
                    trigger: self, start: 'top 40%', end: 'bottom 25%',
                    onEnter: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    },
                    onEnterBack: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    },
                    onLeave: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    },
                    onLeaveBack: () => 
                    {
                        navItems.removeClass('active')
                        currentNavItem.addClass('active')
                    }
                })
            })
        }
        init()
    }
}