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

        const validateForm = (login) =>
        {
            let input = login.find('input')
            let emailInput = login.find('[type="email"]')
            let firstNameInput = login.find('[name="firstname"]')
            let lastNameInput = login.find('[name="lastname"]')
            let UrlInput = login.find('[name="url"]')
            let error = login.find('input.error, select.error')
            let submit = login.find('.form__submit--parent')
            let checkbox = login.find('[type="checkbox"]')
            let checkboxParent = login.find('.login__checkbox---parent')
            let selectInput = login.find('.styledSelect.checked')
            let selectOptions = login.find('.styledParent').find('li')

            submit.addClass('disabled')

            const checkInput = () =>
            {
                error = login.find('input.error, select.error')
                selectInput = login.find('.styledSelect.checked')

                if(emailInput.val().length < 5 || firstNameInput.val().length < 2 || lastNameInput.val().length < 2 || UrlInput.val().length < 4 ||  error.length > 0 || checkbox.is(':checked') == false || selectInput.length == 0)
                {
                    submit.addClass('disabled')
                } else
                {
                    submit.removeClass('disabled')
                }

                
            }

            input.on('keyup', () => checkInput())
            checkboxParent.on('click', () => checkInput())
            selectOptions.on('click', () => checkInput())
        }

        const animation = () =>
        {
            const signin = $('[popup="signin"]')
            const login = $('[popup="login"]')
            const logo = $('.login__cross')
            const btn = $('.btn')


            const hideSingin = () => { $('body').removeClass('signin-open') }
            const openSingin = () => { $('body').addClass('signin-open') }

            const hideLogin = () => { $('body').removeClass('login-open') }
            const openLogin = () => { $('body').addClass('login-open') }

            let tlSignin = gsap.timeline({ paused: true, onStart: openSingin, onReverseComplete: hideSingin })
            let tlLogin = gsap.timeline({ paused: true, onStart: openLogin, onReverseComplete: hideLogin })

            tlSignin.from(signin, { opacity: 0 })
            tlLogin.from(login, { opacity: 0 })

            logo.on('click', () => {tlSignin.reverse(), tlLogin.reverse()})
            
            $(btn).each(function()
            {
                let self = $(this)
                let attr = self.attr('btn')

                self.on('click', () =>
                {
                    if(attr == 'signin')
                    {
                        tlSignin.restart()
                    }
                    else if(attr == 'login')
                    {
                        tlLogin.restart()
                    }
                })
            })

            validateForm(login)
        }
        animation()

        let signIn = document.getElementById('email-form');
        signIn.addEventListener('submit', handlerCallback, true);

        function handlerCallback(event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const validate = new Validate()

        // $('.btn').each(function()
        // {
        //     let self = $(this),
        //         text = self.find('p').text().toLowerCase()

        //     if(text == 'free audit')
        //     {
        //         self.attr("onclick", "$crisp.push(['do', 'chat:open'])")
        //     }
        // })
    }
}  