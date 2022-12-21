export default class Protection
{
    constructor()
    {
        const tabs = () =>
        {
            let item = $('.tabs__link'),
                tab = $('.tabs-item')
                
            $(item).each(function(index) 
            {
                let self = $(this),
                    currentImg = tab.eq(index).find('.tabs__item-bg')
                
                currentImg.clone().appendTo(self)
            })
        }
        tabs()
    }
}