const p1 = Promise.resolve("A");
const p2 = Promise.reject("Something went wrong");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });