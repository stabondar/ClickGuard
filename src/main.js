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
import Integration from './moduls/Integration/Integration.js'
import RealStories from './moduls/RealStories/RealStories.js'
import About from './moduls/About/About.js'
import BlogTemplate from './moduls/BlogTemplate/BlogTemplate.js'
import Blog from './moduls/Blog/Blog.js'
import Compare from './moduls/Compare/Compare.js'

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
    if($('body').attr('data-page') === 'customer-stories') { const tabs = new CustomerStories(); const realStories = new RealStories() }
    if($('body').attr('data-page') === 'what-is') { const whatIs = new WhatIs() }
    if($('body').attr('data-page') === 'integration') { const integration = new Integration() }
    if($('body').attr('data-page') === 'about') { const about = new About() }
    if($('body').attr('data-page') === 'blog-template') { const blogTemplate = new BlogTemplate() }
    if($('body').attr('data-page') === 'blog') { const blog = new Blog() }
    if($('body').attr('data-page') === 'compare') { const compare = new Compare() }
}
checkPages()