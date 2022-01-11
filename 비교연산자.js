// 비교 연산자

const a = 5
const b = 7
const c = 5

console.log(a === b) //일치 연산자

function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

console.log(a !== b)
console.log(a < b)
console.log(a > c)
console.log(a >= c)
console.log(a <= c)