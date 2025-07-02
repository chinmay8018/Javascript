const user = {
  name: "Chinmay",
  greet() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

user.greet(); 