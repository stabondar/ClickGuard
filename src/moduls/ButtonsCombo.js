export default class ButtonsCombo
{
    constructor()
    {
        let slug = location.pathname.split('/').slice(1)

        let buttons = $('.main').find('.btn')
        $(buttons).each(function(index)
        {
            let self = $(this)

            if(slug == '')
            {
                self.addClass(`home--${index + 1}`)
            } else
            {
                self.addClass(`${slug}--${index + 1}`)
            }
        })

        let footerBanner = $('.footer-banners')
        let footerBtn = footerBanner.find('.btn')

        if(slug == '')
        {
            footerBtn.addClass(`home--banner-btn`)
        } else
        {
            footerBtn.addClass(`${slug}--banner-btn`)
        }
    }
}