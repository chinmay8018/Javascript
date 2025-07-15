function greetAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}
greetAsync().then(console.log);