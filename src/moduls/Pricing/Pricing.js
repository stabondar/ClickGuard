import './css/pricing.css'
import './css/pricing-mobile.css'

import PricingAccordion from './js/Accordion'
import Mobile from './js/Mobile'
import PricingPin from './js/Pin'
import PricingToggle from './js/Toggle'

export default class Pricing
{
    constructor()
    {
        const accordion = new PricingAccordion()
        const toggle = new PricingToggle()
        const pin = new PricingPin()
        const mobile = new Mobile()
    }
}