const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry'] // 각각의 데이터 element(요소) or item

console.log(numbers[0]); //[indexing]
console.log(fruits[2]);

// .length

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)

console.log([].length)

// .concat() 두개의 배열을 병합해서 새로운 배열데이터를 만듬(원본 손상X)

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// .forEach() 콜백함수만큼 반복적으로 실행

console.log("----------------------------------")
fruits.forEach((item, i, array) => {
  console.log(item, i, array)
})

// .map() 새로운 변수에 반환!!
console.log("----------------------------------")

const a = fruits.forEach(function (fruit, index) {
  console.log(`${fruit}-${index}`)
})
console.log("----------------------------------")
console.log(a)

/* const b = fruits.map((fruit, index) => {
  return {
    id: 'index',
    name: 'fruit'
  }
}) */
const b = fruits.map((fruit, index) => ({
  id: 'index',
  name: 'fruit'
}))
console.log(b)