
async function run() {
  console.log("1");
  await new Promise((res) => setTimeout(res, 1000));
  console.log("2");
}
run();
console.log("3");
