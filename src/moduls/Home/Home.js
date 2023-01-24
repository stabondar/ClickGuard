import './css/customer-stories.css'
import './css/features.css'
import './css/why-us.css'
import './css/tabs.css'
import './css/banner.css'

import HomeFeatures from './js/Features'
import CustomerStories from './js/CustomerStories'
import ScrollLines from './js/ScrollLines'
import Loader from './js/Loader'
import IntegrationLogos from './js/IntegrationsLogos'
import Tabs from './js/Tabs'

export default class Home 
{
    constructor()
    {
        const features = new HomeFeatures()
        const customerStories = new CustomerStories()
        const scrollLines = new ScrollLines()
        const loader = new Loader()
        const logos = new IntegrationLogos()
        const tabs = new Tabs()
    }
}