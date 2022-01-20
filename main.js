// Number

const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) //toFiced는 문자데이터로 반환
console.log(str)
console.log(typeof str)

const integer = parseInt(str) //정수로 분석 문자데이터를 숫자로 변환 전역함수
const float = parseFloat(str) //소수점자리까지 분석 전역함수

console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abs:', Math.abs(-12))
console.log('min:', Math.min(2, 8))
console.log('max:', Math.max(2, 8))
console.log('ceil:', Math.ceil(3.14)) // 올림
console.log('floor:', Math.floor(3.14)) // 내림
console.log('round:', Math.round(3.14)) // 반올림
console.log('random:', Math.random()) // 0 ~ 1 사이 (난수)