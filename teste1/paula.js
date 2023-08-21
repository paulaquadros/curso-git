async function paula() {
  const paula = await getPaula();
  return paula;
}

function getPaula() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Paula");
    }, 2000);
  });
}
