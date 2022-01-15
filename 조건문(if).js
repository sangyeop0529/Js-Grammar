import random from "./getRandom";

// 조건문

console.log(random())

const a= random()

if (a === 0) {
  console.log('a is 0')
} else if (a === 9) {
  console.log('a is 9')
} else if (a === 2) {
  console.log('a is 2')
} else {
  console.log('rest...')
}