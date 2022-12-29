import auth0 from 'auth0-js'

export default class Auth
{
    constructor()
    {
        let authConfig = 
        {
            domain: 'dev-lsbg5leb.us.auth0.com',
            client_id: 'lPgAOCvlK9et7xn3ZyYCoFjYXPqNxbfX',
            audience: 'ApiClickGuardDev',
            scope: 'read:current_user update:current_user_metadata',
            connections: {
                google: 'google-oauth2',
                email: 'Username-Password-Authentication'
            }
        }

        const authClient = new auth0.WebAuth(
        {
            domain: authConfig.domain,
            clientID: authConfig.client_id,
            audience: authConfig.audience,
            scope: authConfig.scope,
            redirectUri: window.location.origin,
            responseType: 'token',
        })

        window.addEventListener('load', () => 
        {
            $(".login__grid--item.is--google").on('click', () =>
            {
                authClient.authorize(
                    {
                    connection: authConfig.connections.google
                })
            })

            let form = $('.login__form--list'),
                email = form.find('[type="email"]'),
                password = form.find('[type="password"]'),
                name = form.find('[name="name-2"]'),
                submit = form.find('[type="submit"]'),
                emailVal, passwordVal, nameVal

            email.on('keyup', () => 
            {
                emailVal = email.val()
            })

            password.on('keyup', () => 
            {
                passwordVal = password.val()
            })

            name.on('keyup', () => 
            {
                nameVal = name.val()
                console.log(nameVal);
            })


            submit.on('click', () => 
            {
                authClient.signup(
                {
                    email: emailVal,
                    password: passwordVal,
                    name: nameVal,
                    connection: authConfig.connections.email
                }, 
                function (err, result) 
                {
                    // check if some error happened
                    if (err) 
                    {
                        console.log(err);
                    } else 
                    {
                        console.log(result);
                    } 
                })
            })
        })
    }
}