import './podcast.css'
import { gsap } from 'gsap'

export default class Podcast
{
    constructor()
    {
        let mm = gsap.matchMedia();
        let isMobile = '(max-width: 767px)';

        mm.add(isMobile, () => {

        const side = () => {

        let item = $('.speakers');
        let tab = $('.podcast-template__left');
                
        $(item).each(function() {
          item.appendTo(tab);
        })
        }

        window.addEventListener('load', () => side())    
        })
    }
}
