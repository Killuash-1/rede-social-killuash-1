class Log {
  static token = localStorage.removeItem("@kenzieSocialmedia:token");
  static uuid = localStorage.removeItem("@kenzieSocialMedia:user_uuid");
  static out() {
    const button = document.querySelector(".logout");

    button.addEventListener("click", () => {
        this.token
        this.uuid
        console.log(button)
        setTimeout(() => {
         window.location.replace("/index.html");   
        }, 2000);
      


    });
  }
}
Log.out();
