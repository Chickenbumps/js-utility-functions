const setTimes = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  })
};

const func1 =  () => setInterval(()=>console.log("After You"),2000);

setTimes(func1,5);
