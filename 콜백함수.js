// 콜백
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('LSY!')
    callback()
  },3000)
}

// 콜백함수
timeout(() => {
  console.log('Done!')
});
