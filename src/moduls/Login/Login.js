import './login.css'

import intlTelInput from 'intl-tel-input'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import 'intl-tel-input/build/css/intlTelInput.css'

import Experience from '../../Experience'

gsap.registerPlugin(ScrollSmoother)

export default class Login 
{
    constructor()
    {
        this.experience = new Experience()
        let smooth = this.experience.smooth.scroll

        console.log(smooth);

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

            logo.on('click', () => {tl.reverse(), smooth.paused(false)})


            $(btn).each(function()
            {
                let self = $(this),
                    text = self.find('p').text()

                if(text === 'Start Free Trial' || text === 'Get protected' || text === 'Free audit' || self.parent().hasClass('footer-banner__btn'))
                {
                    self.on('click', () => {tl.restart(), smooth.paused(true)})
                }

                // if(text == 'Start Free Trial')
                // {
                //     self.on('click', () => {tl.restart(), smooth.paused(true)})
                // }
                
                // if(text == 'Get protected')
                // {
                //     self.on('click', () => {tl.restart(), smooth.paused(true)})
                // }
                
                // if(self.parent().hasClass('footer-banner__btn'))
                // {
                //     self.on('click', () => {tl.restart(), smooth.paused(true)})
                // }
            })
        }
        animation()

        // const stopScroll = () =>
        // {
        //     const showDialog = () => {
        //         const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        //         const body = document.body;
        //         body.style.position = 'fixed';
        //         body.style.top = `-${scrollY}`;
        //       };

        //       const closeDialog = () => {
        //         const body = document.body;
        //         const scrollY = body.style.top;
        //         body.style.position = '';
        //         body.style.top = '';
        //         window.scrollTo(0, parseInt(scrollY || '0') * -1);
        //       }

        //       window.addEventListener('scroll', () => {
        //         document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
        //       });


        //    let btn = $('.btn');
        //     $(btn).each(function()
        //         {
        //         let self = $(this);
        //         let text = self.find('p').text();

        //         if(text === 'Start Free Trial' || text === 'Get protected' || self.parent().hasClass('footer-banner__btn'))
        //         {
        //             self.on('click', () => showDialog());
        //         }

        //         $('.login__cross').on('click', () => closeDialog());  
        //     });
        // }
        // // stopScroll()
    }
}  