import './login.css'
import './validate.css'

import intlTelInput from 'intl-tel-input'
import { gsap } from 'gsap'
import 'intl-tel-input/build/css/intlTelInput.css'

import Validate from './Validate'

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
                initialCountry: "auto",
                geoIpLookup: function(callback) {
                    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "us";
                    callback(countryCode);
                    });
                },
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

            const hide = () => { $('body').removeClass('login-open') }
            const open = () => { $('body').addClass('login-open') }

            let tl = gsap.timeline({ paused: true, onStart: open, onReverseComplete: hide })

            tl.from(login, { opacity: 0 })

            logo.on('click', () => {tl.reverse()})

            let connect
            window.addEventListener('load', () => 
            {
                setTimeout(() => {
                    connect = $('.cc-imbb')
                }, 2000);
            })


            $(btn).each(function()
            {
                let self = $(this),
                    text = self.find('p').text().toLowerCase(),
                    attr = self.attr('href')

                self.on('click', () =>
                {
                    if(text == 'chat with support now') return
                    if(text == 'create account') return
                    if(text == 'free audit')
                    {
                        $(connect).click()
                    } else
                    {
                        if(attr === '#')
                        {
                            if(text === 'accept all cookies' || text === 'accept' || text === 'save settings' || text === 'cookie settings')
                            {
                            } else 
                            {
                                tl.restart()
                            }
                        }
                    }
                })
            })
        }
        animation()

        let signIn = document.getElementById('email-form');
        signIn.addEventListener('submit', handlerCallback, true);

        function handlerCallback(event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const validate = new Validate()
    }
}  