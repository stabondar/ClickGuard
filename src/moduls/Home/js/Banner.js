export default class Banner 
{
    constructor()
    {
        let banner = $('.footer-banner')
        let currentBanner = banner[Math.floor(Math.random()*banner.length)]
        
        $(currentBanner).addClass('open')
    }
}