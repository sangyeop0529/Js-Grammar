import _ from 'lodash' // From `node_modules`!
import checkType from './getType' // getType.js
// import {random, user as dell} from './getRandom' // getRandom.justify

// 한번에 가져오기
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType ([1, 2, 3]))
//console.log(random(), random())
console.log(R)