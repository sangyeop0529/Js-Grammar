// 즉시실행함수
// IIFE Immediately-Invoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}
// ; 실행문 종료;
double();

// IIFE 즉시실행함수는 끝나면 ;
(function () {
  console.log(a * 3)
})();

// 추천!!!
(function () {
  console.log(a * 5)
}())