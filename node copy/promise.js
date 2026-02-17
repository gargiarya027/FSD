function myPromiseFunction() {
  return new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve("Promise resolved ");
    } else {
      reject("Promise rejected ");
    }
  });
}

async function runPromise() {
  try {
    const result = await myPromiseFunction();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runPromise();
