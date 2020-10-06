var faker = require('faker')
var randomName = faker.name.findName() // Caitlyn Kerluke
var randomPhone = faker.phone.phoneNumber() // Rusty@arne.info
var randomTransaction = faker.helpers.createTransaction() // random contact card containing many properties
console.log(randomName)
console.log(randomPhone)
console.log(randomTransaction)
