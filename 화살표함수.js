// 화살표 함수
// () => {} vs function () {}

const double = function (x, y) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2 // 축약형
console.log('doubleArrow: ', doubleArrow(7))

const doubleArrow2 = y =>  ({
  name: "Dell"
})