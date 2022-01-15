// 함수 복습

// 기명함수 (함수 선언방식)
function sum(x, y) {
  //console.log(x + y)
  return x + y
  // return 이후는  함수 종료
  console.log(x * y)
}

// 익명함수 (함수의 표현)
const sumFunction = function (a, b) {
  return a + b
}

sum(1, 3)
// 재활용도 가능
sum(4, 12)

const a = sum(1, 3)
const b =sum(4, 12)

console.log(a)
console.log(b)
console.log(a + b)

console.log(sum(7,8))


// argument
// 직관적이지 않음
function argu() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}

console.log(argu(7, 3))
