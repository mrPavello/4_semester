//task 2
let myPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    const result = Math.floor(Math.random() * 100);
    resolve(result);
  }, 3000);
});

myPromise.then(
  function(result) {
    console.log("\ntask 2");
    console.log(result);
  }
);

//task 3
function generateNumbersWithDelay (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.floor(Math.random() * 100);
      resolve(result);
    }, delay);
  })
}

Promise.all([
  generateNumbersWithDelay(1000),
  generateNumbersWithDelay(1000),
  generateNumbersWithDelay(1000)
]).then((results) => {
  console.log("\ntask 3");
  console.log(results);
});

//task 4
// let pr = new Promise((res,rej) => {
//   rej('ku')
// });
// console.log("\ntask 4");
// pr
//   .then(() => console.log(1))
//   .catch(() => console.log(2))
//   .catch(() => console.log(3))
//   .then(() => console.log(4))
//   .then(() => console.log(5));


//task 5
let promiseT5 = new Promise((res, rej) => {
  res(21);
});
console.log("\ntask 5");
promiseT5
  .then(res => {
    console.log(res);
    return res;
  })
  .then(res => console.log(res * 2));

//task 6
async function task6() {
  let promiseT5 = new Promise((res, rej) => {
    res(21);
  });

  console.log("\ntask 6");
  const res1 = await promiseT5;
  console.log(res1);

  const res2 = res1 * 2;
  console.log(res2);
}

task6();

//task 7
let promise7 = new Promise((res, rej) => {
  res('Resolved promise - 1')
})

promise7
  .then((res) => {
    console.log("Resolved promise - 2")
    return "OK"
  })
  .then((res) => {
    console.log(res);
  }) 

//task 8
let promise8 = new Promise((res, rej) => {
  res('Resolved promise - 1')
})

promise8
  .then((res) => {
    console.log("Resolved promise - 2")
    return "OK"
  })
  .then((res) => {
  console.log(res)
  })


//task 9
let promise9 = new Promise((res, rej) => {
  res('Resolved promise - 1')
})

promise9
  .then((res) => {
    console.log(res)
    return res
  })
  .then((res1) => {
    console.log('Resolved promise - 2')
  });

//task 10
let promise10 = new Promise((res, reg) => {
  res('Resolved promise - 1')
})
promise10
  .then((res) => {
    console.log(res)
    return res
  })
  .then((res1) => {
    console.log(res1)
  })

//task 11
let promise11 = new Promise((res, rej) => {
  res('Resolved promise - 1')
})
promise11
  .then((res) => {
    console.log(res)
  })
  .then((res1) => {
    console.log(res1)
  })

//task 12
let pr = new Promise((res, reg) => {
  reg('ku')
})
pr
  .then(() => console.log(1))
  .catch(() => console.log(2))
  .catch(() => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5))


//promise with error
let promise13 = new Promise((res, rej) => {
  rej(new Error("Error"));
})

promise13.catch((error) => console.log(error));