const measureTime = (func, label = "default") => {
  console.time(label);
  func();
  console.timeEnd(label);
}

const fruits = ["apple", "banana", "melon"];

measureTime(()=>{fruits.find(fruit => fruit === "melon")},"findMelon");
