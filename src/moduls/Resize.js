export default class Resize 
{
    constructor()
    {
        let initWidth = window.innerWidth
        let currentWidth = window.innerWidth

        const checkWidth = () =>
        {
            currentWidth = window.innerWidth
            if(initWidth > 991)
            {
                if(currentWidth < 991)
                {
                    document.location.reload()
                }
            }

            if(initWidth < 991)
            {
                if(currentWidth > 991)
                {
                    document.location.reload()
                }
            }
        }

        function debounce(func) {
            var timer
            return function (event) {
                if (timer) clearTimeout(timer)
                timer = setTimeout(func, 300, event)
            }
        }

        window.addEventListener('resize', debounce(function (e) {checkWidth()}))
    }
}