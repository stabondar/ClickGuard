export default class Mobile 
{
    constructor()
    {
        // let point = $('.price-compare__item--point')
        // let point1 = $('.price-compare__item--point:nth-child(4n - 3)')
        let allTitle = $('.price-compare__top--item:nth-child(2), .price-compare__top--item:nth-child(3), .price-compare__top--item:nth-child(4)')
        let allPoints = $('.price-compare__item--point:nth-child(4n - 2), .price-compare__item--point:nth-child(4n - 1), .price-compare__item--point:nth-child(4n)')
        let title1 = $('.price-compare__top--item:nth-child(2)')
        let title2 = $('.price-compare__top--item:nth-child(3)')
        let title3 = $('.price-compare__top--item:nth-child(4)')
        let point1 = $('.price-compare__item--point:nth-child(4n - 2)')
        let point2 = $('.price-compare__item--point:nth-child(4n - 1)')
        let point3 = $('.price-compare__item--point:nth-child(4n)')

        let activeIndex = 1
        let arrowLeft = $('.price-compare--arrow').eq(0)
        let arrowRight = $('.price-compare--arrow').eq(1)

        title1.add(point1).addClass('active')

        const nextClick = () =>
        {
            if(activeIndex == 1)
            {
                $(allTitle).add(allPoints).removeClass('active')
                $(title2).add(point2).addClass('active')

                activeIndex = 2
            } else
            {
                if(activeIndex == 2)
                {
                    $(allTitle).add(allPoints).removeClass('active')
                    $(title3).add(point3).addClass('active')
    
                    activeIndex = 3
                } else
                {
                    if(activeIndex == 3)
                    {
                        $(allTitle).add(allPoints).removeClass('active')
                        $(title1).add(point1).addClass('active')

                        activeIndex = 1
                    }
                }
            }
            // activeIndex++
            console.log(activeIndex);
        }

        const prevClick = () =>
        {
            if(activeIndex == 1)
            {
                $(allTitle).add(allPoints).removeClass('active')
                $(title3).add(point3).addClass('active')

                activeIndex = 3
            } else
            {
                if(activeIndex == 2)
                {
                    $(allTitle).add(allPoints).removeClass('active')
                    $(title1).add(point1).addClass('active')

                    activeIndex = 1
                } else
                {
                    if(activeIndex == 3)
                    {
                        $(allTitle).add(allPoints).removeClass('active')
                        $(title2).add(point2).addClass('active')
        
                        activeIndex = 2
                    }
                }
            }
            console.log(activeIndex);
        }

        arrowRight.on('click', () => nextClick())
        arrowLeft.on('click', () => prevClick())
    }
}