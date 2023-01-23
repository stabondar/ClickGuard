import gsap from 'gsap'

export default class AddRemoveResize 
{
    constructor(parent, elem)
    {
        let mm = gsap.matchMedia(),
            isMobile = '(max-width: 990px)',
            isDesktop = '(min-width: 991px)'

        let currentWidth = window.innerWidth
        let clonned

        mm.add(isMobile, () => 
        {
            clonned = elem.clone().appendTo(parent)
        })

        const checkWidth = () =>
        {
            currentWidth = window.innerWidth
            if(currentWidth > 991)
            {
                if(clonned)
                {
                    clonned.remove()
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