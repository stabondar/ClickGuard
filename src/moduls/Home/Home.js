import './css/customer-stories.css'
import './css/features.css'
import './css/why-us.css'

import HomeFeatures from './js/Features'
import CustomerStories from './js/CustomerStories'
import ScrollLines from './js/ScrollLines'
import Loader from './js/Loader'

export default class Home 
{
    constructor()
    {
        const features = new HomeFeatures()
        const customerStories = new CustomerStories()
        const scrollLines = new ScrollLines()
        const loader = new Loader()
    }
}