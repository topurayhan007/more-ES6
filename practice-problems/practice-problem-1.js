// 1. odd array, covert to even array, use array.map()
const oddArr = [1, 3, 5, 7, 9];
const evenArr = oddArr.map((num) => num + 1);
console.log(evenArr);

// 2. return array elements that are divisible by 10, use array.filter()
const arr = [33, 50, 79, 78, 90, 101, 30];
const divisorOfTen = arr.filter((num) => num % 10 === 0);
console.log(divisorOfTen);

// 3. do same as no.2, use array.find();
const divisorOfTenNew = arr.find((num) => num % 10 === 0);
console.log(divisorOfTenNew);
