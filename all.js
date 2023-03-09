const all = (predicate, array) => array.reduce((acc, value) => acc && predicate(value), true);

// Usage
const equals3 = x => x === 3;
console.log(all(equals3,[3,2,1]));

