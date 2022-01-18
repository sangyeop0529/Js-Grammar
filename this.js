// this
// 일반 함수는 호출 위치에서 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const Dell = {
  name: 'Dell',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

Dell.normal();
Dell.arrow();

const amy = {
  name: 'Amy',
  normal: Dell.normal,
  arrow: Dell.arrow
}
amy.normal();
amy.arrow();

function User(name) {
  this.name = name
}

User.prototype.normal = function () {
  console.log(this.name)
}

User.prototype.arrow = () => {
  console.log(this.name)
}

const Tim = new User('Tim')

Tim.normal();
Tim.arrow();

const timer = {
  name: 'Dell!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}

timer.timeout();