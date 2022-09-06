import { Api } from "./api.mjs";

class Login{
    static user(){
        const inputEmail      = document.getElementById('email_input')
    const inputPassword   = document.getElementById('password_input')
    const loginButton     = document.querySelector ('.login_button')

    loginButton.addEventListener('click', async (e) => {
      e.preventDefault()

        const data ={
            email:    inputEmail.value,
            password: inputPassword.value
        }
        Api.login(data)
    })

  }
}

Login.user()

Api.followUser()