import './styles/style.css'
import './styles/loco.css'

import SmoothScroll from './moduls/SmoothScroll'
import Home from './moduls/Home/Home'
import Buttons from './moduls/Buttons'
import Loader from './moduls/Loader'
import Text from './moduls/Text'
import Nav from './moduls/Nav'
import Slider from './moduls/Slider'
import allLoader from './moduls/allLoader'
import Pricing from './moduls/Pricing/Pricing'
import CustomerStories from './moduls/Home/js/CustomerStories.js'
import WhatIs from './moduls/WhatIS/WhatIs.js'

const checkPages = () => 
{
    const smooth = new SmoothScroll()
    const buttons = new Buttons()
    const loader = new Loader()
    const text = new Text()
    const nav = new Nav()
    const slider = new Slider()
    if($('body').attr('data-page') === 'home') { const home = new Home() }
    if($('body').attr('allLoader') === '1') { const allloader = new allLoader() }
    if($('body').attr('data-page') === 'pricing') { const price = new Pricing() }
    if($('body').attr('data-page') === 'customer-stories') { const tabs = new CustomerStories() }
    if($('body').attr('data-page') === 'what-is') { const whatIs = new WhatIs() }
}
checkPages()