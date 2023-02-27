export default class ContactUs
{
    constructor()
    {
        window.addEventListener('load', () => 
        {
            setTimeout(() => {
                let connect = $('.intercom-lightweight-app-launcher-icon.intercom-lightweight-app-launcher-icon-open')
                let trigger = $('.connect__card').add('.hero__btn')
                trigger.on('click', () => 
                {
                    connect.click()
                })
            }, 2000);
        })
    }
}