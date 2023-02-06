import './compare.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'


gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin)

export default class Compare 
{
    constructor()
    {   
        const init = () =>
        {
            const dropDownOpen = () =>
            {
                let dropParent = $('.compare__top--dp')
                let trigger = dropParent.find('.compare__dp--top')
                let dropdown = dropParent.find('.compare__dp--bot')
                let item = dropdown.find('.compare__dp--item')
                let arrow = trigger.find('.compare__dp--arrow')


                let tl = gsap.timeline(
                {
                    paused: true, defaults: { duration: 0.4, ease: 'power2', stagger: 0.08 }
                })

                tl.to(dropdown, {display: 'block', duration: 0})
                .from(dropdown, {opacity: 0}, '<')
                .to(arrow, {rotate: 180}, '<')
                .from(item, {yPercent: 10, opacity: 0}, '<0.1')

                trigger.on('click', () => tl.play())
                item.on('click', () => tl.reverse())
                dropParent.on('mouseleave', () => tl.reverse())
                
            }
            dropDownOpen()

            const dropDownItemClick = () =>
            {
                let item = $('.compare__dp--item')
                let descr = $('.compare__descr').find('p')
                let dropTopText = $('.compare__dp--top-name').find('h5')
                let contentSections = $('.card-block__compare').find('.card-block__body.is--less-gap')
                let list = $('.compare__list')

                descr.addClass('hide')
                descr.eq(0).removeClass('hide')

                $(item).each(function(i)
                {
                    let self = $(this)
                    let selfText = self.find('h5').text()

                    self.on('click', () => 
                    {
                        gsap.to(dropTopText, {scrambleText: {text: selfText}})
                        descr.addClass('hide')
                        descr.eq(i).removeClass('hide')
                        contentSections.addClass('hide')
                        contentSections.eq(i).removeClass('hide')
                        list.addClass('hide')
                        list.eq(i).removeClass('hide')
                    })
                })
            }
            dropDownItemClick()

            const tooltip = () => 
            {
                const elem = $('.compare__tooltip')
                $(elem).each(function()
                {
                    let self = $(this),
                        content = self.find('.compare__tooltip--content'),
                        tl = gsap.timeline({paused: true})

                    tl.fromTo(content, { display: 'none' }, {display: 'block', duration: 0})
                    .from(content, {yPercent: 10, opacity: 0})

                    self.on('mouseenter', () => tl.play())
                    self.on('mouseleave', () => tl.reverse())
                })
            }
            tooltip()
        }
        init()
    }
}