// 데이터 불변성
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Aarry, Function
// 1번 메모리 1 k : 1 => k : 7 (b = a) => k : 2(b = a) 의도하지 않게 b도 값이 바뀜 (a  = b = c) => k : 9 (a  = b = c)
// 2번 메모리 4 k : 1 
// 3번 메모리 7 

/*
let a = 1
let b = 4
// 메모리의 주소가 다름
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)
*/

let a = {k: 1}
let b = {k: 1}

console.log(a, b, a === b)
a.k = 7
b = a
console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
let c = b
console.log(b, c, b === c)