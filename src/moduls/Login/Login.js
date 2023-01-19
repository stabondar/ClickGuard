import './login.css'

import intlTelInput from 'intl-tel-input'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import 'intl-tel-input/build/css/intlTelInput.css'

gsap.registerPlugin(ScrollSmoother)

export default class Login 
{
    constructor()
    {
        const form = () =>
        {
            let input = document.querySelector('[type="tel"]'),
            dialCode = document.querySelector('.dialCode'),
            errorMsg = document.querySelector('#error-msg'),
            validMsg = document.querySelector('#valid-msg')

            let iti = intlTelInput(input, 
            {
                initialCountry: 'us',
                preferredCountries: ['us'],
                placeholderNumberType: 'MOBILE',
                autoPlaceholder: 'aggressive',
                customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) 
                {
                    return "e.g. " + selectedCountryPlaceholder;
                }
            })

            let updateInputValue = function (event) 
            {
                dialCode.value = '+' + iti.getSelectedCountryData().dialCode
            }

            input.addEventListener('input', updateInputValue, false)
            input.addEventListener('countrychange', updateInputValue, false)

            let errorMap = ['Invalid number', 'Invalid country code', 'Too short', 'Too long', 'Invalid number']

            let reset = function () 
            {
                input.classList.remove('error')
                errorMsg.innerHTML = ''
                errorMsg.classList.add('hide')
                validMsg.classList.add('hide')
            }

            input.addEventListener('blur', function () 
            {
                reset()
                if (input.value.trim()) 
                {
                    if (iti.isValidNumber()) 
                    {
                        validMsg.classList.remove('hide')
                    } 
                    else 
                    {
                        input.classList.add('error')
                        let errorCode = iti.getValidationError()
                        errorMsg.innerHTML = errorMap[errorCode]
                        errorMsg.classList.remove('hide')
                    }
                }
            })

            input.addEventListener('change', reset)
            input.addEventListener('keyup', reset)
        }
        form()

        const animation = () =>
        {
            const login = $('.login'),
                  logo = $('.login__cross'),
                  btn = $('.btn')
            login.addClass('hide')

            const hide = () => { login.removeClass('open') }
            const open = () => { login.addClass('open') }

            let tl = gsap.timeline({ paused: true, onStart: open, onReverseComplete: hide })

            tl.from(login, { opacity: 0 })

            logo.on('click', () => {tl.reverse()})


            $(btn).each(function()
            {
                let self = $(this),
                    text = self.find('p').text().toLowerCase(),
                    attr = self.attr('href')

                if(text === 'start free trial' || text === 'get protected' || text === 'free audit' || self.parent().hasClass('footer-banner__btn') || attr === '#login')
                {
                    self.on('click', () => {tl.restart()})
                }
            })
        }
        animation()
    }
}  