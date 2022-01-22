// 구조 분해 할당
// 비구조화 할당

const user = {
  // key : value
  name: 'Dell',
  age: 32,
  email: 'sangyeop0529@gmail.com',
  address: 'USA'
}

// 데이터가 undefined로 비어있다면 기본값 지정 가능함
const {name: dell, age, address = "Korea"} = user
// E.g, user.address


console.log(`사용자의 이름은 ${dell}입니다.`)
console.log(`${dell}의 나이는 ${age}세입니다.`)
console.log(`${dell}의 이메일 주소는 ${user.email}입니다.`)
console.log(address)

console.log("----------------------------------")
const fruits = ['Apple', 'Banana', 'Cherry']
const [, , b] = fruits
console.log(b)