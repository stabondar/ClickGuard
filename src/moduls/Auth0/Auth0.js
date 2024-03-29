import auth0 from 'auth0-js'

export default class Auth
{
    constructor()
    {
        let signin = $('[popup="signin"]')

        let authConfig = 
        {
            domain: 'auth.clickguard.com', 
            client_id: 'c6aN8OFe7QywZiJO24OOB6qbYSoClBAp', 
            audience: 'clickguard-api', 
            scope: 'read:current_user update:current_user_metadata', 
            connections: 
            { 
                google: 'google-oauth2', 
                facebook: 'facebook', 
                linkedin: 'linkedin', 
                email: 'Username-Password-Authentication' 
            }
        }

        const authClient = new auth0.WebAuth(
        {
            domain: authConfig.domain,
            clientID: authConfig.client_id,
            audience: authConfig.audience,
            scope: authConfig.scope,
            redirectUri: 'https://app.clickguard.com/confirmation',
            responseType: 'token',
        })

        window.addEventListener('load', () => 
        {
            $(".login__grid--item").eq(0).on('click', () =>
            {
                if (CG) CG.conversion('Google')
                setTimeout(() => authClient.authorize({ connection: authConfig.connections.google }), 500)
            })

            $(".login__grid--item").eq(1).on('click', () =>
            {
                if (CG) CG.conversion('Linkedin')
                setTimeout(() => authClient.authorize({ connection: authConfig.connections.linkedin }), 500)
            })
            
            $(".login__grid--item").eq(3).on('click', () =>
            {
                if (CG) CG.conversion('Facebook')
                setTimeout(() => authClient.authorize({ connection: authConfig.connections.facebook }), 500)
                
            })

            let form = $('.login__form--list'),
                email = form.find('[type="email"]'),
                password = form.find('[type="password"]'),
                name = form.find('[name="name-2"]'),
                phone = form.find('[type="tel"]'),
                submit = form.find('.form__submit--parent.is--login').find('.btn'),
                emailVal, passwordVal, nameVal, phoneVal,
                passwordError = form.find('.p--14.password-error')

            email.on('keyup', () => 
            {
                emailVal = email.val()
            })

            let error = $('.login__form--item.is--password').find('#password-3-error')
            password.on('keyup', () => 
            {
                passwordVal = password.val()
                if(passwordVal.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))
                {
                    signin.find('.login__form--descr').css('color', '#98a2b3')
                    signin.find('.form__submit--parent.is--login').css('pointer-events', 'auto')
                    signin.find('.form__submit--parent.is--login').find('a').css('background-color', '#0137FF')
                } else
                {
                    signin.find('.form__submit--parent.is--login').find('a').css('background-color', 'grey')
                    signin.find('.login__form--descr').css('color', '#b20000')
                    signin.find('.form__submit--parent.is--login').css('pointer-events', 'none')
                }
            })

            passwordVal = password.val()
            if(passwordVal.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/))
            {
                signin.find('.login__form--descr').css('color', '#98a2b3')
                signin.find('.form__submit--parent.is--login').css('pointer-events', 'auto')
                signin.find('.form__submit--parent.is--login').find('a').css('background-color', '#0137FF')
            } else
            {
                signin.find('.form__submit--parent.is--login').find('a').css('background-color', 'grey')
                // signin.find('.login__form--descr').css('color', '#b20000')
                signin.find('.form__submit--parent.is--login').css('pointer-events', 'none')
            }

            name.on('keyup', () => 
            {
                nameVal = name.val()
            })
            
            phone.on('keyup', () => 
            {
                phoneVal = phone.val()
            })

            submit.on('click', () => 
            {
                authClient.signup(
                {
                    email: emailVal,
                    password: passwordVal,
                    username: nameVal,
                    connection: authConfig.connections.email,
                    user_metadata: {
                        name: nameVal,
                        phone: phoneVal
                    }
                }, 
                function (err, result) 
                {
                    // check if some error happened
                    if (err) 
                    {
                        console.log(err);
                        console.log(err.description);
                        if(err.description == 'Invalid sign up')
                        {
                            $('.login__form--descr').find('p').text('This email is already signed')
                            $('.login__form--descr').css('color', '#b20000')
                        }
                        passwordError.text(err.policy)
                    } else 
                    {
                        console.log(result);
                        passwordError.css('display', 'none')
                        if (CG) CG.conversion('Signup form')
                        authClient.login({
                            realm: authConfig.connections.email,
                            email: emailVal,
                            password: passwordVal,
                          }, (err) => {
                            console.log(err.description)
                            // handle login error
                          })
                    } 
                })
            })
        })
    }
}
