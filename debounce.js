const debounce = (func, timeout = 2500) => {
  if(typeof func !== "function"){
    console.error(`function must be a valid function, ${typeof func} provided`);
  }
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}
