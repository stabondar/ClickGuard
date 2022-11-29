import './css/pricing.css'

import PricingAccordion from './js/Accordion'
import PricingPin from './js/Pin'
import PricingToggle from './js/Toggle'

export default class Pricing
{
    constructor()
    {
        const accordion = new PricingAccordion()
        const toggle = new PricingToggle()
        const pin = new PricingPin()
    }
}