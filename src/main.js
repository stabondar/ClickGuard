import './styles/style.css'
import './styles/loco.css'

import SmoothScroll from './moduls/SmoothScroll'
import Home from './moduls/Home/Home'
import Buttons from './moduls/Buttons'
import Loader from './moduls/Loader'
import Text from './moduls/Text'

const checkPages = () => 
{
    const smooth = new SmoothScroll()
    const buttons = new Buttons()
    const loader = new Loader()
    const text = new Text()
    if($('body').attr('data-page') === 'home') { const home = new Home() }
}
checkPages()
    