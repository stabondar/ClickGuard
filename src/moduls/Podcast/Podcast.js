import './podcast.css'

export default class Podcast
{
    constructor()
    {
        let mm = gsap.matchMedia();
        let isMobile = '(max-width: 767px)';

            mm.add(isMobile, () => 
            {
                const side = () =>
                {
                    let item = $('.podcast-template__left');
                    let block = $('.speakers');

                    $(item).append(block);
                }

        window.addEventListener('load', () => side())    
    })
    }
}