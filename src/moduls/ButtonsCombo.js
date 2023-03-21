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

        let loginSubmit = $('.form__submit--parent.is--login')
        let loginBtn = loginSubmit.find('.btn')

        loginBtn.addClass('create-acc--btn')

        $('.nav__right').each(function()
        {
            let self = $(this)
            let signin = self.find('[btn="signin"]')
            let login = self.find('[btn="login"]')

            signin.addClass('nav-get-protectet')
            login.addClass('nav-new-free-demo')
        })

        $('.nav__mob-cta').each(function()
        {
            let self = $(this)
            let signin = self.find('[btn="signin"]')
            let login = self.find('[btn="login"]')

            signin.addClass('nav-get-protectet')
            login.addClass('nav-new-free-demo')
        })
    }
}