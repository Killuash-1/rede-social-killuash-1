import { Toast } from "./Toast.js";

export class Api {
  static url = "https://m2-rede-social.herokuapp.com/api";
  static token = localStorage.getItem("@kenzieSocialmedia:token");
  static uuid = localStorage.getItem("@kenzieSocialMedia:user_uuid");

  static headersBefore = { "Content-Type": "application/json" };
  static headersAfter = {
    "Content-Type": "application/json",
    Authorization: `Token ${this.token}`,
  };

  static async login(data) {
    const loginUser = await fetch(`${this.url}/users/login/`, {
      method: "POST",
      headers: this.headersAfter,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
         if(res.password || res.email){
          Toast.create("Email ou Senha Invalidos.", "gray")
          

        
        window.location.replace("/src/html/homePage.html");
        }else{
          localStorage.setItem("@kenzieSocialmedia:token", res.token);
          localStorage.setItem("@kenzieSocialMedia:user_uuid", res.user_uuid);
        
           }
          });
      // .catch((err) => err);
    return loginUser;
  }

  static async register(data) {
    const newUser = await fetch(`${this.url}/users/`, {
      method: "POST",
      headers: this.headersBefore,
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    return newUser;
  }

  static async users() {
    const user = await fetch(`${this.url}/users/?limit=20&offset=500`, {
      method: "GET",
      headers: this.headersAfter,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));

    return user;
  }

  static async oneUser() {
    const user = await fetch(`${this.url}/users/${this.uuid}/`, {
      method: "GET",
      headers: this.headersAfter,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return user;
  }

  static async postUsers() {
    const user = await fetch(`${this.url}/posts/?limit=10&offset=1230/`, {
      method: "GET",
      headers: this.headersAfter,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return user;
  }

  static async followUsers(data) {
    const user = await fetch(`${this.url}/users/follow/`, {
      method: "POST",
      headers: this.headersAfter,
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return user;
  }
  
  static async unfollowUsers(uuid) {
    const user = await fetch(`${this.url}/users/unfollow/${uuid}`, {
      method: "DELETE",
      headers: this.headersAfter,
    
    })
      
      .then((res) => res)
      .catch((err) => console.error(err));
    return user;
  }

  static async postUser (data){
    const user = await fetch(`${this.url}/posts/`, {
      method: "POST",
      headers: this.headersAfter,
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => console.log(res) )
      .catch((err) => console.error(err));
    return user;
  }

  

  static async likeUsers(data) {
    const user = await fetch(`${this.url}/likes/`, {
      method: "POST",
      headers: this.headersAfter,
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return user;
  }
  

  

}
