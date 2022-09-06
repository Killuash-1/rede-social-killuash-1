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
    const buttonLogin =document.querySelector(".button_login")
    const buttonRegister =document.querySelector('.button_register')
    const containerLogin =document.querySelector('.container_login')
    const containerRegister =document.querySelector('.container_register')

    buttonLogin.addEventListener('click', () => {
      if(containerLogin.classList.contains("container_login")){
      containerLogin.classList.toggle("login_off")
      containerRegister.classList.toggle("register_on")
    }   
    
  })
  buttonRegister.addEventListener('click', () => {
    if(containerRegister.classList.contains("container_register")){
    containerLogin.classList.toggle("login_off")
    containerRegister.classList.toggle("register_on")

    }
  })
    
  }
}

Login.user()
Login.registerChange()
