// const Dell = {
//   firstName: 'Dell',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(Dell.getFullName())

// const Hello = {
//   firstName: 'Hello',
//   lastName: 'Kim',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(Hello.getFullName())

// const Pio = {
//   firstName: 'Pio',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(Pio.getFullName())

// 효율이 너무 떨어짐...

// 암묵적인 룰 파스칼케이스로 작성
function User(first, last) {
  this.firstName = first
  this.lastName = last
}

//[[Prototype]]: Object
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}


const Dell = new User('Dell', 'Lee') //생성자 함수
const Hello = new User('Hello', 'Kim')
const Pio = new User('Pio', 'Lee')


console.log(Dell.getFullName())
console.log(Hello)
console.log(Pio)