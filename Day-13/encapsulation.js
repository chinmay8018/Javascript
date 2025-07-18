class User {
  #password; // private field

  set password(pwd) {
    if (pwd.length >= 6) {
      this.#password = pwd;
    } else {
      console.log("Password too short");
    }
  }

  get password() {
    return "********"; // return masked password
  }
}
