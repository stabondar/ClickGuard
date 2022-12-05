import './real-stiries.css'
import { gsap } from 'gsap'

export default class RealStories 
{
    constructor()
    {   
        const init = () =>
        {
            const viewMore = () =>
            {
                let section = $('.text-review')
                let btn = section.find('.btn')
                let grid = section.find('.text-review__grid')
                let leftColumn = section.find('.text-review__wrapper').eq(0)
                let rightColumn = section.find('.text-review__wrapper').eq(1)
                let leftItem = leftColumn.find('.text-review__card')
                let rightItem = rightColumn.find('.text-review__card')
                let activeLeftItem = leftColumn.find('.text-review__card:nth-child(1), .text-review__card:nth-child(2), .text-review__card:nth-child(3)')
                let activeRightItem = rightColumn.find('.text-review__card:nth-child(1), .text-review__card:nth-child(2), .text-review__card:nth-child(3)')

                gsap.set([activeLeftItem, activeRightItem], {display: 'flex', opacity: 1})   

                let tl = gsap.timeline({paused: true})

                tl.to([leftItem, rightItem], {display: 'flex', opacity: 1})
                .to(btn, {display: 'none', duration: 0}, '<')

                btn.on('click',() => tl.play())
            }
            viewMore()
        }
        window.addEventListener('load', () => init())
    }
}