import { Api } from "./api.mjs"


class UserPost {

    
    static async post(data){
        console.log(data)
        const sectionUser = document.querySelector(".user_container")
        const divUser = document.createElement("div")
        const imgUser = document.createElement("img")
        const divUsername = document.createElement("div")
        const h2User = document.createElement("h2")
        const spanUser = document.createElement("span")
        const spanFollowers = document.createElement("span")
        const divPostUserContainer = document.createElement('div')
        const inputUser = document.createElement('input')
        const textAreaUser = document.createElement('textarea')
        const buttonUser = document.createElement('button')





        divUser.classList.add('user_img_container')
        divUsername.classList.add('user_info_container')
        divPostUserContainer.classList.add('user_post_container')
        

        inputUser.setAttribute('placeholder', 'Digitar titulo do post')
        inputUser.setAttribute('id', 'input_post')

        textAreaUser.setAttribute('placeholder' , 'Digitar descricao do post')
        textAreaUser.setAttribute('id' , 'textarea_post')
        buttonUser.setAttribute('id', 'button_post')
       

        const {image, username, work_at, followers_amount} = data
        
        imgUser.src = image
        h2User.innerText = username
        spanUser.innerText = work_at
        spanFollowers.innerText = `${followers_amount} seguidores`
        buttonUser.innerHTML = "Postar" 
        sectionUser.append(divUser, divPostUserContainer)
        divUser.append(imgUser,divUsername, spanFollowers)
        divUsername.append(h2User, spanUser)
        divPostUserContainer.append(inputUser,textAreaUser,buttonUser)
         this.texts() 
    }


    static texts(data){

        const buttonPost =document.getElementById('button_post')
        const inputPost = document.getElementById('input_post')
        const textAreaPost = document.getElementById('textarea_post')

        buttonPost.addEventListener('click', async ( ) => {
            
        data ={
            title: inputPost.value,
            description: textAreaPost.value
        }
        
          await Api.postUser(data) 

          setTimeout(()=> {
             window.location.reload()
          }, 3000)
         
            
        
        })
    }
}

UserPost.post(await Api.oneUser())

