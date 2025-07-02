const user = {
  name: "Chinmay",
  greet: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

user.greet();