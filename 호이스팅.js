// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

double2();

// 기명함수는 호이스팅(함수 최상단으로 이동하는 개념) 가능
function double2() {
  console.log(a * 2);
}