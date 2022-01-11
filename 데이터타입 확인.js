// 상대경로를 명시를 안하면 node.modules에서 찾음
import getType from './getType'

console.log(typeof 'hello world')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
// Object로 나타남
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])


console.log(getType('hello world'))
console.log(getType(123))
console.log(getType(true))
console.log(getType(undefined))
console.log(getType(null))
console.log(getType({}))
console.log(getType([]))