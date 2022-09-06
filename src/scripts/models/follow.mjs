import { Api } from "./api.mjs";

class User {
  static follow() {
    const section = document.querySelector(".suggestion_section_container");

    section.addEventListener("click", async (e) => {
      if (e.target.innerText == "Seguir") {

        const data = { following_users_uuid: e.target.id };
        await Api.followUsers(data);
        e.target.innerText = "Seguindo";

      } else if (e.target.innerText == "Seguindo") {
        const {following: [{ uuid }], } = await Api.oneUser();
          
        await Api.unfollowUsers(uuid);
        e.target.innerText = "Seguir";
      }
    });

  }

 


}

User.follow();
