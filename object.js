// Object

const user = {
  // key : value
  name: 'Dell',
  age: 32,
  email: 'sangyeop0529@gmail.com'
}
const userAge = {
  // key : value
  name: 'Dell',
  age: 32
}

const userEmail = {
  name: 'Dell',
  email: 'sangyeop0529@gmail.com'
}

// assign

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

console.log("----------------------------------")
const target2 = Object.assign({},userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

console.log("----------------------------------")
const target3 = Object.assign({},userAge)
console.log(target)
console.log(userAge)
console.log(target === userAge)

console.log("----------------------------------")
// 참조형 데이터(메모리에 있는 데이터를 참조만 해서 사용 [], {}, function)
// 다른 메모리 주소를 바라보고 있어서 false
const a = {k:123}
const b = {k:123}
console.log(a === b)

console.log("----------------------------------")
// Key
const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)