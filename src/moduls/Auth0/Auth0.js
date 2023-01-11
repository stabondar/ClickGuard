import auth0 from 'auth0-js'

export default class Auth
{
    constructor()
    {
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
            redirectUri: 'https://app.clickguard.com',
            responseType: 'token',
        })

        window.addEventListener('load', () => 
        {
            $(".login__grid--item").eq(0).on('click', () =>
            {
                authClient.authorize({ connection: authConfig.connections.google })
            })

            $(".login__grid--item").eq(1).on('click', () =>
            {
                authClient.authorize({ connection: authConfig.connections.linkedin })
            })
            
            $(".login__grid--item").eq(3).on('click', () =>
            {
                authClient.authorize({ connection: authConfig.connections.facebook })
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