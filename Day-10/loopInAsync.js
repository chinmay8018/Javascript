function waitAndLog(i) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Index:", i);
      resolve();
    }, 500);
  });
}

async function printIndexes() {
  for (let i = 0; i < 5; i++) {
    await waitAndLog(i);
  }
}

printIndexes();
