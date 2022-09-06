import { Api } from "./models/api.mjs"


class Register{
    static user(){
        const inputUsername     =  document.getElementById('input_username_register')
        const inputEmail        =  document.getElementById('input_Email_register')
        const inputPassword     =  document.getElementById('input_password_register')
        const inputJob          =  document.getElementById('input_job_register')
        const inputUrl          =  document.getElementById('input_url_register')

        const buttonRegister    =  document.querySelector(".register_button")

        buttonRegister.addEventListener('click', (e)=>{ 
            e.preventDefault()
            console.log("juninho")
            const data ={
            username:  inputUsername.value,
            email:     inputEmail.   value, 
            password:  inputPassword.value,
            work_at:   inputJob.     value,
            image:     inputUrl.     value,
        }

         Api.register(data)
        })
    }
}

Register.user()