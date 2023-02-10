import './career.css'
import Jobs from './Jobs'

export default class Career 
{
    constructor()
    {
        const jobs = new Jobs()

        let item = $('.process__item')
        item.eq(0).addClass('active')

        $(item).each(function()
        {
            let self = $(this)
            self.on('click', () => 
            {
                item.removeClass('active')
                self.addClass('active')
            })
        })
    }
}  