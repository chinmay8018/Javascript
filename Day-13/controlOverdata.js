set age(value) {
  if (value >= 0) {
    this.#age = value;
  } else {
    console.log("Invalid age");
  }
}
