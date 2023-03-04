// Math.random(): Generate random number from 0 to 1.
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(3,10));
// 7
