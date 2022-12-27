export default class PricingAccordion 
{
    constructor()
    {
        const init = () =>
        {
            // Pricing Compare
            $('.price-compare__item--top').on('click', function () {
                // If other item have open class => click itself
                if (!$(this).hasClass('open')) {
                    // $('.price-compare__item--top.open').click()    
                }
                // Get bot item
                let sibling = $(this).siblings('.price-compare__item--bot')
                let animationDuration = 300
            
                // If this have open other items height 0
                if ($(this).hasClass('open')) {
                    sibling.animate({ height: '0px' }, animationDuration)
                    // $('.price-compare__item--icon').removeClass('open')
                } else {
                    sibling.css('height', 'auto')
                    let autoHeight = sibling.height()
                    sibling.css('height', '0px')
                    $(this).parent().addClass('open')
                    $(this).find('.price-compare__item--icon').addClass('open')
                    sibling.animate({ height: autoHeight }, animationDuration, function () {
                        sibling.css('height', 'auto')
                    })
                }
                $(this).toggleClass('open')
            })
        }
        window.addEventListener('load', () => init())
    }
}