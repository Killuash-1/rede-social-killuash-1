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

  static registerChange(){
    const buttonLogin = querySelector(".login_button_container")
    const buttonRegister =querySelector('.register_button_container')


    buttonLogin.addEventListener('click', () => {
      console.log(buttonLogin);
    })
  }
}

Login.user()
Login.registerChange()
