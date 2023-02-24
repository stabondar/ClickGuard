import './nav.css'
import Desktop from './js/Desktop'
import Hover from './js/Hover'
import NavScroll from './js/NavScroll'
import Burger from './js/Burger'

export default class Nav 
{
    constructor()
    {   
        const desktop = new Desktop()
        const hover = new Hover()
        const scroll = new NavScroll()
        const burger = new Burger()
    }
}