// Async functions themselves return a Promise
async function double(param) {
  // await invokes Promise closure and retrieve whatever resolve will get
  a = await new Promise((resolve) => {
    setTimeout(() => resolve(param * 2), 1000);
  });

  return a;
}

double(6).then(console.log);

async function doubleAndAdd(a, b) {
  a = await doubleAfter1Sec(a);
  b = await doubleAfter1Sec(b);

  return a + b;
}

function doubleAfter1Sec(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let val = param * 2;
      isNaN(val) ? reject(NaN) : resolve(val);
    }, 1000);
  });
}

doubleAndAdd(1, 2).then(console.log);
doubleAndAdd("one", 2).then(console.log).catch(console.log);

//////////////////////////////////////////////////

async function doubleAndAdd2(a, b) {
  [a, b] = await Promise.all([doubleAfter1Sec(a), doubleAfter1Sec(b)]);

  return a + b;
}

doubleAndAdd2(2, 2).then(console.log);
