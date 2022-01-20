// JS 데이터

// String: "", '', ``

const result = 'Hello world!'.indexOf('world')
const result2 = 'Hello world!'.indexOf('Dell')
console.log(result)
console.log(result2) // -1 일치값 없음

// String.prototype.indexOf()

const str = '0123'
console.log(str.length)

console.log('Wooooooow'.length)

const str2 = 'Hello world!'
console.log(str2.indexOf('Dell') !== -1)
console.log(str2.slice(6,11))
console.log(str2.replace('world', 'Dell'))
console.log(str2.replace(' world!', ''))

const str3 = "sangyeop0529@naver.com"
console.log(str3.match(/.+(?=@)/)[0])

const str4 = '           Hello world        '
console.log(str4.trim())