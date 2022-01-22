import _ from 'lodash'

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy) : JS로만은 어려워서 lodash를 사용
const user = {
  name: "Dell",
  age: 32,
  emails: ['sangyeop0529@naver.com']
}

// const copyUser = Object.assign({}, user) // 새로운 객체데이터
// const copyUser = {...user} //전개연산자
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@gmail.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)