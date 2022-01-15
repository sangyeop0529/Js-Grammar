// 형 변환

const a = 1
const b = '1'

console.log(a === b)

// 동등연산자 사용 시 형 변환!!!
// 사용 안하는 것을 권장
console.log(a == b)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...
// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}


if ('') {
  console.log(123)
} else {
  console.log(456)
}