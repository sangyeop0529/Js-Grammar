// 전개 연산자

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

//rest parameter 나머지 매개변수
const toObject = (a, b, ...c) => ({a,b,c})
console.log("----------------------------------")
console.log(toObject)
console.log(toObject(fruits[0],fruits[1],fruits[2]))
console.log(toObject(...fruits))