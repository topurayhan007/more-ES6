// 1. array object, sum the object's age property, use array.reduce()
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];
const ageSum = people.reduce((prev, curr) => prev + curr.age, 0);
console.log(ageSum);
