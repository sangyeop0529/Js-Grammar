// 변수 유효범위
// var (함수레벨) 
// let, const (블록레벨)

//console.log(a)

function scope() {
  if (true) {
    // 먼저 출력이 되므로 값이 지정 x
    //console.log(a)
    var a = 123

  }
  // error (const, let)
  console.log(a)
}

scope()