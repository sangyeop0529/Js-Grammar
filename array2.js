// .filter

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry'] 

const a = numbers.map(number => number < 3)
console.log(a);

const b = numbers.filter(number => number < 3)
console.log(b);

console.log("----------------------------------")

// .find() .findIndex()

const c = fruits.find(fruit => /^B/.test(fruit)) // 정규표현식
console.log(c)

const d = fruits.findIndex(fruit => /^B/.test(fruit)) // 정규표현식
console.log(d)

console.log("----------------------------------")
// .includes()

const e = numbers.includes(3)
console.log(e)

const f = fruits.includes('Dell')
console.log(f)

console.log("----------------------------------")
// .push() .unshift()
// 원본 수정됨 주의!!!

numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

console.log("----------------------------------")
// .reverse()
// 원본 수정됨 주의!!!

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)

console.log("----------------------------------")
// .reverse()
// 원본 수정됨 주의!!!
numbers.reverse()
numbers.splice(0, 1, 999) // (index(0부터), delete, add)

console.log(numbers)

fruits.reverse()
fruits.splice(2, 0, 'Orange')
console.log(fruits)