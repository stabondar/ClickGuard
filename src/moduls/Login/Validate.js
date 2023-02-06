import './validate.css'

import "https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"
import jqueryValidate from 'jquery-validation/dist/jquery.validate.js'


export default class Validate 
{
    constructor()
    {

        $('#email-form').validate(
        {
            rules: 
            {
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
    }
}