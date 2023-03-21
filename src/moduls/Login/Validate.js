import './validate.css'

import "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"
import jqueryValidate from 'jquery-validation/dist/jquery.validate.js'


export default class Validate 
{
    constructor()
    {

        let submitSignin = $('[popup="signin"]').find('.form__submit--parent.is--login').find('.btn')
        let submitLogin = $('[popup="login"]').find('.form__submit--parent.is--login').find('.btn')

        $.validator.addMethod("emailWithDomain", function(value, element) {
            return this.optional(element) || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value);
          }, "Please enter a valid email address with a domain name.");

        $('#email-form').validate(
        {
            rules: 
            {
                email:
                {
                    required: true,
                    emailWithDomain: true
                },
                phone:
                {
                    required: true,
                    digits: true
                }
            },
            messages:
            {
                password: 
                {
                    required: 'Minimum 8 characters, 1 uppercase, 1 lowecase and 1 number, special characters (e.g. !@#$%^&*)',
                    minlength: 'Minimum 8 characters, 1 uppercase, 1 lowecase and 1 number, special characters (e.g. !@#$%^&*)'
                }
            }
        })

        $('#request').validate(
        {
            rules:
            {
                email:
                {
                    required: true,
                    emailWithDomain: true
                },
                url: 
                {
                    required: true,
                    url: true,
                    normalizer: function( value ) {
                        var url = value;
                 
                        // Check if it doesn't start with http:// or https:// or ftp://
                        if ( url && url.substr( 0, 7 ) !== "http://"
                            && url.substr( 0, 8 ) !== "https://"
                            && url.substr( 0, 6 ) !== "ftp://" ) {
                          // then prefix with http://
                          url = "http://" + url;
                        }
                 
                        // Return the new url
                        return url;
                    }
                },
                'Monthly-Google-Ad-Clicks-2':
                {
                    required: true
                }
            },
            messages:
            {
                url:
                {
                    required: 'Please enter a valid URL'
                }
            }
        })

        submitSignin.on('click', () => 
        {
            $('#email-form').valid()
        })

        submitLogin.on('click', () => 
        {
            $('#request').valid()
        })
    }
}