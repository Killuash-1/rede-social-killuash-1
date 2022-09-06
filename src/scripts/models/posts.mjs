import { Api } from "./api.mjs";

class Posts {
  static users(data) {
   

    const sectionPost = document.querySelector(".container_posts_ul");
    const liPost         = document.createElement("li");
    const divPost        = document.createElement("div");
    const imgPost        = document.createElement("img");
    const divUserPost    = document.createElement("div");
    const h3Post         = document.createElement("h3");
    const spanPost       = document.createElement("span");
    const divTextPost    = document.createElement("div");
    const h2Post         = document.createElement("h2");
    const pPost          = document.createElement("p");
    const buttonPostShow = document.createElement("button");
    const buttonLike     = document.createElement("button");

    const {uuid, title, description, author:{  username, work_at, image,}, likes} = data;


    liPost.classList.add("container_posts_li")
    divPost.classList.add("container_profile_posts")
    divUserPost.classList.add("container_posts_text")
    divTextPost.classList.add("container_posts")
    buttonLike.classList.add("like_button")

    buttonPostShow.setAttribute("id", "post_button")
    buttonLike.setAttribute("id", `${uuid}`)
    

    h2Post.innerText = title;
    pPost.innerText = description;
    h3Post.innerText = username;
    spanPost.innerText = work_at;
    imgPost.src = image;
    buttonPostShow.innerHTML = "Abrir Post";
    buttonLike.innerHTML = likes.length;

    sectionPost.append(liPost);
    liPost.append(divPost, divTextPost, buttonPostShow, buttonLike);
    divPost.append(imgPost, divUserPost);
    divUserPost.append(h3Post, spanPost);
    divTextPost.append(h2Post, pPost);
   
  }

  static likes(){
    const Button = document.querySelector('.like_button')

    Button.addEventListener('click', (e) => {
      if(e.target.classList.contains("like-button")){
        const data = {
          "post_uuid": e.target.id
        }

        console.log(data);
      }

    })
   
  }
    

}

class show {
  static async posts(array) {
    array.results.forEach((element) => {
      Posts.users(element);
    });
  }
}

show.posts(await Api.postUsers());
