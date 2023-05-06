//module
const names = require('./name')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./mind-grenade')

console.log(data)

sayHi(names.john)
sayHi(names.peter)
sayHi('Suzane')

