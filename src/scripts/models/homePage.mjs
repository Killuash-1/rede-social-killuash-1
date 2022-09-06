import { Api } from "./api.mjs"

class render{
    static async mode (array){
      array.results.slice(0, 3).forEach((element) => {
            HomePagePosts.pages(element)
        }) ;
     
    }
}
class HomePagePosts{
    static async pages (data){
       console.log(data)
        
        const containerSuggestion = document.querySelector(".container_post_suggestion")
        const divPost = document.createElement('div')
        const divImg = document.createElement('div')
        const imgPost = document.createElement('img')
        const divPostName = document.createElement('div')
        const h3Post = document.createElement('h3')
        const spanPost = document.createElement('span')
        const buttonPost = document.createElement('button')

        const {username, work_at, image, uuid } = data
        
        divPost.classList.add('post_container')
        divImg.classList.add('post_img_container')
        divPostName.classList.add('container_name_post')

        buttonPost.setAttribute('id', `${uuid}`)
        
        h3Post.innerText = username
        spanPost.innerText = work_at
        imgPost.src = image
        buttonPost.innerHTML = "Seguir"


        containerSuggestion.append(divImg, divPost  )
        divImg.append(imgPost,buttonPost)
        divPost.append(divPostName)
        divPostName.append(h3Post,spanPost)
    }

}



render.mode(await Api.users())
        

