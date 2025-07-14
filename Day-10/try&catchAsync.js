function getData(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve("Data found");
    } else {
      reject("Invalid ID");
    }
  });
}

async function fetchData() {
  try {
    const result = await getData(-1);
    console.log(result);
  } catch (error) {
    console.log("Error:", error); // Error: Invalid ID
  }
}

fetchData();
