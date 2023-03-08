const some = (predicate, array) => array .reduce((acc, value) => acc || predicate(value),false);


const equal3 = (x) => x === 3;

console.log(some(equal3, [1,2,3]));
